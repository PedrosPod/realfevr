// Full Width Left Nav sub-menu

function leftNavStretch() {

    var windowWidth = $(window).width() - 80;

    $('[data-area="main-navigation"] .this-submenu').css('width', windowWidth);

}

$( document ).ready( function(){

    leftNavStretch();


});