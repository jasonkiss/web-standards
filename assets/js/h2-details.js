//convert all h2 and their related test to details/summary
$(document).ready(function(){
	//wrap every h2 in <summary>
	$('h2').each(function() {
		$detailsContent = $(this).nextUntil('h2, footer');
		$details = $(this).add($detailsContent);
		$details.wrapAll('<details class="h2"></details>');
		$detailsContent.wrapAll('<div class="detailsContent"></div>');
		$(this).wrap('<summary></summary>');
	});
	details();
});