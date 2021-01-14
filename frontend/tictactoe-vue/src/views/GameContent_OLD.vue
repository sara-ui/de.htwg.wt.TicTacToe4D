<template>
  <div class="d-flex flex-column mx-auto mt-0">
    <div class="statusMessage" id="statusMessage">
      <div class="statusMessage__header alert alert-info">
        <span class="statusMessage__header__header">
          {{ !game.gridArray ? "GAME OVER!" : "Status Message:" }}
        </span>
        <br />
        {{ game.statusMessage }}
      </div>
    </div>
    <div class="game__container m-auto" id="gameContainer">
      <div v-for="(i, grid) in game.gridArray.length">
        <table class="grid table w-auto">
          <div v-for="(j, row) in game.gridArray[grid].length">
            <tr class="row">
              <div v-for="(k, column) in game.gridArray[grid][row].length">
                <td
                  @click="move(grid, row, column)"
                  v-if="game.gridArray[grid][row][column] === '-'"
                  class="col"
                  :id="'notSet' + grid + '-' + row + '-' + column"
                ></td>
                <td
                  @click="move(grid, row, column)"
                  v-else
                  class="col"
                  :class="'col__player' + getPlayer(grid, row, column)"
                ></td>
              </div>
            </tr>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "GameContent",
  computed: {
    ...mapGetters(["game"])
  },
  methods: {
    ...mapActions(["setGame"]),
    getPlayer(grid, row, column) {
      return this.game.gridArray[grid][row][column] === "X" ? 1 : 2;
    },
    move(grid, row, column) {
      axios
        .post(
          "/move",
          {
            col: column,
            row: row,
            grid: grid
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(({ data }) => {
          this.setGame(data);
        });
    }
  },
  created() {
    axios.get("/json").then(({ data }) => {
      this.setGame(data);
    });
  }
};
</script>

<style lang="scss">
.content {
  .statusMessage {
    &__header {
      font-size: 16px;
      &__header {
        font-size: 18px;
      }
    }
  }
  .game {
    font-size: 2.25em;
    margin-top: 0.25em;
    margin-right: 1em;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &__container {
      align-self: center;
      padding-top: 40px !important;

      .grid {
        margin-top: -1em;
        transform: rotateX(42deg) rotateZ(25deg) translateZ(-1.2em);
        border-collapse: collapse;

        &:nth-child(2) {
          margin-top: -1.5em;
          transform: rotateX(42deg) rotateZ(25deg) translateZ(-0.7em);
        }

        &:nth-child(3) {
          transform: rotateX(42deg) rotateZ(25deg) translateZ(0px);
        }

        &:nth-child(4) {
          transform: rotateX(42deg) rotateZ(25deg) translateZ(0px);
          margin-top: -1.75em;
        }

        .row {
          .col {
            width: 60px;
            height: 30px;
            border: 2pt solid #000;
            border-radius: 5px;
            margin: 0.05em;
            background-color: white;
            padding: 0;
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            transition-duration: 0.3s;
            transition-property: transform;
            cursor: pointer;
            a {
              display: block;
              height: 100%;
              width: 100%;
            }
            &:hover:not(.col__player1):not(.col__player2) {
              background: #6c757d;
              transform: translateY(-10px);
            }
            &__player1 {
              background-color: red;
              cursor: default;
            }
            &__player2 {
              background-color: royalblue;
              cursor: default;
            }
            &:hover:before {
              opacity: 1;
              transform: translateY(5px);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 670px) {
  body {
    .content {
      .statusMessage {
        &__header {
          font-size: 12px;
          &__header {
            font-family: "ComfortaaBold", cursive;
            font-size: 14px;
          }
        }
      }
      width: 100% !important;
    }
    .sideBar {
      position: absolute;
      left: -60px;
      z-index: 999;
      transition: left 1s;
      &:hover {
        left: 0;
      }
    }
  }
}

@media (min-width: 670px) {
  body {
    .content {
      .game {
        &__container {
          .grid {
            .row {
              .col {
                width: 5em;
                height: 3em;
              }
            }
          }
        }
      }
      width: 100% !important;
    }
  }
}

@media (min-width: 1024px) {
  body {
    .content {
      .game {
        &__container {
          .grid {
            .row {
              .col {
                width: 6em;
                height: 4em;
              }
            }
          }
        }
      }
      width: 100% !important;
    }
  }
}

@media (max-width: 320px) {
  body {
    .content {
      .game {
        &__container {
          .grid {
            .row {
              .col {
                width: 55px;
                height: 25px;
              }
            }
          }
        }
      }
      width: 100% !important;
    }
    .sideBar {
      position: absolute;
      left: -60px;
      z-index: 999;
      transition: left 1s;
      &:hover {
        left: 0;
      }
    }
  }
}
</style>
