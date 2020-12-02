/**
 * Restarts the Game with the same Players
 */
function restart() {
    $.ajax({
        method: "GET",
        url: "/restart",
        dataType: "json",
        success: (data) => {
            console.log('Restart was successful')
        },
        error: (data) => {
            console.log('Restart failed')
        },
    })
}

/**
 * Undo´s the last step done
 */
function undo() {
    $.ajax({
        method: "GET",
        url: "/undo",
        dataType: "json",
        success: (data) => {
            console.log('Undo was successful')
        },
        error: (data) => {
            console.log('Undo failed')
        },
    })
}


/**
 * Redo´s the last step that was undid
 */
function redo() {
    $.ajax({
        method: "GET",
        url: "/redo",
        dataType: "json",
        success: (data) => {
            console.log('Redo was successful')
        },
        error: (data) => {
            console.log('Redo failed')
        },
    })
}



