// this removes the main facebook content div
$( document ).ready(function() {


	var main = $('#mainContainer')
	console.log(main);
	main.remove();

	var sidebar = $('#pagelet_sidebar')
	console.log(sidebar);

	sidebar.remove();

});
