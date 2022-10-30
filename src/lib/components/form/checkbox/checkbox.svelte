<script lang="ts">
  import { clsx } from "clsx";

  // Props :
  export let disabled = false;
  export let label: string | null = null;
  export let checked = false;

  // Style :
  $: style = clsx("relative border-2 rounded-md w-5 h-5 peer-focus:ring border-primary-1", {
    // Color
    "border-gray-4": !checked,
    "bg-primary-1": checked
  });
</script>

<label class="flex items-center">
  <div class={style}>
    <input type="checkbox" class="opacity-0 absolute inset-0 sr-only peer" bind:checked {disabled}>
    <div>
      {#if checked}
        <div class="flex items-center justify-center h-full w-full">
          <svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 24 24" class="fill-neutral-3">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
          </svg>
        </div>
      {/if}
    </div>
  </div>
  {#if label}
    <div class="ml-2">
      <p class="text-neutral-3">{label}</p>
    </div>
  {/if}
</label>