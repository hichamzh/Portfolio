import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import Home from "./components/Home.vue";
// import Vue from "vue";
// import VueRouter from "vue-router";

createApp(App).mount("#app");

const section_projet = document.querySelector(".projets");
const container_projet = document.querySelector(".container_projets");

const child_projet = section_projet.childElementCount;

if (child_projet >= 5 && window.innerWidth > 1024) {
  container_projet.style.alignItems = "center";
  container_projet.style.flexDirection = "column";
}

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: App,
//   },

//   {
//     path: "*",
//     component: Home,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;
