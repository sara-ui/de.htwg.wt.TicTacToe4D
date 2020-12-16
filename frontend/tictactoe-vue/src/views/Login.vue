<template>
    <div class="row justify-content-center w-100 m-0 h-100">
        <div class="col-lg-8 col-md-12 d-flex">
            <div class="m-auto w-100" style="width: 100%;max-width: 420px;">
                <div class="d-flex flex-column">
                    <div class="text-center mb-4">
                        <img class="img-fluid mb-4" src="/assets/images/TicTacToe4D_Transparent.png" alt="TicTacToe4D">
                        <h2 class="h3 mb-3 font-weight-normal">TicTacToe 4D</h2>
                    </div>
                    <form class="needs-validation" @submit="submit">
                        <div class="form-group">
                            <label for="player1">First Player Name</label>
                            <input type="text" name="player1" class="form-control" id="player1" aria-describedby="player1Help" v-model="payload.player1" required>
                            <small id="player1Help" class="form-text text-muted">For example: Alex</small>
                        </div>
                        <div class="form-group">
                            <label for="player2">Second Player Name</label>
                            <input type="text" name="player2" class="form-control" id="player2" aria-describedby="player2Help" v-model="payload.player2" required>
                            <small id="player2Help" class="form-text text-muted">For example: Simon</small>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block btn-lg mb-5">Start The Game</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "Login",
    data: () => ({
        payload: {
            player1: '',
            player2: ''
        }
    }),
    methods: {
        submit (e) {
            e.preventDefault()
            this.login(this.payload)
        },
        ...mapActions([
            'login'
        ])
    }
}
</script>

<style scoped>

</style>