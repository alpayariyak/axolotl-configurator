<script>
	import Section from "$lib/components/Section.svelte";
    import {config} from './config'
    let training_config = [
        {
            name: 'Model',
            field: 'base_model',
            type: 'text',
            description: "Hugging Face Repo for the Base Model",
            required: true
        },
        {
            name: 'Hugging Face API Key',
            // field: 'base_model',
            type: 'text',
            description: '<span class="text-sm opacity-100">If the model is in a private repo or is gated by access, provide your HuggingFace token, which you can access at </span> <a target="_blank" class="anchor text-sm" href="https://huggingface.co/settings/tokens">huggingface.co/settings/tokens</a>',
        },
    ]
</script>

<Section config={$config} name="Model Settings" description="Selecting Base Model" open ui_config={training_config} />