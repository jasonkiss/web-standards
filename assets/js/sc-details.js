//convert all success criteria headings and tests to details/summary
$(document).ready(function(){
	//get all H3s that are success criteria, i.e. start with #.#.#, e.g. 1.3.1
	var $sc = $('h3').filter(function() {
		return $(this).html().match(/^\d\.\d\.\d/);
	});
	//wrap every success criterion h3 in <summary>
	$sc.each(function() {
		$(this).wrap('<summary></summary>');
	});
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