import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

const section_projet = document.querySelector(".projets");
const container_projet = document.querySelector(".container_projets");

const child_projet = section_projet.childElementCount;

if (child_projet >= 5 && window.innerWidth > 1024) {
  container_projet.style.alignItems = "center";
  container_projet.style.flexDirection = "column";
}
