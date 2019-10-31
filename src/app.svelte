<script>
  import Input from "./input.svelte";
  import Output from "./output.svelte";

  import defaultState from "./state";
  const loadedState = localStorage.getItem("state");
  let state = loadedState ? JSON.parse(loadedState) : defaultState;
  $: localStorage.setItem("state", JSON.stringify(state));
</script>

<style>
  main {
    display: flex;
    justify-content: safe center;
    flex-wrap: wrap;
    gap: 1rem;

    height: 100vh;
  }
</style>

<main>
  <Input bind:state />
  <Output {...state} />
</main>
