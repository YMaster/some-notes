/**
 * 如果在这之前加载入了jQuery就会默认成为jQuery的插件;
 * 引入了jQuery的情况下使用$.dragEveryBox()或者jQuery.dragEveryBox()调用，或者传入一个DOM对象，该对象以及内部的元素都能被拖拽
 * 否则直接dragEveryBox(box)即可, box及其内部元素都可以被拖拽
 * @param {你想要被拖动的元素(默认不传参数为document)} box 
 * box is Any element which you want to drag(Remember to give it a position:"absolute").
 * If you want to turn it into a jQuery plugin,
 * introducing jQuery and using $.fn.dragEveryBox
 */


var dragEveryBox = function(box) {
    "use strict"
    // 拖拽函数
    function drag(box) {
        var area = box;
        area.onmousedown = function(e) {

            function Obj(e) {
                // e.stopPropagation();
                // e.cancelBubble = true;
                var node = e.target;
                if (node.setCapture) {
                    node.setCapture();
                } else if (window.captureEvents) { //chorome不起作用
                    window.captureEvents(Event.mousemove | Event.mouseup);
                }
                var startX = e.clientX - node.offsetLeft,
                    startY = e.clientY - node.offsetTop;
                document.onmousemove = function(ev) {
                    var distX = ev.clientX - startX,
                        distY = ev.clientY - startY;
                    node.style.left = distX + "px";
                    node.style.top = distY + "px";
                };
                document.onmouseup = function() {
                    if (window.releaseCapture) {
                        window.releaseCapture();
                    } else if (window.releaseEvents) {
                        window.releaseEvents(Event.mousemove | Event.mouseup);
                    };
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
            var dom = new Obj(e);
        }
    };
    // 判断是否传入了可拖拽元素的范围，如果有就是用传入的范围，没有则使用document
    if (box) {
        drag(box);
    } else {
        drag(document);
    }

}

if (window.jQuery) {
    jQuery.extend({
        dragEveryBox: dragEveryBox
    })
}