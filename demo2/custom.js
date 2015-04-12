$(function() {

$('header nav a').click(function() {
var $linkClicked = $(this).attr('href');
document.location.hash = $linkClicked;
var $pageRoot = $linkClicked.replace('#page', '');

  if (!$(this).hasClass("active")) {
    $("header nav a").removeClass("active");
    $(this).addClass("active");
    $.ajax({
		type: "POST",
		url: "load.php",
		data: 'page='+$pageRoot,
		dataType: "html",
		success: function(msg){
			
			if(parseInt(msg)!=0)
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