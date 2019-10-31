<script>
  import marked from "marked";
  marked.setOptions({
    smartLists: true,
    smartypants: true
  });

  export let color, title, text;

  let w1, h1, w2, h2;
  let scale = 1;
  $: scale = Math.min((w1 - 32) / w2, (h1 - 32) / h2);
</script>

<style>
  .output {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vmin;
    height: 100vmin;
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

  .title {
    margin: 0 0 0.5rem;
  }

  .text {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }

  .text > :global(:first-child) {
    margin-top: 0;
  }

  .text > :global(:last-child) {
    margin-bottom: 0;
  }

  .text > :global(ol),
  .text > :global(ul) {
    padding-left: 2ch;
  }
</style>

<div class="output {color}" bind:clientWidth={w1} bind:clientHeight={h1}>
  <div
    class="container"
    style="transform: scale({scale})"
    bind:clientWidth={w2}
    bind:clientHeight={h2}>
    {#if title}
      <h1 class="title">{title}</h1>
    {/if}
    {#if text}
      <div class="text">
        {@html marked(text)}
      </div>
    {/if}
  </div>
</div>
