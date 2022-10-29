<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "../../form/button";
  import { RefreshButton } from "../../form/refresh-button";
  import { Slider } from "../../form/slider";
  import { generate } from "../../../utils/generator";
  import { Choices } from "../choices";

  let length: number = 16;
  let lowercase: boolean;
  let uppercase: boolean;
  let numbers: boolean;
  let specials: boolean;
  
  $: password = generate(length, lowercase, uppercase, numbers, specials);

  onMount(() => loadPassword());


  const loadPassword = () => {
    password = generate(16, lowercase, uppercase, numbers, specials);
  }

  const onSubmit = () => {
    navigator.clipboard.writeText(password);
  }
</script>

<form on:submit|preventDefault={onSubmit} class="relative bg-gray-2 rounded-md shadow-md p-4 w-fit mx-auto">
  <div class="mb-6 grid grid-cols-[1.5fr_1fr] gap-10">
    <Slider label="Longueur du mot de passe" bind:value={length}/>
    <Choices bind:lowercase bind:uppercase bind:numbers bind:specials/>
  </div>

  <div class="flex items-center gap-3">
    <Button onClick={() => console.log("COUCOU")}>Copier le mot de passe</Button>
    <RefreshButton onClick={loadPassword}/>
  </div>
</form>

<h1 class="text-neutral-1">{password}</h1>