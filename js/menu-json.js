//K. Laskowski (C) 2014
(function($, window) { //Module starts
$(document).ready(function () {

  //Make this functions visible outside module
  window.getMenu = function getMenu (lang) {
	return menuJson[lang];
  }

  var menuJson = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "json/getMenu.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
  })();


});
})(jQuery, window)//Module ends
