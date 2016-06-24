//convert all success criteria headings and tests to details/summary
$(document).ready(function(){
	
	$('h3.sc').wrap('<summary></summary>');

	$('summary').each(function(i){
		$summary = $(this);
		$details = $summary.add($summary.nextUntil('summary, h2'));
		$details.wrapAll('<details></details>');
	});
	details();
	
 });