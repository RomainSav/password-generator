<script lang="ts">
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";
  import config from "../../utils/particles.json";
</script>

<Particles id="tsparticles" options={config} particlesInit={(engine) => loadFull(engine)}/>