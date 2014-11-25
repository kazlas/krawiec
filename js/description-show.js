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


  function animateDescription (element) {
	   
	$(element).finish();  
	clearDescription(element);
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
    $(element).animate({left:"-=170px",opacity:"0.1"},"slow");

  }

  function clearDescription (displayElement) {
	  $(displayElement).text("");
  }

  function showDescription (displayElement, descriptionId, lang) {
	var descripton = getDescription (descriptionId, lang);
	var pictures = getPictures (descriptionId);
	var pictureHtml = getPictureHtml (pictures[0], 300);
	
	$(displayElement).html(descripton + "<br>" + pictureHtml);
  }

  function getPictureHtml (picturelink, height, width) {
	  var html = "<img src=\"";
	  html += picturelink;
	  html += "\"";
	  
	  if (typeof height === "number") {
		  html += " height=\"" +height+ "\"";
	  }
	  if (typeof width === "number") {
		  html += " width=\"" +width+ "\"";
	  }

	  html += ">";

	  return html;
  }


});


})(jQuery, window);//Module ends