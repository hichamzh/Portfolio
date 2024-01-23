<template>
  <div>
    <div class="blur"></div>
    <div class="blur2"></div>
    <main id="home">
      <Navbar />
      <Home />
    </main>
    <section id="tools">
      <h2 class="font-bold">Les outils que j'utilise</h2>
      <div class="container_tools">
        <section class="container_1">
          <Tool />
        </section>
        <section class="container_1">
          <Skill />
        </section>
      </div>
    </section>
    <section id="projets">
      <div class="container_projets">
        <div class="text_projets">
          <h3>Mes projets</h3>
          <p>Découvrez mes projets</p>
          <div class="butt_projets">
            <a href="">tous mes projets</a>

            <img
              src="@/assets/arrow_top.png"
              alt="fleche"
              width="24px"
              height="24px"
            />
          </div>
        </div>
        <div class="projets">
          <Card_projet />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Tool from "./components/Tool.vue";
import Skill from "./components/Skill.vue";
import Card_projet from "./components/Card_projet.vue";
</script>

<style lang="scss" scoped>
.blur,
.blur2 {
  position: absolute;
  filter: blur(200px);
  border-radius: 100%;
  width: 30%;
  height: 50%;
  background: rgba(0, 0, 255, 0.547);
  z-index: -100;
}
.blur2 {
  bottom: 18%;
  right: 0;
  background: rgba(0, 0, 255, 0.547);
}
#home {
  min-height: 100dvh;
  width: 100%;
}
/*PARTIE SKILLS*/
#tools {
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: wheat;
  position: relative;
}
#tools h2 {
  font-size: clamp(24px, 5vw, 48px);
  color: #000;
}
// PARTIE TOOLS
.container_tools {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding: 50px;
}
.container_1 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
//PARTIE PROJET

#projets {
  display: flex;
  width: 100%;
  min-height: 100dvh;
  padding-bottom: 10px;
}
.container_projets {
  display: flex;
  // flex-direction: column;
  // align-items: center;
  width: 100%;
  gap: 2%;
  margin: 0 auto;
  padding: 2%;
}
.text_projets {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 50%;
  height: 100%;
}
.text_projets h3 {
  font-size: clamp(24px, 5vw, 48px);
}

.text_projets p {
  font-size: clamp(18px, 4vw, 32px);
  color: white;
  text-align: center;
}

.text_projets .butt_projets {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: wheat;
  border-radius: 20px;
  padding: 8px;
  min-width: 30%;
  cursor: pointer;
  position: relative;
}

.butt_projets a {
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  font-size: clamp(16px, 10px, 20px);
  text-align: center;
}

.butt_projets img {
  transform: rotate(90deg);
}
.projets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 95%;
  padding: 0%;
}
// RESPONSIVE
@media screen and (min-width: 1040px) {
  .projets::-webkit-scrollbar {
    visibility: hidden;
  }
}
@media (max-width: 1040px) {
  .container_projets {
    flex-direction: column;
    align-items: center;
  }
  .text_projets {
    height: 50%;
  }
  .projets {
    display: flex;
    flex-direction: initial;
    width: 100%;
    height: 100%;
    // overflow-x: auto;
  }
}
@media (max-width: 816px) {
  #tools h2 {
    margin-top: 40px;
  }
  .text_projets {
    padding: 0 20px;
  }
  .text_presentation button p {
    font-size: 22px !important;
  }
}
@media (max-width: 380px) {
  .text_projets .butt_projets a {
    font-size: 10px;
  }
}
</style>
