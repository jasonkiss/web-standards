//add "/web-standards/" to beginning of every src that starts with "/assets/"
$(document).ready(function(){
	//get all <a> elements with @src="/assets/..."
	$("img[src^='/assets/']").each(function() {
		$(this).attr("src", "/web-standards/" + $(this).attr("src"));
	});
});