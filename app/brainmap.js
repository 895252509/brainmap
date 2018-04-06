var BrainMap = (function(window, zrender) {
    var $_zr;

    function _init(dom) {
        if (!dom) return false;
        if (typeof dom === "string") {
            dom = document.getElementById(dom);
        }
        if (!dom instanceof HTMLElement) {
            return false;
        }
        $_zr = zrender.init(dom);
        _addmenu();
        return true;
    }

    function _addmenu() {
        $_zr.on("contextmenu", function() {

            $_zr.cancelBubble = false;
            return false;
        });
    }

    return {
        init: _init
    }
})(window, zrender);