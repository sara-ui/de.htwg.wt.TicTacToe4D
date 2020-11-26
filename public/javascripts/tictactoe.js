/**
 * The default size of the Game grids
 * @type {number}
 */
let size = 4

class Game {
    /**
     * the Constructor gets the size of the game
     * @param size of the game
     */
    constructor(size) {
        this.size = size
        this.grids = []
    }

    /**
     * Fills the grids array with the values json
     * @param newGrids the new values of the grids
     */
    fill(newGrids) {
        this.grids = newGrids
    }

    /**
     * Creates the game view HTML
     * @returns {string}
     */
    createView () {
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
        }
        return html
    }

    /**
     * Creates the new html grids programmatically
     */
    updateView() {
        const html = this.createView()
        $("#gameContainer").html(html)
    }

    /**
     * registers the click listener for every single cell
     */
    registerClickListener() {
        for (let grid = 0; grid < this.grids.length; grid++) {
            for (let row = 0; row < this.grids[grid].length; row++) {
                for (let column = 0; column < this.grids[grid][row].length; column++) {
                    if (this.grids[grid][row][column] === '-') {
                        $(document).on('click', '#notSet' + grid + '-' + row + '-' + column, () => {
                            this.move(grid, row, column)
                        })
                    }
                }
            }
        }
    }

    /**
     * Creates the HTML for the status message
     * @param message the new status message
     * @param won boolean that indicates if the games is already finished
     * @returns {string}
     */
    statusMessage(message, won) {
        return `<div class="statusMessage__header alert alert-success">
                    <span class="statusMessage__header__header">
                        ${won ? 'GAME OVER!' : 'Status Message:'}
                    </span>
                    <br>
                    ${message}
                </div>`
    }

    /**
     * Updates the HTML using jQuery
     * @param message the new status message
     * @param won boolean that indicates if the games is already finished
     */
    updateStatusMessage(message, won) {
        $("#statusMessage").html(this.statusMessage(message, won))
    }

    /**
     * Sends the move values to the BE using ajax and update the Grid that has been clicked
     * @param grid index of the grid
     * @param row the row in the grid
     * @param column the column in the grid
     */
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

    /**
     * Update the Grid cells and make them not clickable if they already have been clicked before
     * @param grid index of the grid
     * @param newGrid the new grid from the BE
     */
    updateGrid(grid, newGrid) {
        this.grids[grid] = newGrid
        for (let row = 0; row < newGrid.length; row++) {
            for (let column = 0; column < newGrid[row].length; column++) {
                if (newGrid[row][column] !== '-') {
                    const player = newGrid[row][column] === 'X' ? 1 : 2
                    $('#notSet' + grid + '-' + row + '-' + column).addClass('col col__player' + player).removeAttr('id');
                }
            }
        }
    }
}

let game = new Game(4)

/**
 * Load the game for the first time from the BE to keep data preserved
 */
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

/**
 * When the document is ready load the game
 */
$(document).ready(function () {
    console.log("start loading our Game")
    loadGame();
})
