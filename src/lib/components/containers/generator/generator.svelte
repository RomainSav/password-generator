<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "../../form/button";
  import { RefreshButton } from "../../form/refresh-button";
  import { Slider } from "../../form/slider";
  import { generate } from "../../../utils/generator";
  import { Choices } from "../choices";
  import { Alert } from "../alert";

  let isAlertShowed = false;

  let length: number = 16;
  let lowercase: boolean;
  let uppercase: boolean;
  let numbers: boolean;
  let specials: boolean;
  
  $: password = generate(length, lowercase, uppercase, numbers, specials);

  onMount(() => loadPassword());

  const loadPassword = () => {
    password = generate(length, lowercase, uppercase, numbers, specials);
  }

  let alertTimeout: number = 0;
  const onSubmit = () => {
    navigator.clipboard.writeText(password);
    isAlertShowed = true;

    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(() => isAlertShowed = false, 4000);
  }
</script>

<Alert label="You have copied the password!" showed={isAlertShowed}/>

<div class="mx-auto w-fit">
  <form on:submit|preventDefault={onSubmit} class="bg-gray-2 rounded-md shadow-md p-4 mb-5">
    <div class="mb-6 grid grid-cols-[1.5fr_1fr] gap-10">
      <Slider label="Longueur du mot de passe" max={60} min={1} bind:value={length}/>
      <Choices bind:lowercase bind:uppercase bind:numbers bind:specials/>
    </div>
  
    <div class="flex items-center gap-3">
      <Button onClick={() => console.log("COUCOU")}>Copier le mot de passe</Button>
      <RefreshButton onClick={loadPassword}/>
    </div>
  </form>
  
  <div class="bg-gray-2 w-full p-4 rounded-md shadow-md">
    <p class="text-neutral-3 font-medium">{password}</p>
  </div>
</div>