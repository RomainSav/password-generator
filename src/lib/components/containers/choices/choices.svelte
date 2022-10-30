<script lang="ts">
  import { Checkbox } from "../../form/checkbox";

  export let lowercase = true;
  export let uppercase = true;
  export let numbers = true;
  export let specials = true;

  $: isDisabled = [lowercase, uppercase, numbers, specials].filter((val) => val).length === 1;
</script>

<div class="grid grid-cols-2 gap-x-6">
  <Checkbox disabled={isDisabled && lowercase} label="Upper case" bind:checked={lowercase}/>
  <Checkbox disabled={isDisabled && uppercase} label="Lower case" bind:checked={uppercase}/>
  <Checkbox disabled={isDisabled && numbers} label="Numbers" bind:checked={numbers}/>
  <Checkbox disabled={isDisabled && specials} label="Symbols" bind:checked={specials}/>
</div>