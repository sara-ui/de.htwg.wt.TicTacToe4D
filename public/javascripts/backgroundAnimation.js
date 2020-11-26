let background = {}

background.initializr = function () {

    let $this = this;

    //option
    $this.id = "background";
    $this.bubbles_number = 25;
    $this.speed = [1500, 10000];
    $this.max_bubbles_height = $this.height;
    $this.shape = false // 1: O, 2: X

    if ($("#" + $this.id).length > 0) {
        $("#" + $this.id).remove()
    }
    $this.object = $("<div" +
        " class='m-0 d-flex'" +
        " style=" +
        " overflow:hidden;" +
        " id='" + $this.id + "'>" +
        " </div>'").appendTo("body")

    $this.ww = $(window).width()
    $this.wh = $(window).height()



    $("body").prepend("<style>.shape__background__O {" +
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
    )

    for (let i = 0; i < this.bubbles_number; i++) {
        $this.generate_bubbles()
    }

}

background.generate_bubbles = function() {
    let $this = this
    let bubbleStyle
    let baseO = $("<div class='shape__background__O'></div>")
    let baseX = $("<div class='shape__background__X'> X </div>")
    let shape_type = $this.shape ? $this.shape : this.randomNumber(1,2)
    if (shape_type === 1) {
        bubbleStyle = baseO.css({
            border:  this.randomNumber(1,4) + "px solid lightblue",
            borderRadius: "50%"
        })
    } else {
        bubbleStyle = baseX.css({
            backgroundColor: "inherit",
            color: "lightblue",
            fontSize: this.randomNumber(30, 100) + "px"
        })
    }

    let rn_size = $this.randomNumber(.8, 1.2)
    bubbleStyle.css({
        "transform": "scale(" + rn_size + ") rotate(" + $this.randomNumber(-360, 360) + "deg)",
        top: $this.wh,
        left: $this.randomNumber(-60, $this.ww + 60)
    })
    bubbleStyle.appendTo($this.object)
    bubbleStyle.animate({
        top: $this.randomNumber($this.wh / 4, $this.wh / 4 - 60),
        "transform": "scale(" + rn_size + ") rotate(" + $this.randomNumber(-360, 360) + "deg)",
        opacity: 0
    }, $this.randomNumber($this.speed[0], $this.speed[1]), function () {
        $(this).remove()
        $this.generate_bubbles()
    })

}

background.randomNumber = function(from, to, arr) {
    if (arr) {
        return Math.random() * (to - from + 1) + from
    } else {
        return Math.floor(Math.random() * (to - from + 1) + from)
    }
}
background.initializr()