(function($, window) { //Module starts

  //Make accessible outside module: setCurrentMenuDescriptionId(..) 
  window.setCurrentMenuDescriptionId = function setCurrentMenuDescriptionId (itemMenu) { 
	currentMenuDescriptionId = $(itemMenu).attr("value");
  };
  var currentMenuDescriptionId;
  

$(document).ready(function(){
  	
  $("ul#menu").click(function(){
	clearDescritpion("div#divCurtain");
	animateLeft("div#divCurtain");
	animateRight ("div#divCurtain");
	
    setTimeout(function () {
	    showDescription ("div#divCurtain", currentMenuDescriptionId)}
	    , 1000);
  });

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

  
  function animateRight (element) {
    $(element).animate({left:"+=170px",opacity:"0.5"},"slow");
  }
  
  function animateLeft (element) {
	  $(element).animate({left:"-=170px",opacity:"1"},"slow");
  }

  function clearDescritpion (displayElement) {
	  $(displayElement).text("");
  	  $(displayElement).css("fontSize", "1em");

  }
  
  function showDescription (displayElement, descriptionId) {
	var descripton = descriptionsJson[descriptionId];
	$(displayElement).html(descripton); //.animate({fontSize:"2em"},"slow");
  }

    
});


})(jQuery, window);//Module ends