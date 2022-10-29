<script lang="ts">
  export let value = 1;
  export let min: number;
  export let max: number;
</script>

<input type="number" {min} {max} class="rounded-md p-2 w-12 outline-none bg-gray-1 text-neutral-2" bind:value>