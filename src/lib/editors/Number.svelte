<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;

	$: border = (params.showErrors && params.path.join(".") in params.validationErrors) ? "border border-red-600" : "border border-grey-200";

</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<input id={params.path.join('.')} name={params.path.join('.')}
		type="number" value={value || ''}
		disabled={schema.readOnly || params.containerReadOnly}
		on:input={ev => {
			let val = parseFloat(ev.currentTarget.value);
			params.pathChanged(params.path, isNaN(val) ? undefined : val);
		}}
		class="{border} w-full"
	/>
</svelte:component>