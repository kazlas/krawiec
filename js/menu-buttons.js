(function($, window) { //Module starts

  //Make function accessible outside module
  window.highliteCurrentMenu = function highliteCurrentMenu (itemMenu) { 
	$(itemMenu).parent().siblings().children().removeClass("currentMenuItem");
	$(itemMenu).addClass("currentMenuItem");
  };

  
})(jQuery, window);//Module ends