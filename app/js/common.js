$(function() {

	$(".menu-collapsed").click(function() {
		$(this).toggleClass("menu-expanded");
	});

	$("#top-menu").on("click","a", function (event) {
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});



});
