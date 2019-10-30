<script>
  import Output from "./output.svelte";
  export let color = "red";
  export let title = "Titulo";
  export let text = "Texto principal";
  $: localStorage.setItem("state", JSON.stringify({ color, title, text }));
</script>

<style>
  main {
    display: flex;
    gap: 1rem;
    max-height: 1024px;
  }

  @media (max-width: 1024px) {
    main {
      flex-direction: column;
    }
  }

  .input {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content max-content 1fr;
    gap: 1rem;
  }

  label {
    padding: 0.5rem 0;
    text-align: right;
    font-weight: bold;
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

  textarea {
    resize: horizontal;
  }

  @media (max-width: 1024px) {
    textarea {
      resize: vertical;
    }
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
    <label>Texto:</label>
    <textarea bind:value={text} />
  </div>
  <Output {color} {title} {text} />
</main>
