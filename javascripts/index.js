$(function() {
	$("ul#tagList > li").click(
		function(event) {
			$(this).next("ul").slideToggle(200);
		}
	)
});