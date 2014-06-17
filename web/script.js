// JavaScript Document

setTimeout(function () {   window.scrollTo(0, 1); }, 1000);

$(window).bind("load", function() {
   // code here
   //$("h1#title").fitText();
    
});

//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);


//Dynamically assign height
function sizeContent() {
	
	//resize plugin stuff
  	//setTimeout($("h1#title").fitText(),1000);
	
	
	//determine sizes
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	
	$("#pageContainer").css("width",pageWidth*2);
	
	$(".page").css("width",pageWidth);
	
	
}




$(document).ready(function() {
	
	//$("h1#title").fitText();
	
	
	$( "div#page1" ).mousedown(function(){
		
	
	
	});
	$( "div#page2" ).mousedown(function(){
		
	});
	$( "div#page2" ).mousedown(function(){
	
	});

	
});


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

