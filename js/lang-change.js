//K. Laskowski (C) 2014
window.onload = (function($, globals) { //Module starts

  var currentLang;

  //Make this function visible outside module
  globals.setCurrentLang = function (lang) { 
	currentLang = lang;
  };

  globals.getCurrentLang = function () { 
	return currentLang;
  };

  globals.changeDescriptionLang = function (lang) {
	setCurrentLang (lang);
	showMenu("ul#divMenu", lang);
	changeDescritpionLang (lang);
  };


})(jQuery, window);//Module ends