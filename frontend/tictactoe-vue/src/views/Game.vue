<template>
  <div v-if="checkIfWon" class="h-100 p-0 m-0">
    <GameOver></GameOver>
  </div>
  <div v-else class="h-100 p-0 m-0 d-flex">
    <SideBar></SideBar>
    <div class="content" style="width: calc(100% - 80px)">
      <GameContent></GameContent>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBar'
import GameContent from '@/views/GameContent'
import About from '@/views/About'
import GameOver from '@/views/GameOver'
import { mapGetters } from 'vuex'
export default {
  name: 'Game',
  components: {
    GameOver,
    About,
    GameContent,
    SideBar
  },
  computed: {
    ...mapGetters([
      'game',
      'isLoggedIn'
    ]),
    checkIfWon() {
      return this.game.statusMessage.includes("congratulation")
    }
  },
  data: () => ({
    toggleAboutPage: false
  })
}
</script>

<style lang="scss">
</style>