function smileWaterfall(options, start, end) {
    var configs = {
        id: options.id || "waterfall",
        width: options.width || 420,
        delay: options.delay || 60
    }
    var refresh = function () {
        if (start != null) {
            start()
        }
        var waterfall = document.getElementById("waterfall")
        if (waterfall != null) {
            waterfall.style.position = "relative"
            var childNodes = waterfall.childNodes
            if (childNodes.length > 0) {
                var waterfallWidth = waterfall.offsetWidth
                var column = parseInt(waterfallWidth / configs.width)
                if (childNodes.length < column) {
                    column = childNodes.length
                }
                var li_left = (waterfallWidth - column * configs.width) / 2
                if (column > 0) {
                    waterfall.className = ""
                    var maxHeight = 0
                    var items = []
                    var new_items = []
                    childNodes.forEach(function (li, i) {
                        items.push({
                            index: i,
                            bottom: 0,
                            height: li.offsetHeight
                        })
                    })
                    for (var i = 0; i < column; i++) {
                        new_items.push([])
                    }
                    items.forEach(function (item, i) {
                        if (i < column) {
                            item.bottom = item.height
                            new_items[i].push(item)
                        }
                        else {
                            var bottom = 0
                            var left = 0
                            for (var j = 0; j < column; j++) {
                                var j_height = new_items[j][new_items[j].length - 1].bottom + item.height
                                if (bottom == 0 || j_height < bottom) {
                                    bottom = j_height
                                    left = j
                                }
                            }
                            item.bottom = bottom
                            new_items[left].push(item)
                        }
                    })
                    for (var i = 0; i < new_items.length; i++) {
                        for (var j = 0; j < new_items[i].length; j++) {
                            childNodes[new_items[i][j].index].style.left = i * configs.width + li_left + "px"
                            childNodes[new_items[i][j].index].style.top = new_items[i][j].bottom - new_items[i][j].height + "px"
                            childNodes[new_items[i][j].index].style.width = configs.width + "px"
                            childNodes[new_items[i][j].index].style.position = "absolute"
                        }
                        var height = new_items[i][new_items[i].length - 1].bottom
                        if (maxHeight < height) {
                            maxHeight = height
                        }
                    }
                    waterfall.style.height = maxHeight + "px"
                }
                else {
                    waterfall.setAttribute("style", "")
                    childNodes.forEach(function (li, i) {
                        li.setAttribute("style", "")
                    })
                    waterfall.className = "min"
                }
                childNodes.forEach(function (li) {
                    if (document.scrollingElement.scrollTop + window.innerHeight > li.offsetTop) {
                        li.className = "show"
                    }
                })
            }
        }
        if (end != null) {
            end()
        }
    }
    refresh()
    setInterval(refresh, configs.delay)
}