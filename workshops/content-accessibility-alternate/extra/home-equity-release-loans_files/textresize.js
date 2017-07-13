function changeMySrc(style) 
{
    setActiveStyleSheet(style);
	
}

function loadTextSizeSelection()
{ 
    var style = readCookie("style");
    if (style!='textSmall' && style!='textMedium' && style!='textLarge') {
        style = 'textMedium';
    }
 
    changeMySrc(style);
}