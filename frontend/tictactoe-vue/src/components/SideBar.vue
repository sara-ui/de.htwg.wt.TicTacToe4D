<template>
  <div class="p-0 h-100 bg-info shadow sideBar">
    <div class="h-100 d-flex flex-column">
      <div @click="homeScreen()" class="mt-2 mb-5 mx-auto mytooltip">
        <img
          class="img-fluid text-white"
          height="60px"
          width="60px"
          src="/myAssets/img/TicTacToe4D_Transparent.png"
          alt="Home"
        />
        <span class="tooltiptext">Home</span>
      </div>
      <div
        @click="undo()"
        class="mt-2 mb-4 mx-auto mytooltip"
        @mouseenter="buttonUndoHover = true"
        @mouseleave="buttonUndoHover = false"
      >
        <b-icon
          class="text-white m-0 h2"
          icon="arrow-return-left"
          :animation="buttonUndoHover ? 'cylon' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          Undo
        </span>
      </div>
      <div
        @click="redo()"
        class="mt-2 mb-4 mx-auto mytooltip"
        @mouseenter="buttonRedoHover = true"
        @mouseleave="buttonRedoHover = false"
      >
        <b-icon
          class="text-white m-0 h2"
          icon="arrow-return-right"
          :animation="buttonRedoHover ? 'cylon' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          Redo
        </span>
      </div>
      <div class="my-auto"></div>
      <div
          @click="about()"
          class="mt-2 mb-4 mx-auto mytooltip"
          @mouseenter="buttonAboutHover = true"
          @mouseleave="buttonAboutHover = false"
      >
        <b-icon
            class="text-white m-0 h2"
            icon="info-circle"
            :animation="buttonAboutHover ? 'throb' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          About
        </span>
      </div>
      <div
        @click="restart()"
        class="mt-2 mb-4 mx-auto mytooltip"
        @mouseenter="buttonRestartHover = true"
        @mouseleave="buttonRestartHover = false"
      >
        <b-icon
          class="text-white m-0 h2"
          icon="arrow-counterclockwise"
          :animation="buttonRestartHover ? 'spin-reverse' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          Restart
        </span>
      </div>
      <div
          @click="reset()"
          class="mt-2 mb-4 mx-auto mytooltip"
          @mouseenter="buttonResetHover = true"
          @mouseleave="buttonResetHover = false"
      >
        <b-icon
            class="text-white m-0 h2"
            icon="arrow-repeat"
            :animation="buttonResetHover ? 'spin' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          Reset
        </span>
      </div>
      <div
        @click="logMeOut()"
        class="mt-2 mb-4 mx-auto mytooltip"
        @mouseenter="buttonLogOutHover = true"
        @mouseleave="buttonLogOutHover = false"
      >
        <b-icon
          class="text-white m-0 h2"
          icon="door-open"
          :animation="buttonLogOutHover ? 'throb' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          Logout
        </span>
      </div>
      <a
        href="/password/change"
        class="mt-2 mb-4 mx-auto mytooltip"
        @mouseenter="buttonPWHover = true"
        @mouseleave="buttonPWHover = false"
      >
        <b-icon
          class="text-white m-0 h2"
          icon="tools"
          :animation="buttonPWHover ? 'throb' : null"
        >
        </b-icon>
        <span class="tooltiptext">
          Change Password
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "SideBar",

  data: () => ({
    buttonAboutHover: false,
    buttonUndoHover: false,
    buttonRedoHover: false,
    buttonRestartHover: false,
    buttonResetHover: false,
    buttonLogOutHover: false,
    buttonPWHover: false
  }),
  methods: {
    ...mapActions(["setGame", "logout"]),
    homeScreen() {
      this.$router.push({ name: "Game" });
    },
    undo() {
      axios.get("/undo").then(({ data }) => {
        this.setGame(data);
      });
    },
    redo() {
      axios.get("/redo").then(({ data }) => {
        this.setGame(data);
      });
    },
    about() {
      this.$router.push({ name: "About" });
    },
    restart() {
      axios.get("/restart").then(({ data }) => {
        this.setGame(data);
      });
    },
    reset() {
      axios.get("/reset").then(({ data }) => {
        this.logout();
        this.$router.push({ name: "Login" });
      });
    },
    logMeOut() {
      axios.get("/signOut").then(({ data }) => {
        window.location.href = "/";
      });
    }
  }
};
</script>

<style lang="scss">
.sideBar {
  width: 80px !important;
  position: fixed;
  top: 0;
  z-index: 99;
  .mytooltip {
    position: relative;
    display: inline-block;

    &:hover {
      cursor: pointer;
    }

    .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      top: 2px;
      left: 95px;
      margin-left: -50px;
      opacity: 0;
      transition: opacity 0.3s;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent #555 transparent transparent;
      }
    }

    &:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
}
/*
@media (max-width: 670px) {
  .sideBar {
      position: absolute;
      left: -60px;
      z-index: 999;
      transition: left 1s;
      &:hover {
        left: 0;
      }
    }
}*/

</style>
