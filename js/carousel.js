$(document).ready(loadCarouselParams);
var buttonIndex = 0 ;
function loadCarouselParams() {
	
	$('.simpleSelectOverride').css('float','none');//remove erroneous float
	newTcount = $('.newThumbsBox').length;
	var cBoxWidth = newTcount * 220;
	$('.carouselBox').css('width', cBoxWidth + 'px');
	theOtherWidth = 130;	
	theOtherMarg = 260;
	bigWidth = 360;
	bigHeight = 458;
	$('body').find('.newThumbsBox').nextAll().eq(4).find('a img').addClass('cBsml');
	$('.sshh').hide();
	$('.carouselBox').css('marginLeft', '260px');
	nC = 1;
}

$(function() {	
	//ADD CLASSES -img size
	$('body').find('.newThumbsBox a img').not(':eq(0)').addClass('cBsml');
	$('body').find('.newThumbsBox a img').eq(0).addClass('cBlrg');	
	
	//CHANGE WIDTH OF OUT-BOX
	$('body').find('.newThumbsBox').not(':eq(0)').addClass('cBsmlWidth');	
	$('body').find('.newThumbsBox').eq(0).addClass('cBlrgWidth');

	//OBJ AS VAR: CLICK-TO-GO / SAV-A-LOT
	$('body').find('.newThumbsBox').eq(0).addClass('goTo3');	
	$('body').find('.newThumbsBox').eq(1).addClass('goTo4');	
	$('body').find('.newThumbsBox').eq(2).addClass('goTo5');	
	// -	


	
	// HIDE DEPTH SHADOW
	// $('body').find('.newThumbsBox .sshh').eq(0).removeClass('shadAddMid');
	// $('body').find('.newThumbsBox .sshh').eq(1).removeClass('shadAdd');
	// $('body').find('.newThumbsBox .sshh').eq(2).removeClass('shadAdd shadAddMid');
	// $('body').find('.newThumbsBox .sshh').eq(3).removeClass('shadAdd');
	// $('body').find('.newThumbsBox .sshh').eq(4).removeClass('shadAddMid');

	//HIDE OVERLAY + ENLARGE
	$('body').find('.newThumbsBox a .titleOverlaySmall').not(':eq(0)').hide();	
	// $('body').find('.newThumbsBox a .titleOverlaySmall').eq(0).hide();	
	// $('body').find('.newThumbsBox a .titleOverlaySmall').eq(2).addClass('overlayBig');	
	// $('body').find('.newThumbsBox a .titleOverlaySmall').eq(4).hide();

	//HIDE + SHOW ADD BTN
	$('.simpleSelectOverride').hide();
	$('body').find('.newThumbsBox .simpleSelectOverride').eq(0).show();	

	//NEXT SLIDE SHRINK
	// $('body').find('.newThumbsBox').eq(5).addClass('cBsmlWidth');	

});
//PREV CLICK
	$('.cBoxBtnLft').on('click', function(goLeft) {
		//adjust tiny circles
		if (buttonIndex != 0) {
			$('.previousNextProduct').children('.tinyCircle').eq(buttonIndex).toggleClass('filledCircle') ;
			buttonIndex-- ;
			$('.previousNextProduct').children('.tinyCircle').eq(buttonIndex).toggleClass('filledCircle') ;
		}
		
		nC--;
		if(nC === 1) {
			$(this).addClass('clickNo');
		}
		theNewMarg = theOtherMarg + 130;
		theOtherMarg = theNewMarg;				
		$('.carouselBox').css('marginLeft', theNewMarg + 'px');
		$('.cBoxBtnRgt').removeClass('clickNo').addClass('clickYes');

		var big3 = $('body').find('.cBlrgWidth');
		var sml1 = $(big3).prevAll().eq(1);
		var sml2 = $(big3).prevAll().eq(0);		
		var sml4 = $(big3).nextAll().eq(0);		
		var sml5 = $(big3).nextAll().eq(1);

		$(big3).find('a img').removeClass('cBlrg').addClass('cBsml');
		$(big3).removeClass('cBlrgWidth').addClass('cBsmlWidth');
		$(big3).prev().removeClass('cBsmlWidth').addClass('cBlrgWidth');
		$(big3).prev().find('a img').removeClass('cBsml').addClass('cBlrg');

		$(big3).find('.titleOverlaySmall').fadeOut();		
		$(big3).prev().find('.titleOverlaySmall').fadeIn();

		$(big3).find('.simpleSelectOverride').fadeOut();		
		$(big3).prev().find('.simpleSelectOverride').fadeIn();

		$(sml5).removeClass('goTo5');
		$(sml4).removeClass('goTo4').addClass('goTo5');
		$(big3).removeClass('goTo3').addClass('goTo4');
		$(sml2).removeClass('goTo2').addClass('goTo3');
		$(sml1).removeClass('goTo1').addClass('goTo2');
		$(sml1).prev().addClass('goTo1');

	});
//NEXT CLICK
	$('.cBoxBtnRgt').on('click', function() {
		//adjust tiny circles
		if (buttonIndex != 19) {
			$('.previousNextProduct').children('.tinyCircle').eq(buttonIndex).toggleClass('filledCircle') ;
			buttonIndex++ ;
			$('.previousNextProduct').children('.tinyCircle').eq(buttonIndex).toggleClass('filledCircle') ;
		}
		
		nC++;
		if(nC === newTcount) {
			$(this).addClass('clickNo');
		}
		theNewMarg = theOtherMarg - 130;
		theOtherMarg = theNewMarg;		
		$('.carouselBox').css('marginLeft', theNewMarg + 'px');
		$('.cBoxBtnLft').removeClass('clickNo').addClass('clickYes');
		
		// SET OBJECTS AS VARIABLES
		var big3 = $('body').find('.cBlrgWidth');
		var sml1 = $(big3).prevAll().eq(1);
		var sml2 = $(big3).prevAll().eq(0);		
		var sml4 = $(big3).nextAll().eq(0);		
		var sml5 = $(big3).nextAll().eq(1);		

		// SWITCH CLASSES AMONG VARS
		$(big3).find('a img').removeClass('cBlrg').addClass('cBsml');
		$(big3).removeClass('cBlrgWidth').addClass('cBsmlWidth');
		$(big3).next().removeClass('cBsmlWidth').addClass('cBlrgWidth');
		$(big3).next().find('a img').removeClass('cBsml').addClass('cBlrg');		
						
		//REMOVE / ADD OVERLAY		
		$(big3).find('.titleOverlaySmall').fadeOut();		
		$(big3).next().find('.titleOverlaySmall').fadeIn();		
	
		//REMOVE / ADD WL BTN
		$(big3).find('.simpleSelectOverride').fadeOut();		
		$(big3).next().find('.simpleSelectOverride').fadeIn();

		// GO-TO-CLICK defined
		$(sml1).removeClass('goTo1');
		$(sml2).removeClass('goTo2').addClass('goTo1');
		$(big3).removeClass('goTo3').addClass('goTo2');
		$(sml4).removeClass('goTo4').addClass('goTo3');
		$(sml5).removeClass('goTo5').addClass('goTo4');
		$(sml5).next().addClass('goTo5');

		//DEPTH SHADOW
		// $(med1).find('.sshh').toggleClass('shadAdd shadAddMid');
		// $(big3).find('.sshh').addClass('shadAddMid');
		// $(med2).find('.sshh').removeClass('shadAddMid');
		// $(sml2).find('.sshh').toggleClass('shadAdd shadAddMid');
	});

// GO-TO-CLICK FUNCTIONS
	$('.carouselBox').on('click', '.goTo1', function(e) {
		e.preventDefault();
		var cBoxMarg = parseInt($('.carouselBox').css('margin-left'));	
		// $('.carouselBox').css('margin-left', (2 * theOtherWidth) + 'px');
		$('.cBoxBtnLft').trigger('click');		
		setTimeout(function() {$('.cBoxBtnLft').trigger('click')},
			100);	
	});
	$('.carouselBox').on('click', '.goTo2', function(e) {
		e.preventDefault();		
		$('.cBoxBtnLft').trigger('click');		
	});
	$('.carouselBox').on('click', '.goTo4', function(e) {
		e.preventDefault();		
		$('.cBoxBtnRgt').trigger('click');		
	});
	$('.carouselBox').on('click', '.goTo5', function(e) {
		e.preventDefault();		
		$('.cBoxBtnRgt').trigger('click');
		$('.cBoxBtnRgt').trigger('click');
	});
// HOVER ZOOM
	$('.carouselBox').on('mouseenter', '.cBlrgWidth .carAbox', function(hZoom) {
		$(this).parent().find('.crsZoom').show();
		$(this).find('.titleOverlaySmall').hide();		
	}).on('mouseleave', '.cBlrgWidth .crsZoom', function(hZoom) {
		$('.crsZoom').hide();
		$(this).next().find('.titleOverlaySmall').show();		
	});
	$('.crsZoom').mousemove(function(e) {		
		var offset = $(this).offset();	
		var pushLeft = (((e.pageX - offset.left)/ ( bigWidth  ) ) * 100)  ;		
		var pushTop = (((e.pageY - offset.top)/ ( bigHeight  ) ) * 100)  ;	  
  		var newCoords = pushLeft + '%' + pushTop + '%';
  	 	$('.crsZoom').css('background-position', newCoords);
	});
	$('.carouselBox').on('click', '.crsZoom', function() {
		var path = $(this).data('path');
		window.location.href = path;
	});
	
	$('.tinyCircle').click(function() {
		var currentClick = $('.previousNextProduct').children('.tinyCircle').index(this) ;
		var clickDifference = currentClick - buttonIndex ;
		
		if (clickDifference > 0) {
			var hitIt = $('.cBoxBtnRgt') ;
		}
		else if (clickDifference < 0) {
			var hitIt = $('.cBoxBtnLft') ;
		}
		
		for (i = 0; i < Math.abs(clickDifference); i++) {
			hitIt.trigger('click');
		}
	});