<template>
  <div class="row justify-content-center w-100 m-0 h-100">
    <div class="col-lg-8 col-md-12 d-flex">
      <div class="m-auto w-100" style="width: 100%;max-width: 420px;">
        <div class="d-flex flex-column">
          <div class="text-center mb-4">
            <img
              class="img-fluid mb-4"
              src="/assets/images/TicTacToe4D_Transparent.png"
              alt="TicTacToe4D"
            />
            <h2 class="h3 mb-3 font-weight-normal">TicTacToe 4D</h2>
          </div>
          <login-form :payload="payload" @submit="submit"></login-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LoginForm from "../components/LoginForm";
export default {
  name: "Login",
  components: { LoginForm },
  data: () => ({
    payload: {
      player1: "",
      player2: ""
    }
  }),
  methods: {
    submit() {
      this.login(this.payload);
    },
    ...mapActions(["login"])
  }
};
</script>

<style scoped></style>
