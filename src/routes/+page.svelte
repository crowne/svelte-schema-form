<script lang="ts">
	import SubmitForm from "$lib/SubmitForm.svelte";

	let schema: any = {
		type: "object",
		properties: {
			something: { type: "string", maxLength: 5, description: "description for something" },
			amount: { type: "number" },
			choose: { type: "string", enum: [ "a", "b", "c" ] },
			checkThis: { type: "boolean" },
			things: {
				type: "array",
				items: {
					type: "string"
				}
			},
			complicatedThings: {
				type: "array",
				editor: "blocks",
				effectiveUrl: "/abc",
				items: {
					type: "object",
					properties: {
						name: { type: "string" },
						thumbnail: { type: "string", editor: "upload" }
					}
				}
			},
			"obj": {
				"type": "object"
			},
			"aFile": {
				"type": "string",
				"editor": "upload"
			}
		},
		required: [ "amount" ],
		pathPattern: "item_${amount}"
	};
	let storedSchema = undefined;
	if (typeof window !== 'undefined') {
		storedSchema = window.localStorage.getItem('schema');
		if (storedSchema) schema = JSON.parse(storedSchema);
	}
	let jsonInvalid = false;

	let value = { };
	let valueJson = '';
	let collapsible = false;

	const schemaUpdate = (ev: any) => {
		const newSchema = ev.currentTarget.value;
		try {
			schema = JSON.parse(newSchema);
			jsonInvalid = false;
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('schema', newSchema);
			}
			console.log('schema updated', schema);
		} catch {
			jsonInvalid = true;
		}
	}

	const submit = (e: CustomEvent) => {
		valueJson = JSON.stringify(e.detail.value, undefined, 2).trim();
	};

	const change = (e: CustomEvent) => {
		if (e.detail.op === "innerSubmit") {
			valueJson = JSON.stringify(e.detail.value, undefined, 2).trim();
		} else if (e.detail.op === "delete") {
			const conf = confirm('Are you sure you want to delete this item?');
			if (!conf) e.preventDefault();
		}
	}

	const componentContext = { currencySymbol: '£' };
</script>

<div class="grid grid-cols-3 gap-2 m-1">
	<div class="border">
		<div class="pl-0.5 pr-0.5">
			<h2>Schema</h2>
			<div>
				<input type="checkbox" id="collapsible" bind:checked={collapsible} />
				<label for="collapsible">Collapsible</label>
			</div>
			<textarea id="schema" on:keyup={schemaUpdate} class="border w-full h-dvh">
				{JSON.stringify(schema, undefined, 2)}
			</textarea>
		</div>
	</div>
	<div class="border h-dvh">
		<div class="pl-0.5 pr-0.5">
			<h2>Form</h2>
			<SubmitForm {schema} {value} on:submit={submit} on:value={change} uploadBaseUrl="https://restspace.local:3131/files" {collapsible} {componentContext} />
		</div>
	</div>
	
	<div class="border">
		<div class="pl-0.5 pr-0.5">
			<h2>Output</h2>
			<pre>
				{valueJson}
			</pre>
		</div>
	</div>
</div>
