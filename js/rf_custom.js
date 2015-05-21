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

    $('[data-floater]').each(function(){
        $(this).on('click',function(ev){

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
    });
    $('[data-trigger="close-panels"]').each(function(){
        $('[data-trigger="close-panels"]').on('click', function(){
            appWidgets.removeClass('is-visible').removeAttr('id');
            appTriggers.removeClass('is-active');

        });
    });
}


// Fix Table Header
;(function($) {
    $.fn.fixMe = function() {
        return this.each(function() {
            var $this = $(this),
                $t_fixed;
            function init() {
                $this.wrap('<div class="table-container" />');
                $t_fixed = $this.clone();
                $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
                resizeFixed();
            }
            function resizeFixed() {
                $t_fixed.find("th").each(function(index) {
                    $(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
                });
            }
            function scrollFixed() {
                var offset = $(this).scrollTop(),
                    tableOffsetTop = $this.offset().top,
                    tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
                if(offset < tableOffsetTop || offset > tableOffsetBottom)
                    $t_fixed.hide();
                else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
                    $t_fixed.show();
            }
            $(window).resize(resizeFixed);
            $(window).scroll(scrollFixed);
            init();
        });
    };
})(jQuery);

$(document).ready(function(){
    $("table").fixMe();
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});



// AJAX CALLS
function ajaxLeftMenu()
{



    $('.nav-options li a').click(function() {
        var $linkClicked = $(this).attr('href');
        document.location.hash = $linkClicked;
        var $pageRoot = $linkClicked.replace('#page', '');

        if (!$(this).parent().hasClass("is-active")) {

            $(".nav-options li .opt-trigger").parent().removeClass("is-active");
            $(".nav-options li a").parent().removeClass("is-active");
            $(this).parent().addClass("is-active");
            $(this).parent().parent().parent().addClass('is-active');
            $.ajax({
                type: "POST",
                url: "load.php",
                data: 'page='+$pageRoot,
                dataType: "html",
                success: function(msg){

                    if(parseInt(msg)!==0)
                    {
                        $('#main-content').html(msg);
                        $('#main-content section').hide().show();
                    }
                }

            });
        }
        else {
            event.preventDefault();
        }


    });


    var hash = window.location.hash;
    hash = hash.replace(/^#/, '');
    switch (hash) {
        case 'page2' :
            $("#" + hash + "-link").trigger("click");
            break;
        case 'page3' :
            $("#" + hash + "-link").trigger("click");
            break;
        case 'page4' :
            $("#" + hash + "-link").trigger("click");
            break;
    }
}
$('.nav-options li a.opt-trigger').on('click', function(thisEV){
    thisEV.preventDefault();
});



// AJAX INNER PAGES

// On Document ready Loads
$( document ).ready( function(){

    leftNavStretch();
    triggerShowWidget();
    ajaxLeftMenu();
});
