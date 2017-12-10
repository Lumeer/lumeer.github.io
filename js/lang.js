function selectLanguage(languageSelect, otherPage, translated) {
  var browserLanguage = window.navigator.userLanguage || window.navigator.language;
  var selectedLanguage = readCookie('language');

  if (browserLanguage != null) {
    browserLanguage = browserLanguage.substr(0, 2);
  }

  // only when the user did not switch the lang themselve
  // in this case we need to decide according to browser settings
  if (selectedLanguage == null) {
    if (browserLanguage != null && browserLanguage != languageSelect) {
      window.location.replace(translated + '.html');
    }
  } else { // user has decided, are we on the right page?
    if (selectedLanguage != languageSelect) {
      window.location.replace(translated + '.html');
    }
  }

  //console.log(browserLanguage + ' - ' + languageSelect + ' - ' + selectedLanguage);
}

function onLanguageChange(value) {
  setCookie('language', value, 365);
  return true; // to make sure links with onclick using this method work
}

function saveLanguage(cookieValue) {
  setCookie('language', cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();

  if (nDays==null || nDays==0)
    nDays=1;

  expire.setTime(today.getTime() + 3600000*24*nDays);
  document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
