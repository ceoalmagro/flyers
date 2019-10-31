<script>
  import Output from "./output.svelte";

  export let color = "red";
  export let title = "Titulo";
  export let text = "Texto principal";
  $: localStorage.setItem("state", JSON.stringify({ color, title, text }));

  let output;
  async function handleExport() {
    const { toPng } = await import("dom-to-image-more");
    output.style.setProperty("--big", 2);
    const url = await toPng(output, {
      width: 1080,
      height: 1080,
      style: { width: "1080px", height: "1080px" }
    });
    output.style.setProperty("--big", 1);
    window.location = url;
  }
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

  button {
    font: inherit;
    color: inherit;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    background: hsl(125, 97%, 58%);
    grid-column: 2 / -1;
  }

  button:hover {
    background: hsl(125, 97%, 48%);
  }

  button:active {
    background: hsl(125, 97%, 38%);
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
    <button on:click={handleExport}>Exportar</button>
  </div>
  <Output bind:element={output} {color} {title} {text} />
</main>
