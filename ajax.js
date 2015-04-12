$(function() {

    $('.nav-options .option-item .this-trigger').click(function() {
        var $linkClicked = $(this).attr('href');
        document.location.hash = $linkClicked;
        var $pageRoot = $linkClicked.replace('#page', '');

        if (!$(this).hasClass("active")) {
            $(".nav-options li .this-trigger").parent().removeClass("is-active");
            $(this).parent().addClass("is-active");
            $.ajax({
                type: "POST",
                url: "load.php",
                data: 'page='+$pageRoot,
                dataType: "html",
                success: function(msg){

                    if(parseInt(msg)!==0)
                    {
                        $('#main-content').html(msg);
                        $('#main-content section').hide().fadeIn();
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
});