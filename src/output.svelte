<script>
  import marked from "marked";
  export let color = "red";
  export let title = "Titulo";
  export let text = "Texto principal";

  let width, height;
  let scale = 1;
  $: scale = Math.min(488 / width, 488 / height);
</script>

<style>
  .output {
    width: 512px;
    height: 512px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 12px;
  }

  .container {
    transition: transform 0.25s;
  }

  h1 {
    margin: 0 0 0.25rem;
    text-align: center;
  }

  .text {
    background: white;
    padding: 1rem;
    border-radius: 4px;
    text-align: justify;
  }

  .text > :global(*:first-child) {
    margin-top: 0;
  }

  .text > :global(*:last-child) {
    margin-bottom: 0;
  }

  .text :global(img) {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .red {
    background: linear-gradient(to bottom right, #ff0039, #ff9400);
  }
  .blue {
    background: linear-gradient(to bottom right, #45a1ff, #c069ff);
  }
  .green {
    background: linear-gradient(to bottom right, #30e60b, #ffe900);
  }
</style>

<div class="output {color}">
  <div
    class="container"
    style="transform: scale({scale})"
    bind:clientWidth={width}
    bind:clientHeight={height}>
    {#if title}
      <h1>{title}</h1>
    {/if}
    {#if text}
      <div class="text">
        {@html marked(text)}
      </div>
    {/if}
  </div>
</div>
