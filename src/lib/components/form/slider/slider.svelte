<script lang="ts">
  import { Input } from "../input";

  // Props :
  export let label: string;
  export let min: number;
  export let max: number;
  export let value = 1;
</script>

<div class="flex flex-col">
  <span class="text-neutral-3 mb-1">{label}</span>

  <div class="flex gap-2 items-center">
    <Input bind:value {min} {max}/>
    <input type="range" {min} {max} bind:value class="w-full h-2 bg-gray-1 rounded-lg appearance-none cursor-pointer">
  </div>
</div>