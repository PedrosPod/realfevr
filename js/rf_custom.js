// Full Width Left Nav sub-menu

function leftNavStretch() {
    var windowWidth = $(window).width() - 80;
    $('[data-area="main-navigation"] .this-submenu').css('width', windowWidth);
}

function showHideElem() {

    function uniqId() {
        return Math.round(new Date().getTime() + (Math.random() * 100));
    }

    $('[data-toggle="showHideElem"]').on('click', function (ev) {

        ev.preventDefault();

        var thisTrigger = $(this),
            thisTriggerVal = $(this).data("trigger"),
            theseTriggers = $('[data-trigger="' + thisTriggerVal + '"]'),
            thatWidget = $('[data-widget="' + thisTriggerVal + '"]');

        // Add active and visible state to selected trigger and widget
        if (thisTrigger.hasClass('is-active')) {
            theseTriggers.removeClass('is-active');
            thatWidget.removeClass('is-visible');
            thatWidget.removeAttr('id');
        }
        else {
            // hide all
            $('[data-toggle="showHideElem"]').removeClass('is-active');
            $('[data-widget]').removeClass('is-visible');

            // show this and give custom ID
            theseTriggers.addClass('is-active');
            thatWidget.addClass('is-visible');
            thatWidget.attr('id', 'gs-' + uniqId());

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
}

$( document ).ready( function(){

    leftNavStretch();


});