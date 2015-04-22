
$(document).ready(function() {
    $(".mui-raised-button").click(function (e) {
        var xPosition = e.clientX;
        var yPosition = e.clientY;
        var domWidth = $(this).find('.mui-touch-ripple').width();
        var domHeight = $(this).find('.mui-touch-ripple').height();

        var domMaxLength = domWidth > domHeight ? domWidth : domHeight;

        $(this).find('.mui-touch-ripple').append( "<div class='mui-ripple-circle'><div class='mui-ripple-circle-inner'></div></div>" );
        var rippleDom = $(this).find('.mui-ripple-circle:last-child');
        var heightCenter = domWidth / 2;
        var widthCenter = domWidth / 2;
        var top = yPosition - heightCenter;
        var left = xPosition - widthCenter;
        rippleDom.css('top', top);
        rippleDom.css('left', left);
        rippleDom.css('width', domMaxLength);
        rippleDom.css('height', domMaxLength);

        setTimeout(function () {
            rippleDom.addClass('mui-is-started');
        }, 0);
        setTimeout(function () {
            rippleDom.addClass('mui-is-ending');
        }, 250);
        setTimeout(function () {
            rippleDom.detach();
        }, 2000);
    });
});