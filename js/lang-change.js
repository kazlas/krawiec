//K. Laskowski (C) 2014
(function($, globals) { //Module starts

  var currentLang;

  //Make this function visible outside module
  globals.setCurrentLang = function (lang) { 
	currentLang = lang;
  };

  globals.getCurrentLang = function () { 
	return currentLang;
  };

  globals.changeLang = function (lang, elementMenu, elementDescription, elementCurtain) {
	setCurrentLang (lang);
	showMenu(elementMenu, lang);
	changeDescritpionLang (lang, elementDescription, elementCurtain);
  };


})(jQuery, window);//Module ends