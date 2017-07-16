var ajax_list_MSIE = false;
if (navigator.userAgent.indexOf('MSIE') >= 0 && navigator.userAgent.indexOf('Opera') < 0) ajax_list_MSIE = true;

function ajax_copyValue(inputObj, hiddenField) {
    if (!inputObj) inputObj = this;
    var tmpValue = inputObj.innerHTML;
    if (ajax_list_MSIE) tmpValue = inputObj.innerText; else tmpValue = inputObj.textContent;
    if (!tmpValue) tmpValue = inputObj.innerHTML;
    if (!tmpValue) tmpValue = inputObj.value;

    if (tmpValue != 'All categories') {
        /*  set hiddenField to tmpValue  */
        if (document.getElementById(hiddenField)) document.getElementById(hiddenField).value = tmpValue;
    }
}

function highlight(obj) {
    obj.focus();
    obj.select();
}

function showAdvancedSearchOptions(searchModeField) {

    if (document.getElementById(searchModeField)) document.getElementById(searchModeField).value = '1';
    
    advancedPanel = document.getElementById('advancedFiltersPanel');
    advancedPanel.style.display = 'inline';

    basicPanel = document.getElementById('basicFiltersPanel');
    basicPanel.style.display = 'none';

    alink = document.getElementById('advancedSearchLink');
    alink.style.display = 'none';

    slink = document.getElementById('searchtipslink');
    slink.style.display = 'inline';
}

function hideAdvancedSearchOptions(searchModeField) {

    if (document.getElementById(searchModeField)) document.getElementById(searchModeField).value = '0';

    advancedPanel = document.getElementById('advancedFiltersPanel');
    basicPanel = document.getElementById('basicFiltersPanel');

    advancedPanel.style.display = 'none';
    basicPanel.style.display = 'inline';

    alink = document.getElementById('advancedSearchLink');
    alink.style.display = 'inline';

    slink = document.getElementById('searchtipslink');
    slink.style.display = 'none';
}