//K. Laskowski (C) 2014
window.onload = (function($, globals) { //Module starts

  var currentMenuDescriptionId;
  
  //Make this function visible outside module
  globals.setCurrentMenuDescription = function (itemMenu) { 
	currentMenuDescriptionId = $(itemMenu).attr("value");
	highliteCurrentMenu(itemMenu);
	resetDisplay(currentMenuDescriptionId, getCurrentLang());
  };

  globals.changeDescritpionLang = function (lang) {
	resetDisplay(currentMenuDescriptionId, lang);
  }

  globals.menuClick = (function(elementCurtain, elementDescription) {
	  animateCurtain (elementCurtain);
	  animateDescription (elementDescription);

	setTimeout(function () {
		resetDisplay (currentMenuDescriptionId, getCurrentLang());	
	} , 1000);
  });

  
  function resetDisplay (menuId, lang) {
	showDescription ("div#divDescription", menuId, lang);
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
  }

  function showDescription (displayElement, descriptionId, lang) {
	var description = getDescription (descriptionId, lang);

	var title = "<h2>" + description["title"] + "</h2>";
	var paragraphsHtml = getParagraphsHtml (description);

	var pictures = getPictures (descriptionId);
	var pictureHtml = getPictureHtml (pictures[0],300);
	
	$(displayElement).html(title + pictureHtml + paragraphsHtml);
  }
  
  function setCommonHeights (elementHeightPerfect, elementHeightToChange) {
  	  var commonHeight = $(elementHeightPerfect).css("height");
  	  var commonPaddingTop = $(elementHeightPerfect).css("padding-top");
  	  var commonPaddingBottom = $(elementHeightPerfect).css("padding-bottom");
  	  
	  $(elementHeightToChange).css("height", commonHeight);
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


})(jQuery, window);//Module ends