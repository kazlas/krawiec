(function($, window) { //Module starts

  //Make this functions visible outside module
  window.getDescription = function getDescription (descriptionId, lang) {
	return descriptionsJson[descriptionId][lang];
  }
  
  window.getPictures =   function getPictures (descriptionId) {
	return descriptionsJson[descriptionId]["pictures"];
  }


  var descriptionsJson = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "json/getDescriptions.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
  })();


})(jQuery, window);//Module ends