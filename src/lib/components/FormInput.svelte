<!-- File: FormInput.svelte -->
<script lang="ts">
    export let name: string;
    export let fieldName: string;
    export let required = false;
</script>

<style>
    .required-asterisk {
        color: red;
    }
</style>

<div class="w-full">
    <label class="font-bold" for={fieldName}>
        {name}
        {#if required}
            <span class="required-asterisk">*</span>
        {/if}
        <slot name="label"/>
    </label>

    <slot/>

    <span class="text-sm opacity-80">
        <slot name="description"/>
    </span>
</div>
