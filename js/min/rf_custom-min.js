function uniqId(){return Math.round((new Date).getTime()+100*Math.random())}function leftNavStretch(){var t=$(window).width()-80;$('[data-area="main-navigation"] .this-submenu').css("width",t)}function triggerShowWidget(){var t=$("[data-widget]"),e=$("[data-trigger]");$("[data-floater]").each(function(){$(this).on("click",function(i){i.preventDefault();var a=$(this),n=a.attr("data-trigger"),s=$('[data-widget="'+n+'"]');if(a.hasClass("is-active"))t.removeClass("is-visible").removeAttr("id"),e.removeClass("is-active");else{e.removeClass("is-active"),t.removeClass("is-visible"),a.addClass("is-active"),s.addClass("is-visible");var r="bs"+uniqId();s.attr("id",r),a.attr("id",r),$(document).mouseup(function(t){t.target.id===s.attr("id")||s.has(t.target).length||(a.removeClass("is-active"),s.removeClass("is-visible"),s.removeAttr("id"),$(this).unbind(t))})}})}),$('[data-trigger="close-panels"]').each(function(){$('[data-trigger="close-panels"]').on("click",function(){t.removeClass("is-visible").removeAttr("id"),e.removeClass("is-active")})})}function ajaxLeftMenu(){$(".nav-options li a").click(function(){var t=$(this).attr("href");document.location.hash=t;var e=t.replace("#page","");$(this).parent().hasClass("is-active")?event.preventDefault():($(".nav-options li .opt-trigger").parent().removeClass("is-active"),$(".nav-options li a").parent().removeClass("is-active"),$(this).parent().addClass("is-active"),$(this).parent().parent().parent().addClass("is-active"),$.ajax({type:"POST",url:"load.php",data:"page="+e,dataType:"html",success:function(t){0!==parseInt(t)&&($("#main-content").html(t),$("#main-content section").hide().show())}}))});var t=window.location.hash;switch(t=t.replace(/^#/,"")){case"page2":$("#"+t+"-link").trigger("click");break;case"page3":$("#"+t+"-link").trigger("click");break;case"page4":$("#"+t+"-link").trigger("click")}}!function($){$.fn.fixMe=function(){return this.each(function(){function t(){a.wrap('<div class="table-container" />'),n=a.clone(),n.find("tbody").remove().end().addClass("fixed").insertBefore(a),e()}function e(){n.find("th").each(function(t){$(this).css("width",a.find("th").eq(t).outerWidth()+"px")})}function i(){var t=$(this).scrollTop(),e=a.offset().top,i=e+a.height()-a.find("thead").height();e>t||t>i?n.hide():t>=e&&i>=t&&n.is(":hidden")&&n.show()}var a=$(this),n;$(window).resize(e),$(window).scroll(i),t()})}}(jQuery),$(document).ready(function(){$("table").fixMe(),$(".up").click(function(){$("html, body").animate({scrollTop:0},2e3)})}),$(".nav-options li a.opt-trigger").on("click",function(t){t.preventDefault()}),$(document).ready(function(){leftNavStretch(),triggerShowWidget(),ajaxLeftMenu()});