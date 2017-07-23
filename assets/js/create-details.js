//convert all containers with class="details" to details/summary
$(document).ready(function(){
	//get all containers with class="details"

	var $allDetails = $('.details');
	//for each details container
	$allDetails.each(function() {
		$details = $(this);
		$summary = $details.firstChild().wrap('<summary></summary>');
		$details.wrapAll('<details></details>');
	});
	details();
});