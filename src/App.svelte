<script lang="ts">
  import { generate } from "./lib/utils/generator";

  $: password = generate(16, true, true, true);
</script>

<main class="min-h-screen bg-gradient-radial flex justify-center items-center">
  <h1 class="text-neutral-1 font-medium text-4xl">Password Generator</h1>

  <div>
  
  </div>
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>