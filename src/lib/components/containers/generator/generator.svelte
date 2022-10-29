<script lang="ts">
  import { Button } from "../../form/button";

  const onSubmit = () => {

  }
</script>
<form on:submit|preventDefault={onSubmit} class="bg-gray-1 rounded-md shadow-md p-4">
  
  <Button onClick={() => console.log("COUCOU")}>Copier le mot de passe</Button>
</form>