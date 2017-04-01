/**
 * Created by zyj on 2016/7/26.
 * use：If you have introduced jQuery, this function will become a plug-in for jQuery, 
 * otherwise it is an ordinary function that can be passed as an argument.
 * argument：Any element you want to drag
 */

var dragMove = (function() {
    function dragMove(dom) {
        if (window.jQuery !== undefined) {
            dom = $(this)[0];
        }
        // 鼠标按下可拖动
        dom.onmousedown = function(ev) {
            // 添加可在窗口外拖拽功能，貌似chrome不好使？
            if (dom.setCapture) {
                dom.setCapture();
            } else if (window.captureEvents) { //chorome不起作用
                window.captureEvents(Event.mousemove | Event.mouseup);
            }
            var startX = ev.clientX - dom.offsetLeft,
                startY = ev.clientY - dom.offsetTop;
            document.onmousemove = function(ev) {
                var distX = ev.clientX - startX,
                    distY = ev.clientY - startY;
                dom.style.left = distX + "px";
                dom.style.top = distY + "px";
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
                if (window.releaseCapture) {
                    window.releaseCapture();
                } else if (window.releaseEvents) {
                    window.releaseEvents(Event.mousemove | Event.mouseup);
                }
            }
        };
    };

    if (window.jQuery !== undefined) {
        $.fn.dragMove = dragMove;
    } else {
        return dragMove;
    }
})();