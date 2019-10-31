<script>
  import marked from "marked";
  marked.setOptions({
    smartLists: true,
    smartypants: true
  });

  export let element;

  export let color = "red";
  export let title = "Titulo";
  export let text = "Texto principal";

  let width, height;
  let scale = 1;
  $: scale = Math.min(516 / width, 516 / height);
</script>

<style>
  .output {
    width: 540px;
    height: 540px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 12px;

    --big: 1;
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

  .text > :global(ul),
  .text > :global(ol) {
    padding-left: 2ch;
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

<div class="output {color}" bind:this={element}>
  <div
    class="container"
    style="transform: scale(calc({scale} * var(--big)))"
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
