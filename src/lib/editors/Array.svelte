<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue, schemaLabel } from "../types/schema.js";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	import Add from '../img/Add.svelte'
	import Delete from '../img/Delete.svelte'
	import Down from '../img/Down.svelte'
	import Duplicate from '../img/Duplicate.svelte'
	import Up from '../img/Up.svelte'
    import { stringToHtml } from "../utilities.js";
    import { arrayDelete, arrayAdd, arrayUp, arrayDown, arrayDuplicate, arrayFill } from "../arrayOps.js";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any[];

	let collapserOpenState: "open" | "closed" = params.path.length === 0 || !params.collapsible ? "open" : "closed";

	const toggle = () => {
		collapserOpenState = collapserOpenState === "open" ? "closed" : "open";
	}

	// If schema specifies minItems, pad out the array if necessary
	$: arrayFill(schema, params, value)();

	$: legendText = schemaLabel(schema, params.path);
	$: showWrapper = (value && value.length > 0) || schema.emptyDisplay !== false;
	$: emptyText = (!value || value.length === 0) && typeof schema.emptyDisplay === 'string' && schema.emptyDisplay;
	$: readOnly = params.containerReadOnly || schema.readOnly || false;
	$: controls = schema.controls === undefined ? (readOnly ? '' : 'add, reorder, delete, duplicate') : schema.controls;
	$: atMaxItems = typeof schema.maxItems === 'number' && (value?.length || 0) >= schema.maxItems;
	$: atMinItems = typeof schema.minItems === 'number' && (value?.length || 0) <= schema.minItems;
</script>

{#if showWrapper}
{#if params.collapsible || legendText}
	<legend class="subset-label array-label">
		{#if params.collapsible }
		<span class="collapser {collapserOpenState}" on:click={toggle}></span>
		{/if}
		<h4>{@html stringToHtml(legendText)}</h4>
		{#if schema.description}
		<span class="subset-label-description object-label-description">{@html stringToHtml(schema.description)}</span>
		{/if}
	</legend>
	{#if controls.includes('add') && !atMaxItems}
	<button type="button" title="add item" on:click={arrayAdd(schema, params, value)}>
		<Add />
	</button>
	{/if}
{/if}
<fieldset name={params.path.join('.')} class="col-span-2 array depth-{params.path.length}">
	{#if collapserOpenState === "open"}
		{#if !emptyText}
			{#each value || [] as item, idx (idx)}
			<div class="py-0.5 grid grid-cols-[min-content_1fr]">
				<div class="list-controls inline-flex flex-nowrap">
					{#if controls.includes('delete') && !atMinItems}
					<button type="button" title="delete" on:click={arrayDelete(idx, params, value)}>
						<Delete />
					</button>
					{/if}
					{#if controls.includes('duplicate') && !atMaxItems}
					<button type="button" title="duplicate" on:click={arrayDuplicate(idx, params, value)}>
						<Duplicate />
					</button>
					{/if}
					{#if controls.includes('reorder') && idx > 0}
					<button type="button" title="move up" on:click={arrayUp(idx, params, value)}>
						<Up />
					</button>
					{:else}
					<span class="w-6"/>
					{/if}
					{#if controls.includes('reorder') && idx < (value || []).length - 1}
					<button type="button" title="move down" on:click={arrayDown(idx, params, value)}>
						<Down />
					</button>
					{:else}
					<span class="w-6"/>
					{/if}
				</div>
				<div>
					<svelte:component this={SubSchemaForm}
						params={{
							...params,
							path: [ ...params.path, idx.toString() ],
							containerParent: "array",
							containerReadOnly: params.containerReadOnly || schema.readOnly || false
						}}
						value={item}
						bind:schema={schema.items}
					/>
				</div>
			</div>
			{/each}
		{:else}
			<div class="emptyText">{emptyText}</div>
		{/if}
	{/if}
</fieldset>
{/if}