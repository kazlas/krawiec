//K. Laskowski (C) 2014
(function($, window) { //Module starts

  //Make function accessible outside module
  window.highliteCurrentMenu = function highliteCurrentMenu (itemMenu) { 
	$(itemMenu).parent().siblings().children().removeClass("currentMenuItem");
	$(itemMenu).addClass("currentMenuItem");
  };

  
$(document).ready(function(){
	showMenu("div#divMenuJson", "pl");

});

  function showMenu (displayElement, lang) {
	var menuJsonLang = getMenu(lang);
	var menuHtml = getMenuHtml (menuJsonLang);
    $(displayElement).css("padding", 20);
	$(displayElement).html(menuHtml);
  }


  function getMenuHtml (menuJsonLang) {
	  var html = "";
	  
	  $.each (menuJsonLang, function (index, menuJsonLang) {
		  	html += "<h3>" +menuJsonLang["caption"]+ "</h3>";
		  }
	  )
	  
	  return html;
  }


})(jQuery, window);//Module ends