<template>
  <div>
    <section class="container_home">
      <div class="text_presentation">
        <p class="opc-txt">Salut,</p>
        <p class="opc-txt">Je suis Hicham,</p>
        <h1 class="opc-txt">Développeur Web Junior</h1>
        <p class="opc-txt">
          Je suis un passionné de codage, j'ai fais une formation de 7 mois chez
          Simplon. Mon enthousiasme pour la programmation me pousse à poursuivre
          une carrière dans le développement.
        </p>
        <button class="">
          <a
            href="/src/assets/HICHAM CV.pdf"
            download="CV_Hicham_Zouit"
            class="opc-txt"
          >
            Télécharger mon cv
          </a>
        </button>
      </div>
      <div class="container_img">
        <picture>
          <source
            media="(max-width: 816px)"
            srcset="../assets/Programming2.webp"
            width="250"
            height="250"
          />
          <source
            media="(min-width: 817px)"
            srcset="../assets/Programming.webp"
            width="300"
            height="300"
          />
          <img
            src="../assets/Programming2.webp"
            srcset="
              ../assets/Programming.webp  817w,
              ../assets/Programming2.webp 816w
            "
            sizes="(max-width: 816px) 100vw, 817px"
            alt="gif d'un homme qui code"
          />
        </picture>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container_home {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5% auto;
  width: 70%;
}
.text_presentation {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  align-items: start;
  width: 50%;
}
.text_presentation :nth-child(1) {
  font-size: clamp(24px, 30px, 48px);
}
.text_presentation :nth-child(2),
.text_presentation :nth-child(3) {
  font-size: clamp(24px, 40px, 48px);
}

.text_presentation :nth-child(4) {
  margin: 20px 0;
}
.container_img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_img img {
  width: 300px;
  border-radius: 50%;
}

.text_presentation button {
  padding: 1rem;
  margin: 20px 0;
  border-radius: 50px;
  background-color: black;
  color: wheat;
  border: solid 5px white;
  cursor: pointer;
  position: relative;
  transition: background 300ms;
}

.text_presentation button:hover {
  background: wheat;
}
.text_presentation button:hover a {
  color: #000;
}

@media (max-width: 1040px) {
  .container_home {
    width: 100%;
    flex-direction: column-reverse;
  }

  .text_presentation {
    width: 70%;
  }
  .text_presentation button {
    margin: 20px auto;
  }
}

@media (max-width: 816px) {
  .text_presentation button p {
    font-size: 22px !important;
  }
  .container_img img {
    width: 250px;
  }
}
</style>
