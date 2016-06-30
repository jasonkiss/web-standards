//convert all success criteria headings and tests to details/summary
$(document).ready(function(){
	//wrap every success criterion h3 in <summary>
	$('h3.sc').wrap('<summary></summary>');
	//for each <summary>
	$('summary').each(function(i){
		$summary = $(this);
		$detailsContent = $summary.nextUntil('summary, h2');
		$details = $summary.add($detailsContent);
		$details.wrapAll('<details></details>');
		$detailsContent.wrapAll('<div class="detailsContent"></div>');
	});
	details();
 });