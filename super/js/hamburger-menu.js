// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

function hamburgerToggle() {
    toggleClass(document.getElementById('hamburger-menu'), 'open');
    toggleClass(document.getElementById('side-menu-mobile'), 'open');
}

function selectActiveTab(index, className, idPrefix, contentSuffix = '', max = 3) {
    for (let i = 1; i <= max; i++) {
        if (index != i) {
            removeClass(document.getElementById(idPrefix + i), className);
            if (contentSuffix) {
                removeClass(document.getElementById(idPrefix + contentSuffix + i), className);
            }
        }
    }
    
    addClass(document.getElementById(idPrefix + index), className);
    if (contentSuffix) {
        addClass(document.getElementById(idPrefix + contentSuffix + index), className);
    }
}