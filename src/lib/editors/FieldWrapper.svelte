<script lang="ts">
	import { schemaLabel } from "../types/schema";
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { stringToHtml } from "../utilities.js";
	import Info from '../img/Info.svelte'

	export let params: CommonComponentParameters;
	export let schema: any;

	const title = schemaLabel(schema, params.path);
	const id = params.path.join(".");
	$: error = params.validationErrors[params.path.join(".")];
</script>

{#if params.containerParent !== "array"}
	<div class="inline-flex flex-nowrap">
		<div>
			<label
				id={`label-${id}`}
				for={id}
				class:required={params.required}
				class:readonly={schema.readOnly || params.containerReadOnly}
			>
				{@html stringToHtml(title)}
			</label>
		</div>
		{#if schema.description}
			<div title={schema.description} class="size-2.5 cursor-help">
				<Info size={12} />
			</div>
		{/if}
	</div>
{/if}
<div>
	<slot />
	{#if error && params.showErrors}
		<div class="text-red-600">{error}</div>
	{/if}
</div>
