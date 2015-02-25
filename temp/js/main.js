$(document).ready(function() {

	// MENU FUNCTIONALITY
	$('.menu-icon, .overlay').on('click', function(){
		$('#application').toggleClass('active-menu');
		$('.menu-icon').children('i').toggleClass('click-fadein');
		$('.menu-icon').children('i').toggleClass('click-fadeout');
	});

});