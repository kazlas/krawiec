(function($, window) { //Module starts
  var currentMenuDescriptionId;
  
  //Make this function visible outside module
  window.setCurrentMenuDescription = function setCurrentMenuDescription (itemMenu) { 
	currentMenuDescriptionId = $(itemMenu).attr("value");
  };
  

$(document).ready(function(){
  	
  $("ul#divMenu").click(function() {
	  animateDescription ("div#divCurtain");
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

  
   function animateDescription (element) {
	   
	$(element).finish();  
	clearDescritpion(element);
	animateLeft (element);
	animateRight (element);
		
	setTimeout(function () {
	    showDescription (element, currentMenuDescriptionId, "pl")}
	    , 1000);
  }
  
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
  
  function showDescription (displayElement, descriptionId, lang) {
	var descripton = descriptionsJson[descriptionId][lang];
	$(displayElement).html(descripton); //.animate({fontSize:"2em"},"slow");
  }

    
});


})(jQuery, window);//Module ends