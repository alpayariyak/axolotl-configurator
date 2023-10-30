<script>
    import Section from "$lib/components/Section.svelte";
    import {config} from './config';

    let training_config = [
        { name: 'QLoRA', field: 'adapter', value: 'qlora',
            description: 'Memory-efficient method that quantizes the model weights to 4-bits, speeding up training while preserving effectiveness similar to LoRA. Ideal for projects with limited GPU memory resources.' },
        { name: 'LoRA', field: 'adapter', value: 'lora',
            description: 'A balanced approach that fine-tunes smaller matrices to approximate the large weight matrix, saving training time and memory. Good for achieving a balance between efficiency and performance.' },
        { name: 'Full Fine Tune', field: 'adapter', value: '',
            description: 'A thorough fine-tuning method that adjusts all weights in the model, aiming for the highest performance. Suitable for projects with ample training resources and a demand for top-tier accuracy.' },
    ];

    let selectedAdapter = null;

    function selectTraining(training) {
        selectedAdapter = training.value;
    }
</script>

<style>
    .training-container {
        display: flex;
        gap: 20px;
        justify-content: space-between;
    }

    .training-box {
        flex: 1;
        padding: 8px 12px;
        border: 0.869565px solid rgb(71, 71, 71);
        border-radius: 4px;
        cursor: pointer;
        /*background-color: hsl(0, 0%, 20.8%);*/
        color: rgb(255, 255, 255);
        transition-duration: 0.2s;
        transition-property: color, background-color, border-color, box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 0 rgba(255, 255, 255, 0.5), 0 0 0 rgba(59, 130, 246, 0.5), 0 0 0 rgba(0, 0, 0, 0);
        /*font-family: system-ui;*/
        font-size: 16px;
        line-height: 22px;
        box-sizing: border-box;
        width: 100%; /* Adjust width as needed */
        text-align: center;
        font-weight: normal;
    }

    .description-container {
    /*text-align: left;  !* This will align the description text to the left *!*/
        font-weight: normal;
        font-size: 12px;
    }

    .training-box {
        flex: 1;
        padding: 8px 12px;
        border: 0.869565px solid rgb(59, 41, 117);
        border-radius: 4px;
        cursor: pointer;
        /*background-color: hsl(0, 0%, 20.8%);*/
        color: rgb(255, 255, 255);
        transition-duration: 0.2s;
        transition-property: color, background-color, border-color, box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 0 rgba(255, 255, 255, 0.5), 0 0 0 rgba(59, 130, 246, 0.5), 0 0 0 rgba(0, 0, 0, 0);
        /*font-family: system-ui;*/
        font-size: 16px;
        line-height: 22px;
        box-sizing: border-box;
        width: 100%; /* Adjust width as needed */
        text-align: center;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        justify-content: center;  /* This will vertically center the content container */
    }

    .content-container {
        display: flex;
        flex-direction: column;
        height: 100%;  /* This will take the full height of the training box */
    }

    .title-container {
        height: 30px;  /* Adjust this value based on your requirements */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .description-text {
        border-bottom-color: rgb(229, 231, 235);
        border-bottom-style: solid;
        border-bottom-width: 0px;
        border-left-color: rgb(229, 231, 235);
        border-left-style: solid;
        border-left-width: 0px;
        border-right-color: rgb(229, 231, 235);
        border-right-style: solid;
        border-right-width: 0px;
        border-top-color: rgb(229, 231, 235);
        border-top-style: solid;
        border-top-width: 0px;
        box-sizing: border-box;
        color: rgb(255, 255, 255);
        display: inline;
        /*font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";*/
        font-size: 14px;
        line-height: 16px;
        opacity: 0.8;
        tab-size: 4;
        width: auto;
        text-align: left;
    }

    .training-box.selected {
        background-color: rgb(59, 41, 117);
    }
</style>

<!-- Your script and HTML remain the same as before -->

<Section config={$config} name="Fine-Tuning Method" open={true} required=true description="Selecting a Fine-Tuning method to train your model.">
    <div class="training-container">
        {#each training_config as training}
            <button
                class="training-box {selectedAdapter === training.value ? 'selected' : ''}"
                on:click={() => selectTraining(training)}
            >
                <div class="content-container">
                    <div class="title-container">
                        <h3>{training.name}</h3>
                    </div>
                    <div class="description-container">
                        <p class="description-text">{training.description}</p>
                    </div>
                </div>
            </button>
{/each}

    </div>
</Section>


