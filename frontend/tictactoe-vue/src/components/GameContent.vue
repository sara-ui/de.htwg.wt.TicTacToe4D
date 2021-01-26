<template>
  <div>
    <div class="statusMessage">
      <div id="status" class="alert alert-info" role="alert"></div>
    </div>
    <div id="game" class="w-100 h-100"></div>
  </div>
</template>

<script>
import router from "../router";
export default {
  mounted: function() {
    this.$nextTick(function() {
      !(function(Math) {
        "use strict";

        // ---- vec4 vector ----

        function vec4(x, y, z) {
          var vec = new Float32Array([x || 0, y || 0, z || 0]);
          vec.transformMat4 = function(a, m) {
            var x = a[0],
              y = a[1],
              z = a[2],
              w = m[3] * x + m[7] * y + m[11] * z + m[15];
            w = w || 1.0;
            this[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
            this[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
            this[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
            return this;
          };
          Object.defineProperty(vec, "x", {
            get: function() {
              return this[0];
            },
            set: function(x) {
              this[0] = x;
            }
          });
          Object.defineProperty(vec, "y", {
            get: function() {
              return this[1];
            },
            set: function(y) {
              this[1] = y;
            }
          });
          Object.defineProperty(vec, "z", {
            get: function() {
              return this[2];
            },
            set: function(z) {
              this[2] = z;
            }
          });
          return vec;
        }

        // ---- mat4 matrice ----

        function mat4() {
          var mat = new Float32Array(16);
          mat.identity = function() {
            this[0] = 1;
            this[1] = 0;
            this[2] = 0;
            this[3] = 0;
            this[4] = 0;
            this[5] = 1;
            this[6] = 0;
            this[7] = 0;
            this[8] = 0;
            this[9] = 0;
            this[10] = 1;
            this[11] = 0;
            this[12] = 0;
            this[13] = 0;
            this[14] = 0;
            this[15] = 1;
            return this;
          };
          mat.rotateX = function(angle) {
            var s = Math.sin(angle),
              c = Math.cos(angle),
              a10 = this[4],
              a11 = this[5],
              a12 = this[6],
              a13 = this[7],
              a20 = this[8],
              a21 = this[9],
              a22 = this[10],
              a23 = this[11];
            this[4] = a10 * c + a20 * s;
            this[5] = a11 * c + a21 * s;
            this[6] = a12 * c + a22 * s;
            this[7] = a13 * c + a23 * s;
            this[8] = a20 * c - a10 * s;
            this[9] = a21 * c - a11 * s;
            this[10] = a22 * c - a12 * s;
            this[11] = a23 * c - a13 * s;
            return this;
          };
          mat.rotateY = function(angle) {
            var s = Math.sin(angle),
              c = Math.cos(angle),
              a00 = this[0],
              a01 = this[1],
              a02 = this[2],
              a03 = this[3],
              a20 = this[8],
              a21 = this[9],
              a22 = this[10],
              a23 = this[11];
            this[0] = a00 * c - a20 * s;
            this[1] = a01 * c - a21 * s;
            this[2] = a02 * c - a22 * s;
            this[3] = a03 * c - a23 * s;
            this[8] = a00 * s + a20 * c;
            this[9] = a01 * s + a21 * c;
            this[10] = a02 * s + a22 * c;
            this[11] = a03 * s + a23 * c;
            return this;
          };
          mat.multiply = function(a, b) {
            var a00 = a[0],
              a01 = a[1],
              a02 = a[2],
              a03 = a[3],
              a10 = a[4],
              a11 = a[5],
              a12 = a[6],
              a13 = a[7],
              a20 = a[8],
              a21 = a[9],
              a22 = a[10],
              a23 = a[11],
              a30 = a[12],
              a31 = a[13],
              a32 = a[14],
              a33 = a[15];
            var b0 = b[0],
              b1 = b[1],
              b2 = b[2],
              b3 = b[3];
            this[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[4];
            b1 = b[5];
            b2 = b[6];
            b3 = b[7];
            this[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[8];
            b1 = b[9];
            b2 = b[10];
            b3 = b[11];
            this[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[12];
            b1 = b[13];
            b2 = b[14];
            b3 = b[15];
            this[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return this;
          };
          return mat;
        }

        var machine = 1,
          human = 2,
          nul = 0,
          end = nul;

        // ---- save winning values ----

        function updateEnd(camp) {
          for (var i = 0; i < cij[camp]; i++) {
            var mem = memdiag[camp][i];
            value[inv[mem]]++;
            var mem1 = sym[inv[mem]];
            if (mem1) value[mem1]++;
            value[mem]--;
            var mem2 = sym[mem];
            if (mem2) value[mem2]--;
          }
        }

        // ---- reinit ----

        function reinit() {
          for (var p = 0; p < 27; p++) {
            spheres[p].s = 0;
          }
          end = 0;
        }

        // ---- the end ----

        function manageEnd() {
          if (end === nul) message = "the game ended in a draw...";
          if (end === machine) message = "You lost";
          if (end === human) message = "You win";
          spheres.forEach(function(sphere) {
            if (sphere.s == end) {
              sphere.s = 4;
            }
          });
          setTimedOut(function() {
            this.showFinishModal(message);
          }, 5000);
        }

        function showFinishModal(message) {
          if (framework == 0) {
            // $('.gameFinishedModal').html(message);
            // $('#gameFinishModal').modal({backdrop: 'static', keyboard: false});
          }
        }
        // ---- write ----

        function writeMessage() {
          ctx.font = "30px Codystar";
          ctx.fillStyle = "#fff";
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 8);
        }

        // ---- 3D spheres ----

        var spheres = [],
          over,
          dx = 0,
          dy = 0,
          message = "";
        var fillColor = ["", "#0f0", "#f00", "#fff"];

        function run() {
          requestAnimationFrame(run);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (pointer.isDown) {
            dx -= (pointer.x - pointer.xb) * 0.001;
            dy += (pointer.y - pointer.yb) * 0.001;
          }
          dx *= 0.9;
          dy *= 0.9;
          camera.update(dy, dx);
          spheres.forEach(function(sphere) {
            sphere.project();
          });
          spheres.sort(function(p0, p1) {
            return p1.zIndex - p0.zIndex;
          });
          spheres.forEach(function(sphere) {
            sphere.draw();
          });
          if (message) writeMessage();
          pointer.xb = pointer.x;
          pointer.yb = pointer.y;
        }

        // ---- camera ----

        var camera = {
          mvMatrix: mat4().identity(),
          currentRotationMatrix: mat4().identity(),
          newRotationMatrix: mat4().identity(),
          update: function(deltaX, deltaY) {
            this.newRotationMatrix
              .identity()
              .rotateX(deltaX)
              .rotateY(deltaY);
            this.currentRotationMatrix.multiply(
              this.newRotationMatrix,
              this.currentRotationMatrix
            );
            this.mvMatrix
              .identity()
              .multiply(this.mvMatrix, this.currentRotationMatrix);
          }
        };

        // ---- sphere constructor ----

        var Sphere = function(id, x, y, z, w) {
          var s = canvas.width / 6;
          this.id = id;
          this.width = w;
          this.coord = vec4((x - 1) * s, (y - 1) * s, (z - 1) * s);
          this.p2d = vec4();
          this.x = 0;
          this.y = 0;
          this.w = 0;
          this.s = 0;
          this.zIndex = 0;
        };

        // ---- project sphere ----

        Sphere.prototype.project = function() {
          this.p2d.transformMat4(this.coord, camera.mvMatrix);
          this.zIndex = this.p2d.z;
          var p = 400 / (800 + this.p2d.z);
          this.x = canvas.width * 0.5 + this.p2d.x * p;
          this.y = canvas.height * 0.5 + this.p2d.y * p;
          this.w = (p * this.width * 4) / 5;
        };

        // ---- draw sphere ----

        Sphere.prototype.draw = function() {
          if (end && !this.s) return;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI);
          ctx.fillStyle = "lightgrey";
          ctx.fillStyle = fillColor[this.s];
          ctx.strokeStyle = "#000";
          ctx.fill();
          ctx.stroke();
        };

        // ---- set canvas ----

        var canvas = {
          width: 0,
          height: 0,
          rx: 1,
          ry: 1,
          elem: document.createElement("canvas"),
          resize: function() {
            var o = this.elem;
            this.offsetWidth = this.elem.offsetWidth;
            this.offsetHeight = this.elem.offsetHeight;
            if (this.width) {
              this.rx = this.width / this.offsetWidth;
              this.ry = this.height / this.offsetHeight;
            }
            for (this.left = 0, this.top = 0; o != null; o = o.offsetParent) {
              this.left += o.offsetLeft;
              this.top += o.offsetTop;
            }
          },
          init: function() {
            var ctx = this.elem.getContext("2d");
            document.getElementById("game").append(this.elem);
            this.resize();
            this.width = this.elem.width = this.offsetWidth - 80;
            this.height = this.elem.height = this.offsetHeight;
            window.addEventListener(
              "resize",
              canvas.resize.bind(canvas),
              false
            );
            return ctx;
          }
        };
        var ctx = canvas.init();
        var webSocket;
        // ---- set pointer ----

        var pointer = (function(canvas) {
          var pointer = {
            x: 0,
            y: 0,
            canvas: canvas,
            touchMode: false,
            isDown: false,
            draging: false,
            xb: 0,
            yb: 0
          };
          [
            [
              window,
              "mousemove,touchmove",
              function(e) {
                this.touchMode = e.targetTouches;
                if (this.touchMode) e.preventDefault();
                var pointer = this.touchMode ? this.touchMode[0] : e;
                this.x = (pointer.clientX - this.canvas.left) * this.canvas.rx;
                this.y = (pointer.clientY - this.canvas.top) * this.canvas.ry;
                if (this.isDown) this.draging = true;
              }
            ],
            [
              canvas.elem,
              "mousedown,touchstart",
              function(e) {
                this.touchMode = e.targetTouches;
                if (this.touchMode) e.preventDefault();
                var pointer = this.touchMode ? this.touchMode[0] : e;
                this.xb = this.x =
                  (pointer.clientX - this.canvas.left) * this.canvas.rx;
                this.yb = this.y =
                  (pointer.clientY - this.canvas.top) * this.canvas.ry;
                this.isDown = true;
                setTimeout(
                  function() {
                    if (
                      !this.isDown &&
                      Math.abs(this.xb - this.x) < 11 &&
                      Math.abs(this.yb - this.y) < 11
                    ) {
                      this.click(e);
                    }
                  }.bind(this),
                  200
                );
              }
            ],
            [
              window,
              "mouseup,touchend,touchcancel",
              function(e) {
                e.preventDefault();
                this.isDown = false;
                this.draging = false;
              }
            ]
          ].forEach(
            function(e) {
              for (
                var i = 0, events = e[1].split(",");
                i < events.length;
                i++
              ) {
                e[0].addEventListener(events[i], e[2].bind(pointer), false);
              }
            }.bind(pointer)
          );
          return pointer;
        })(canvas);

        // ---- init spheres ----

        for (var z = 0; z < 4; z++) {
          for (var y = 0; y < 4; y++) {
            for (var x = 0; x < 4; x++) {
              var k = z + "-" + y + "-" + x;
              spheres.push(new Sphere(k, x, y, z, canvas.width / 11));
            }
          }
        }

        // ---- find sphere ----

        function fSphere(id) {
          var m = spheres.find(function(s) {
            return s.id === id;
          });
          return m;
        }

        connectWebSocket(1);

        fetch("/json")
          .then(response => response.json())
          .then(data => updateView(data));

        function updateView(result) {
          const { statusMessage, gridArray } = result;
          document.getElementById("status").innerHTML = statusMessage;
          if (statusMessage.includes("congratulation")) {
            router.push({ name: "GameOver" });
          }
          for (let grid = 0; grid < gridArray.length; grid++) {
            for (let i = 0; i < gridArray[grid].length; i++) {
              for (let j = 0; j < gridArray[grid][i].length; j++) {
                if (gridArray[grid][i][j] !== "-") {
                  fSphere(grid + "-" + i + "-" + j).s =
                    gridArray[grid][i][j] === "X" ? human : machine;
                } else {
                  fSphere(grid + "-" + i + "-" + j).s = 0;
                }
              }
            }
          }
        }

        function connectWebSocket(s) {
          webSocket = new WebSocket("wss://tictactoe4d.herokuapp.com/websocket");
          console.info("Connecting to WebSocket...");

          webSocket.onopen = () => {
            console.info("Connected to server: " + webSocket.url);
          };
          webSocket.onmessage = message => {
            const result = JSON.parse(message.data);
            updateView(result);
          };
          webSocket.onerror = event => console.error(event);
          webSocket.onclose = () => setTimeout(connectWebSocket, 2000);
        }

        var played = false;
        pointer.click = function() {
          // if (played) {
          //     showTempMessage("Warte bis der andere Player spielt");
          // } else {
          if (end) {
            reinit();
          }
          message = "";
          var over = null;
          spheres.forEach(function(sphere) {
            var dx = pointer.x - sphere.x,
              dy = pointer.y - sphere.y;
            if (Math.sqrt(dx * dx + dy * dy) < sphere.w) over = sphere;
          });
          if (over) {
            const vari = over.id.split("-");
            over.s = played ? human : machine;
            played = !played;
            webSocket.send(
              JSON.stringify({
                col: parseInt(vari[2]),
                row: parseInt(vari[1]),
                grid: parseInt(vari[0])
              })
            );
          }
          if (over && over.s === 0) {
            over.s = human;
          }
          // }
        };
        run();
      })(Math);
    });
  }
};
</script>

<style>
#game {
  width: 100%;
  height: 100%;
  margin: 0;
}
canvas {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  right: 0;
}
#status {
  padding-left: 80px;
}
.statusMessage {
  margin-left: 160px;
}
</style>
