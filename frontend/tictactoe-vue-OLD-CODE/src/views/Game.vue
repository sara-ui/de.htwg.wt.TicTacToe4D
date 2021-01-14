<template>
  <div class="h-100 p-0 m-0 d-flex">
    <SideBar></SideBar>
    <div class="content" style="width: calc(100% - 80px)">
      <GameContent></GameContent>
    </div>

  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import GameContent from '@/components/GameContent'
export default {
  name: 'Game',
  components: {
    GameContent,
    SideBar
  },
}
</script>

<style lang="scss">
</style>