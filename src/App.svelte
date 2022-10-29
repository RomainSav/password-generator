<script lang="ts">
  import { generate } from "./lib/utils/generator";
  import { Generator } from "./lib/components/containers/generator";

  $: password = generate(16, true, true, true);
</script>

<main class="min-h-screen bg-gradient-radial flex flex-col justify-center items-center">
  <h1 class="text-neutral-1 font-medium text-4xl">Password Generator</h1>

  <div class="mt-10">
    <Generator />
  </div>
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>