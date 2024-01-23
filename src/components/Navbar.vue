<template>
  <div>
    <header>
      <nav>
        <div>
          <p class="opc">hicham</p>

          <ul class="nav_bar">
            <li class="line opc">
              <a href="#tools"> Tools </a>
            </li>
            <li class="line opc">
              <a href="#projets"> mes projets </a>
            </li>
          </ul>
          <button class="contact opc">
            <a href="/Contact/contact.html"> Contacter moi </a>
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: end;
  width: 100%;
}
nav {
  padding: 20px;
  width: 100%;
  margin-top: 20px;
}
nav div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.nav_bar {
  display: flex;
  justify-content: space-evenly;
  width: 50%;
}

nav li,
nav a,
nav div p {
  font-size: 20px;
}

.contact {
  padding: 12px;
  background: transparent;
  border: solid white 3px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 300ms;
  position: relative;
}

.contact:hover {
  background-color: wheat;
  color: #000;
}
.contact:hover.contact a {
  color: #000;
}
.line {
  position: relative;
}

.line::after {
  content: "";
  position: absolute;
  top: 30px;
  left: 0%;
  height: 2px;
  width: 0%;
  background-color: white;
  transition: width 300ms;
}

.line:hover::after {
  width: 100%;
}

@media (max-width: 1040px) {
  .nav_bar {
    display: none;
  }

  nav {
    justify-content: space-around;
  }
}
</style>
