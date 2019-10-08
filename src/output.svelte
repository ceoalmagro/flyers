<script>
  export let color = "red";
  export let title = "Titulo";
  export let text = "Texto principal";
</script>

<style>
  #output {
    width: 512px;
    height: 512px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin: 0;
    text-align: center;
    max-width: 75%;
  }

  p {
    background: white;
    padding: 0.5rem;
    border-radius: 4px;
    max-width: 75%;
    text-align: justify;
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

<div id="output" class={color}>
  <h1>{title}</h1>
  <p>{text}</p>
</div>
