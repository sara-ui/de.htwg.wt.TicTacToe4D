let size = 4

class Game {
    constructor(size) {
        this.size = size
        this.grids = []
    }

    fill(json) {
        this.grids = json
    }

    updateView() {
        let html = ""
        for (let grid = 0; grid < this.grids.length; grid++) {
            html += '<table class="grid table w-auto">'
            for (let row = 0; row < this.grids[grid].length; row++) {
                html += '<tr class="row">'
                for (let column = 0; column < this.grids[grid][row].length; column++) {
                    if (this.grids[grid][row][column] === '-') {
                        html += '<td class="col" id="notSet' + grid + '-' + row + '-' + column + '"></td>'
                    } else {
                        const player = this.grids[grid][row][column] === 'X' ? 1 : 2
                        html += '<td class="col col__player' + player + '"> </td>'
                    }
                }
            }
            html += '</table>'
            $("#gameContainer").html(html)
        }
    }
    registerClickListener() {
        for (let grid = 0; grid < this.grids.length; grid++) {
            for (let row = 0; row < this.grids[grid].length; row++) {
                for (let column = 0; column < this.grids[grid][row].length; column++) {
                    if (this.grids[grid][row][column] === '-') {
                        $(document).on('click', '#notSet' + grid + '-' + row + '-' + column, () => {
                            this.move(grid, row, column)
                        })
                        document.getElementById('notSet' + grid + '-' + row + '-' + column).style.cursor = 'pointer'
                    }
                }
            }
        }
    }
    statusMessage (message, won) {
        return won ? `<div class="statusMessage__header alert alert-success">
                    <span class="statusMessage__header__header">
                        ${won ? 'GAME OVER!' : 'Status Message:'}
                    </span>
                    <br>
                    ${message}
                </div>` :
            `<div class="statusMessage__header alert alert-info"">
                    <span class="statusMessage__header__header">
                        ${won ? 'GAME OVER!' : 'Status Message:'}
                    </span>
                    <br>
                    ${message}
                </div>`
    }
    updateStatusMessage (message, won) {
        $("#statusMessage").html(this.statusMessage(message, won))
    }
    move(grid, row, column) {
        $.ajax({
            method: "POST",
            url: "/move",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "col": column,
                "row": row,
                "grid": grid
            }),

            success: (result) => {
                const {statusMessage, gridArray} = result
                this.updateStatusMessage(statusMessage, !gridArray)
                if (!!gridArray) {
                    this.updateGrid(grid, gridArray)
                }
            }
        });
    }

    updateGrid(grid, result) {
        this.grids[grid] = result
        for (let row = 0; row < result.length; row++) {
            for (let column = 0; column < result[row].length; column++) {
                if (result[row][column] !== '-') {
                    const player = result[row][column] === 'X' ? 1 : 2
                    $('#notSet' + grid + '-' + row + '-' + column).addClass('col col__player' + player).removeAttr('id');
                }
            }
        }
    }
}
let game = new Game(4)

function loadGame() {
    $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        success: function (result) {
            const {statusMessage, gridArray} = result
            game = new Game(gridArray.length)
            game.fill(gridArray)
            game.updateStatusMessage(statusMessage, 0)
            game.updateView()
            game.registerClickListener()
        }
    });
}

$(document).ready(function () {
    console.log("start")
    loadGame();
})
