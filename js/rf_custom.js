// Global functions
function uniqId() {
    return Math.round(new Date().getTime() + (Math.random() * 100));
}


// Full Width Left Nav sub-menu
function leftNavStretch() {
    var windowWidth = $(window).width() - 80;
    $('[data-area="main-navigation"] .this-submenu').css('width', windowWidth);
}

// TRIGGER > WIDGET : Show Hide relationship
function triggerShowWidget() {

    var appWidgets = $('[data-widget]');
    var appTriggers = $('[data-trigger]');

    $('[data-floater]').on('click',function(ev){

        ev.preventDefault();
        var thisTrigger = $(this);
        var thisTriggerName = thisTrigger.attr('data-trigger');
        var thatWidget = $('[data-widget="' + thisTriggerName + '"]');

        if(thisTrigger.hasClass('is-active'))
        {
            appWidgets.removeClass('is-visible').removeAttr('id');
            appTriggers.removeClass('is-active');
        }
        else
        {
            appTriggers.removeClass('is-active');
            appWidgets.removeClass('is-visible');
            thisTrigger.addClass('is-active');
            thatWidget.addClass('is-visible');
            var thisId = 'bs' + uniqId();

            thatWidget.attr('id', thisId);
            thisTrigger.attr('id', thisId);


            // bind clickout function
            $(document).mouseup(function (clickOut) {
                if (clickOut.target.id !== thatWidget.attr('id') && !thatWidget.has(clickOut.target).length) {

                    thisTrigger.removeClass('is-active');
                    thatWidget.removeClass('is-visible');
                    thatWidget.removeAttr('id');

                    $(this).unbind(clickOut);
                }
            });
        }
    });
    $('[data-trigger="close-panels"]').on('click', function(){
        appWidgets.removeClass('is-visible').removeAttr('id');
        appTriggers.removeClass('is-active');

    });


}



// On Document ready Loads
$( document ).ready( function(){

    leftNavStretch();
    triggerShowWidget();

});