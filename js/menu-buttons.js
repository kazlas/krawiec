//K. Laskowski (C) 2014
(function($, window) { //Module starts
$(document).ready(function(){

	//Make function accessible outside module
	window.highliteCurrentMenu = function highliteCurrentMenu (itemMenu) { 
		$(itemMenu).parent().siblings().children().removeClass("currentMenuItem");
		$(itemMenu).addClass("currentMenuItem");
	};
  
	showMenu("ul#divMenu", "pl");

  function showMenu (displayElement, lang) {
	var menuJsonLang = getMenu(lang);
	var menuHtml = getMenuHtml (menuJsonLang);
	$(displayElement).html(menuHtml);
  }


  function getMenuHtml (menuJsonLang) {
	  var html = "";
	  
	  $.each (menuJsonLang, function (index, menuJsonLang) {
		    html += "<li><a href=\"#\" onClick=\"setCurrentMenuDescription(this);\" value=\"";
		    html += menuJsonLang["id"];
		    html += "\">";
		    html += menuJsonLang["caption"];
		    html += "</a></li>";
		  }
	  )
	  
	  return html;
  }

});

})(jQuery, window);//Module ends