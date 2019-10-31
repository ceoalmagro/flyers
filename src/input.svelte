<script>
  export let state;
</script>

<style>
  .input {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content max-content 1fr max-content;
    gap: 1rem;
  }

  textarea {
    resize: none;
  }

  button {
    grid-column: 2 / -1;
  }
</style>

<div class="input">
  <label>Color:</label>
  <select bind:value={state.color}>
    <option value="red">Rojo</option>
    <option value="blue">Azul</option>
    <option value="green">Verde</option>
  </select>
  <label>Titulo:</label>
  <input type="text" bind:value={state.title} />
  <label>Texto:</label>
  <textarea bind:value={state.text} />
  <button>Exportar</button>
</div>
