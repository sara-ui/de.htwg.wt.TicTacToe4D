<template>
  <div id="app" class="w-100 h-100">
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import $ from "jquery";
export default {
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },
  computed: {
    ...mapGetters(["players", "game"])
  },
  methods: {
    ...mapActions(["setGame"]),
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  mounted() {
    let background = {};

    background.initializr = function() {
      let $this = this;

      //option
      $this.id = "background";
      $this.bubbles_number = 25;
      $this.speed = [1500, 10000];
      $this.max_bubbles_height = $this.height;
      $this.shape = false; // 1: O, 2: X

      if ($("#" + $this.id).length > 0) {
        $("#" + $this.id).remove();
      }
      $this.object = $(
        "<div" +
          " class='m-0 d-flex'" +
          " style=" +
          " overflow:hidden;" +
          " id='" +
          $this.id +
          "'>" +
          " </div>'"
      ).appendTo("body");

      $this.ww = $(window).width();
      $this.wh = $(window).height();

      $("body").prepend(
        "<style>.shape__background__O {" +
          "z-index: -1;" +
          "transform-origin:center;" +
          "width:80px;" +
          "height:80px;" +
          "position: absolute}" +
          "</style>" +
          "<style>.shape__background__X {" +
          "z-index: -1;" +
          "transform-origin:center;" +
          "width:80px;" +
          "height:80px;" +
          "position: absolute}" +
          "</style>"
      );

      for (let i = 0; i < this.bubbles_number; i++) {
        $this.generate_bubbles();
      }
    };

    background.generate_bubbles = function() {
      let $this = this;
      let bubbleStyle;
      let baseO = $("<div class='shape__background__O'></div>");
      let baseX = $("<div class='shape__background__X'> X </div>");
      let shape_type = $this.shape ? $this.shape : this.randomNumber(1, 2);
      if (shape_type === 1) {
        bubbleStyle = baseO.css({
          border: this.randomNumber(1, 4) + "px solid lightblue",
          borderRadius: "50%"
        });
      } else {
        bubbleStyle = baseX.css({
          backgroundColor: "inherit",
          color: "lightblue",
          fontSize: this.randomNumber(30, 100) + "px"
        });
      }

      let rn_size = $this.randomNumber(0.8, 1.2);
      bubbleStyle.css({
        transform:
          "scale(" +
          rn_size +
          ") rotate(" +
          $this.randomNumber(-360, 360) +
          "deg)",
        top: $this.wh - 80,
        left: $this.randomNumber(100, $this.ww - 100)
      });
      bubbleStyle.appendTo($this.object);
      bubbleStyle.animate(
        {
          top: $this.randomNumber($this.wh / 4, $this.wh / 4 - 60),
          transform:
            "scale(" +
            rn_size +
            ") rotate(" +
            $this.randomNumber(-360, 360) +
            "deg)",
          opacity: 0
        },
        $this.randomNumber($this.speed[0], $this.speed[1]),
        function() {
          $(this).remove();
          $this.generate_bubbles();
        }
      );
    };

    background.randomNumber = function(from, to, arr) {
      if (arr) {
        return Math.random() * (to - from + 1) + from;
      } else {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }
    };
    background.initializr();
  }
};
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
html,
body {
  width: 100%;
  height: 100%;
}
</style>
