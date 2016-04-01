function _genBtnRipple() {
     // $('.button-ripple').append( "<div class='touch-ripple'><div class='button-circle'><div class='button-circle-inner'></div></div></div>" );
     $('.button-ripple').append("<div class='touch-ripple'></div>" );

 }

function _handleBtnRipple() {
    $(".button-ripple").click(function (e) {
        var xPosition = e.clientX;
        var yPosition = e.clientY;
        var domWidth = $(this).find('.touch-ripple').width();
        var domHeight = $(this).find('.touch-ripple').height();

        var domMaxLength = domWidth > domHeight ? domWidth : domHeight;

        // $(this).append( "<div class='touch-ripple'><div class='button-circle'><div class='button-circle-inner'></div></div></div>" );
        $(this).find('.touch-ripple').append( "<div class='button-circle'><div class='button-circle-inner'></div></div>" );
        var rippleDom = $(this).find('.button-circle:last-child');
        var heightCenter = domWidth / 2;
        var widthCenter = domWidth / 2;
        var top = yPosition - heightCenter;
        var left = xPosition - widthCenter;
        rippleDom.css('top', top);
        rippleDom.css('left', left);
        rippleDom.css('width', domMaxLength);
        rippleDom.css('height', domMaxLength);

        setTimeout(function () {
            rippleDom.addClass('ripple-started');
        }, 0);

        setTimeout(function () {
            rippleDom.removeClass('ripple-started');
            rippleDom.detach();
        }, 1200);
    });
}

function _init() {
    _genBtnRipple();

    _handleBtnRipple();
}

$(document).ready(function() {
    _init();
});