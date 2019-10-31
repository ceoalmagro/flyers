import App from "./app.svelte";

const defaultState = {
  color: "red",
  title: "Ejemplo:",
  text: `![imagen](https://picsum.photos/id/1/400/100)

# Subtitulo

## Sub-subtitulo

_italicas_, **negrita**

<center>Texto centrado</center>

- Listas
 - Sub-listas
 - Re copado bro

1. Listas ordenadas
2. Blablabla...`
};

const state = localStorage.getItem("state");

const app = new App({
  target: document.body,
  props: state ? JSON.parse(state) : defaultState
});

window.matchMedia("(max-width: 1024px)").addEventListener("change", query => {
  document.querySelector("textarea").removeAttribute("style");
});
