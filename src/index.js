import App from "./app.svelte";

const app = new App({
  target: document.body,
  props: JSON.parse(localStorage.getItem("props") || "{}")
});
