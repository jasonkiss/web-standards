//add "/web-standards/" to beginning of every src that starts with "/assets/"
//$(document).ready(function(){
	//get all <a> elements with @src="/assets/..."

	var imgs = document.querySelectorAll("img[src^='/assets/']");
	for (var img of imgs) {
		var src = img.getAttribute("src");
	  img.setAttribute("src", "/web-standards" + src);
	}


	/*$("img[src^='/assets/']").each(function() {
		$(this).attr("src", "/web-standards" + $(this).attr("src"));
	});
*/
//});