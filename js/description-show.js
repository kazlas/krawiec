//K. Laskowski (C) 2014
(function($, window) { //Module starts
  var currentMenuDescriptionId;
  
  //Make this function visible outside module
  window.setCurrentMenuDescription = function setCurrentMenuDescription (itemMenu) { 
	currentMenuDescriptionId = $(itemMenu).attr("value");
  };
  

$(document).ready(function(){

  resetDisplay ();

  $("ul#divMenu").click(function() {
	  animateCurtain ("div#divCurtain");
	  animateDescription ("div#divDescription");

	setTimeout(function () {
		resetDisplay ();	
	} , 1000);
  });

  
  function resetDisplay () {
	showDescription ("div#divDescription", currentMenuDescriptionId, "pl");
	setCommonHeights ("div#divDescription", "div#divCurtain");
  }

  function animateCurtain (element) {
	$(element).finish();  
	animateLeftAndDimm (element);
	animateRightAndGlow (element);
  }

  function animateDescription (element) {
	$(element).finish();  
	clearDescription(element);
	animateLeft (element);
	animateRight (element);
  }

  function animateRightAndGlow (element) {
    $(element).animate({left:"+=180px", opacity: 0.7},"slow");
  }

  function animateLeftAndDimm (element) {
    $(element).animate({left:"-=180px", opacity: 0.1},"slow");
  }

  function animateRight (element) {
    $(element).animate({left:"+=170px"},"slow");
  }

  function animateLeft (element) {
    $(element).animate({left:"-=170px"},"slow");
  }

  function clearDescription (displayElement) {
	  $(displayElement).html("");
	  $(displayElement).css("padding-bottom", 0);
  }

  function showDescription (displayElement, descriptionId, lang) {

    var $titleElement = $(displayElement).children("h2");
    var $pictureElement = $(displayElement).children("#divPicture");
    var $textElement =  $(displayElement).children("#divText");
    var totalHeight = 0;

    showTitle ($titleElement, descriptionId, lang);
    showPicture ($pictureElement , descriptionId, lang);
    showText ($textElement, descriptionId, lang);

    
    $(displayElement).children().each(function(){
      totalHeight = totalHeight + $(this).outerHeight();
    });
    $(displayElement).css("height", totalHeight);
  }

  function showTitle (displayElement, descriptionId, lang) {
	var description = getDescription (descriptionId, lang);
	var title = description["title"];
	$(displayElement).html(title);
  }

  function showPicture (displayElement, descriptionId, lang) {
	var description = getDescription (descriptionId, lang);
	var pictures = getPictures (descriptionId);
	var pictureHtml = getPictureHtml (pictures[0],300);
	$(displayElement).html(pictureHtml);
  }

  function showText (displayElement, descriptionId, lang) {
	var description = getDescription (descriptionId, lang);
	var paragraphsHtml = getParagraphsHtml (description);
	$(displayElement).css("padding-bottom", "50px");
	$(displayElement).html(paragraphsHtml);
  }

  
  function setCommonHeights (elementHeightPerfect, elementHeightToChange) {
  	  var commonHeight = $(elementHeightPerfect).css("height");
  	  var commonPaddingTop = $(elementHeightPerfect).css("padding-top");
  	  var commonPaddingBottom = $(elementHeightPerfect).css("padding-bottom");

	  var addPerfectTop = $(elementHeightPerfect).css("top");
  	  var changedHeight = parseInt(commonHeight)  + parseInt(addPerfectTop);
  	  
	  $(elementHeightToChange).css("height", changedHeight);
	  $(elementHeightToChange).css("padding-top", commonPaddingTop);
	  $(elementHeightToChange).css("padding-bottom", commonPaddingBottom);
  } 
  
  function getParagraphsHtml (descriptionJson) {
	  var html = "";
	  var paragraphs = descriptionJson["paragraphs"];
	  
	  $.each (paragraphs, function (index, paragraph) {
		  	html += "<h3>" +paragraph["title"]+ "</h3>";
		  	html += paragraph["content"];
		  	html +=  "&nbsp;"; //add free line for empty paragraphs.
		  }
	  )
	  
	  return html;
  }

  function getPictureHtml (picturelink, height, width) {
	  var html = "<br clear all><img src=\"";
	  html += picturelink;
	  html += "\"";
	  
	  if (typeof height === "number") {
		  html += " height=\"" +height+ "\"";
	  }
	  if (typeof width === "number") {
		  html += " width=\"" +width+ "\"";
	  }
	  html += ">";

	  if (typeof picturelink === "undefined") {
		  html = "";
	  }

	  return html;
  }


});


})(jQuery, window);//Module ends