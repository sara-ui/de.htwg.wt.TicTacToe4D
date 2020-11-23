function sendRequest(method, path, payload) {
    $.ajax({
        method: method,
        url: path,
        data: JSON.stringify(payload),
        dataType: "json",
        contentType: "application/json",
        success: function (successResponse) {
            toastr.success(successResponse + ' was successful')
        },
        error: function (errorResponse) {
            toastr.error(errorResponse + ' failed')
        }
    })
}

function move(source) {
    let col = source.getAttribute("gridCol")
    let row = source.getAttribute("gridRow")
    let gridIndex = source.getAttribute("gridIndex")

    return sendRequest(
        'POST',
        '/move', {
            "col" : col,
            "row" : row,
            "gridIndex" : gridIndex
        }
    )
}
