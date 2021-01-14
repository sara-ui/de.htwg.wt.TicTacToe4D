<template>
    <form class="needs-validation" @submit="$emit('submit')">
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
</template>

<script>
    export default {
        name: "LoginForm",
        props: {
            payload: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>