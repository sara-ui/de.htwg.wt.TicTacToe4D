<template>
  <div v-if="checkIfWon" class="h-100 p-0 m-0">
    <GameOver></GameOver>
  </div>
  <div v-else class="h-100 p-0 m-0 d-flex">
    <SideBar></SideBar>
    <div class="content" style="width: calc(100% - 80px)">
      <div v-if="toggleAboutPage">
        <About></About>
      </div>
      <div v-else>
        <GameContent></GameContent>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBar'
import GameContent from '@/views/GameContent'
import About from '@/views/About'
import { EventBus } from '@/plugins/EventBus'
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
      console.log(this.game.statusMessage.includes("congratulation"))
      return this.game.statusMessage.includes("congratulation")
    }
  },
  data: () => ({
    toggleAboutPage: false
  }),
  created() {
    EventBus.$on('toggleAbout', () => {
      this.toggleAboutPage = !this.toggleAboutPage
    })
    EventBus.$on('homeScreen', () => {
      this.toggleAboutPage = false
    })
  }
}
</script>

<style lang="scss">
</style>