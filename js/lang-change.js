//K. Laskowski (C) 2014
(function($, window) { //Module starts
$(document).ready(function(){

  var currentLang;

  //Make this function visible outside module
  window.setCurrentLang = function setCurrentLang (lang) { 
	currentLang = lang;
  };
  window.getCurrentLang = function getCurrentLang () { 
	return currentLang;
  };
  window.changeDescriptionLang  = function changeDescriptionLang (lang) {
	setCurrentLang (lang);
	showMenu("ul#divMenu", lang);
	changeDescritpionLang (lang);
  };

  setCurrentLang("pl");


});

})(jQuery, window);//Module ends