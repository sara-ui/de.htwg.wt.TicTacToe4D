<template>
  <div class="gameOverScreen flex-column">
    <h1>Game Over</h1>
    <b-button-group class="mt-5 buttonGroup">
      <b-button size="lg" variant="info" pill class="m-5" @click="restart">
        PLAY AGAIN!
      </b-button>
      <b-button size="lg" variant="info" pill class="m-5" @click="reset">
        CHOOSE DIFFERENT PLAYERS!
      </b-button>
    </b-button-group>
    <div class="overlay"></div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "GameOver",
  methods: {
    ...mapActions(["setGame", "logout"]),
    restart() {
      axios.post("/restart").then(({ data }) => {
        this.setGame(data);
        // this.$router.push({name: 'Game'})
      });
    },
    reset() {
      axios.post("/reset").then(({ data }) => {
        this.logout();
      });
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #6cd9ce;
  --secondary-color: lightgrey;
  --complimentary-color: #2e2473;
}

.gameOverScreen {
  min-height: 100vh;
  position: relative;
  width: 100vw;
  display: flex;
  background-color: var(--complimentary-color);
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  .buttonGroup {
    position: relative;
    z-index: 1000;
  }
}

h1 {
  font-size: 150px;
  color: var(--primary-color);
  transform: translateY(-600px);
  animation: 1.2s slideIn ease-in-out forwards 1s;
  z-index: 10;
  opacity: 0;
  position: relative;
}

h1::before {
  content: "";
  width: 0%;
  height: 76px;
  background-color: var(--secondary-color);
  position: absolute;
  bottom: -10px;
  animation: 1s underline ease-in-out forwards 2s;
  mix-blend-mode: screen;
}

.overlay {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  opacity: 0;
  left: 0;
  right: 0;
  background-color: var(--secondary-color);
  transform: scale(0.5);
  animation: 0.5s slideIn ease-in-out forwards, 1s skewBg ease-in-out;
}

@keyframes skewBg {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes underline {
  100% {
    width: 100%;
  }
}

@keyframes slideIn {
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
