<script lang="ts">
  import { clsx } from "clsx";

  // Props :
  export let label: string;
  export let showed: boolean;

  // Style :
  $: style = clsx("flex items-center gap-2 p-4 shadow-md rounded-md bg-success-1/20 fixed top-5 right-5 border border-success-1/50 transition-opacity duration-400", {
    "opacity-0": !showed,
    "opacity-100": showed
  });
</script>

<div class={style}>
  <p class="text-neutral-1">{label}</p>
</div>