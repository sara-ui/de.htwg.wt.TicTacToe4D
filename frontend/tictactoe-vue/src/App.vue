<template>
  <div id="app" class="w-100 h-100">
    <router-view></router-view>
  </div>
</template>
<script>
  import axios from 'axios'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    created() {
      axios.post('/isLoggedIn').then(({ data }) => {
        this.setIsLoggedIn(data.isLoggedIn)
      })
    },
    computed: {
      ...mapGetters([
        'isLoggedIn'
      ])
    },
    methods: {
      ...mapActions([
        'setIsLoggedIn'
      ])
    },
    watch: {
      isLoggedIn: {
        handler (value) {
          const path = value ? 'Game' : 'Login'
          this.$router.push({ path })
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html, body {
  width: 100%;
  height: 100%;
}
</style>
