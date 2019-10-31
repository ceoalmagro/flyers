<script>
  import marked from "marked";
  marked.setOptions({
    smartLists: true,
    smartypants: true
  });

  export let color, title, text;
</script>

<style>
  .output {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 540px;
    height: 540px;
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

<div class="output {color}">
  {#if title}
    <h1 class="title">{title}</h1>
  {/if}
  {#if text}
    <div class="text">
      {@html marked(text)}
    </div>
  {/if}
</div>
