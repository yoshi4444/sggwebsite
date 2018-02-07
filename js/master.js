$(document).ready(function() {
	$("#headerBlock").load("/sggwebsite/header.html");

	$('#mobileToggle').click(function (e) { 
		$('body, mainNav').toggleClass('click');
	});
});