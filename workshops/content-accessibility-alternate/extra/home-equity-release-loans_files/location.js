function updateLocations(destinationID, values, displayPanel) {
    document.getElementById(destinationID).value = values;
    
    var locations = parseSelectedLocationIds(values);
    var locationText = "";

    for (i = 0; i < locations.length; i++) {
        if (locations[i] != "") {
            subLocations = locations[i].split(",");

            for (j = 0; j < subLocations.length; j++) {
                locationText += getnbsp(i) + subLocations[j] + "<br />";
            }
        }
    }

    if (document.getElementById(displayPanel) != null) {
        document.getElementById(displayPanel).value = locationText;
    }

    document.getElementById("locationText").innerHTML = locationText;
}

function changeLocation(destinationID, displayText) {
    locs = document.getElementById(destinationID).value;
    showPopWin('/_layouts/cab/internet/ajax/locations.html?destObjId=' + destinationID + '&disp=' + displayText + '&ids=' + locs, 330, 400, null);
}

function resetLocation(sourceID, destinationID) {
    defaultLocation = document.getElementById(sourceID);
    updateLocations(destinationID, defaultLocation.value)
    document.getElementById('locationText').innerHTML = 'All of New Zealand';
}

function parseSelectedLocationIds(locIds) {

    var values = Array("", "", "", "");
    var ids = locIds.split(',');

    for (i = 0; i < ids.length; i++) {
        var tmp = ids[i].split('-');

        for (k = 0; k < 4; k++) {
            if (tmp[k] != null && tmp[k] != "" && values[k].indexOf(tmp[k]) == -1)
                values[k] += ((values[k] != "")?",":"") + tmp[k];
        }
    }

    return values;
}

function getnbsp(n) {
    var nbsp = "";
    for (i = 0; i < n; i++) {
        nbsp += "&nbsp;";
    }

    return nbsp + " &gt; ";
}