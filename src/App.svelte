<script lang="ts">
  import { onMount } from "svelte";
  import { generate } from "./lib/utils/generator";
  import { Generator } from "./lib/components/containers/generator";
  
  let password: string;
  onMount(() => loadPassword());

  const loadPassword = () => {
    password = generate(16, true, true, true, true);
  }
</script>

<main class="min-h-screen bg-gradient-radial flex flex-col justify-center items-center">
  <h1 class="text-neutral-1 font-medium text-4xl">Password Generator</h1>

  <div class="mt-10 w-full">
    <Generator />
  </div>
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>