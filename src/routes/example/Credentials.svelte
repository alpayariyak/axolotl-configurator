<script>
	import Section from "$lib/components/Section.svelte";
    import {config} from './config'
    let wandb_config = [
        [
                {
                name: 'W&B API Key',
                field: 'wandb_api_key',
                type: 'text',
                required: true,
                description: '<span class="text-sm opacity-100">Your API key can be found at </span> <a target="_blank" class="anchor text-sm" href="https://wandb.ai/authorize">wandb.ai/authorize</a>'
            }
            ],
        [

            {
                name: 'Project',
                field: 'wandb_project',
                type: 'text',
                description: 'The project to put the run under. All runs you start under the same Project will' +
                    ' be grouped together, and you will be able to see graphs comparing them.'
            },
            {
                name: 'Entity',
                field: 'wandb_entity',
                type: 'text',
                description: 'The organization to create the Run and Project under. This can be your username or ' +
                    'the name of a team you belong to.'
            },
             {
                name: 'Run ID',
                field: 'wandb_run_id',
                type: 'text',
                description: 'An ID for the run. If you do not specify one, a random ID will be generated.'
            },
        ],
        // [
        //
        // ]
    ]
</script>

<Section config={$config} name="Weights & Biases" ui_config={wandb_config} description="Tracking and Visualizing the training.">
    <div class="description">
        <span class="text-sm opacity-80" style="white-space: pre-line">Weights & Biases (W&B) is a platform that allows you to track and visualize your training runs in real time.
        A W&B API Key is required to for RunPod Fine-Tuning. You can create a free account at <a href="https://wandb.ai/site" target="_blank" rel="noopener noreferrer" class="anchor">wandb.ai</a>.
        </span>
    </div>
</Section>

