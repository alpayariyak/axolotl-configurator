<script lang="ts">
    export let config: any
    import YAML from 'yaml'
    let hide_null = true
    let config_string = YAML.stringify($config)
    import { AccordionItem } from '@skeletonlabs/skeleton';

    const handleChange = () => {
        $config = YAML.parse(config_string)
    }
    const handleUpdateYaml = () => {
        config_string = YAML.stringify($config)
    }
    const handleHideUnusedParams = () => {
        if (hide_null) {
            const filterdConfig = Object.fromEntries(
                Object.entries(config).filter(([key, value]) => value !== null)
            );
            config_string = YAML.stringify(filterdConfig)
        } else {
            config_string = YAML.stringify($config)
        }
        hide_null = !hide_null
    }
</script>

<AccordionItem>
    <svelte:fragment slot="summary">
        <div class="text-xl font-bold">
            Full Configuration
        </div>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <div class="w-full">
            <h4 class="h4">
                <button type="button" class="btn btn-small float-right" on:click={handleUpdateYaml}>Update YAML</button>
            </h4>
            <textarea class="w-full h-96 input" on:input={handleChange} bind:value={config_string}></textarea>
        </div>
    </svelte:fragment>
</AccordionItem>
