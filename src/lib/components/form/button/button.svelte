<script lang="ts">
  export let onClick: () => void = () => null;
</script>

<button on:click={onClick} class="bg-primary-1 rounded-md py-2 px-4 text-neutral-1 w-full hover:bg-primary-2 transition-colors duration-200">
  <slot />
</button>