<script lang="ts">
  import { Input } from "../input";

  // Props :
  export let label: string;
  export let min = 1;
  export let max = 50;
  export let value = 1;
</script>

<div class="flex flex-col">
  <span class="text-neutral-3 mb-1">{label}</span>

  <div class="flex gap-2 items-center">
    <Input bind:value/>
    <input type="range" {min} {max} bind:value class="w-full h-2 bg-gray-1 rounded-lg appearance-none cursor-pointer">
  </div>
</div>