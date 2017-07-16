function showHideTopics() {
	divObj = document.getElementById("topics");	
	linkObj = document.getElementById("showHideTopicsLink");	
	
	divObj.className = (divObj.className == "hidden")?"topics":"hidden";
	linkObj.innerText = ((divObj.className == "hidden")?"View":"Hide") + " all topics";
}

function hideApproveRejectButton()
{
	var menuItems = document.getElementsByTagName('ie:menuitem');
	
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].id.indexOf("saApproveOrDecline") != -1) {
			menuItems[i].hidden = true;
			break;
		}
	}
}

_spBodyOnLoadFunctionNames.push("hideApproveRejectButton");