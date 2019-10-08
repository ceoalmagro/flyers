<script>
  import Output from "./output.svelte";
  export let color = "red";
  export let title = "Titulo";
  export let text = "Texto principal";
  $: localStorage.setItem("props", JSON.stringify({ color, title, text }));
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: safe center;
    justify-content: safe center;
    height: 100vh;
  }

  .input {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    align-content: center;
    gap: 1rem;
    padding: 1rem;
  }

  label {
    text-align: right;
  }

  textarea,
  input,
  select {
    appearance: none;
    font: inherit;
    background: none;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0.5rem;
  }
</style>

<main>
  <div class="input">
    <label>Color:</label>
    <select bind:value={color}>
      <option value="red">Rojo</option>
      <option value="blue">Azul</option>
      <option value="green">Verde</option>
    </select>
    <label>Titulo:</label>
    <input type="text" bind:value={title} />
    <label>Texto principal:</label>
    <textarea bind:value={text} />
  </div>
  <Output {color} {title} {text} />
</main>
