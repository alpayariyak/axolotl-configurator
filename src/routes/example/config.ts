import { writable } from 'svelte/store';

export const config = writable({
     base_model: "openlm-research/open_llama_3b_v2",
    base_model_config: "openlm-research/open_llama_3b_v2",
    model_type: "AutoModelForCausalLM",
    tokenizer_type: "AutoTokenizer",
    trust_remote_code: null,
    tokenizer_use_fast: null,
    load_in_8bit: false,
    load_in_4bit: false,
    bf16: true,
    fp16: false,
    tf32: true,
    datasets: [
        {
        path: "Open-Orca/OpenOrca",
        type: "alpaca_w_system.load_open_orca",
        data_files: null,
        shards: null,
        name: null
        }
    ],
    dataset_prepared_path: "data/last_run_prepared",
    push_dataset_to_hub: null,
    hub_model_id: null,
    hf_use_auth_token: null,
    val_set_size: 0.02,
    dataset_shard_num: null,
    dataset_shard_idx: null,
    sequence_len: 2048,
    adapter: "lora",
    lora_model_dir: null,
    lora_r: 8,
    lora_alpha: 16,
    lora_dropout: 0.05,
    sample_packing: true,
    lora_target_modules: null,
    lora_target_linear: true,
    lora_modules_to_save: null,
    lora_out_dir: null,
    lora_fan_in_fan_out: false,
    wandb_mode: null,
    wandb_project: null,
    wandb_watch: null,
    wandb_run_id: null,
    wandb_log_model: null,
    output_dir: "./output",
    _distributed_training: 'fsdp',
    _attention_method: 'flash_attention_2',
    gradient_accumulation_steps: 1,
    micro_batch_size: 1,
    eval_batch_size: 1,
    num_epochs: 3,
    warmup_steps: 100,
    learning_rate: 0.00003,
    logging_steps: null,
    save_steps: null,
    save_total_limit: 3,
    eval_steps: null,
    save_safetensors: null,
    train_on_inputs: false,
    group_by_length: false,
    gradient_checkpointing: true,
    early_stopping_patience: null,
    lr_scheduler: 'cosine',
    lr_scheduler_kwargs: null,
    lr_div_factor: null,
    log_sweep_min_lr: null,
    log_sweep_max_lr: null,
    optimizer: "adamw_torch",
    weight_decay: 0.1,
    adam_beta1: 0.99,
    adam_beta2: 0.95,
    adam_epsilon: null,
    max_grad_norm: 1.0,
    flash_optimum: null,
    xformers_attention: null,
    flash_attention: true,
    sdp_attention: null,
    landmark_attention: null,
    xpos_rope: null,
    resume_from_checkpoint: null,
    auto_resume_from_checkpoints: null,
    fsdp: null as any,
    fsdp_config: null as any,
    deepspeed: null,
})