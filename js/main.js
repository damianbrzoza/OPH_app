$(document).ready(function() {
	$("select").fancySelect();
	$('.bxslider').bxSlider({
	  pagerCustom: '#bx-pager',
	  mode: 'fade'
	});
	$( "#tabs" ).tabs();
	$('input[placeholder], textarea[placeholder]').placeholder();
	 $(".item-list li").mouseenter(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600);
        return false;
     });
      $('.item-list li').mouseleave(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
        return false;
     });
		  $(".search").click(function() {
	        if($(".searchform").css('display') == 'none') {
	            $('.searchform').stop(true,true).animate({width:'show'},10);
	            $('#nav').addClass('active');
	            $(".searchform #s").focus();
	        }
	        else {
	             $('.searchform').stop(true,true).animate({width:'hide'},10);
	             $('#nav').removeClass('active');
	             
	        }
	        return false;
	    });
	  $(".searchform #s").focusout(function() {
	    $('#nav').removeClass('active');
	    $('.searchform').stop(true,true).animate({width:'hide'},0);
	  });
		$('input[placeholder], textarea[placeholder]').placeholder();
      jQuery(document).on('click', ".menu_trigger", function (e) {
        e.preventDefault()
        window.setTimeout(function() {
            if(jQuery('#nav').hasClass('clicked')){
                jQuery('#nav').stop(true,true).animate({height:'hide'},100);
                jQuery('#nav').removeClass('clicked');
            }else{
                jQuery('#nav').stop(true,true).animate({height:'show'},400);
                jQuery('#nav').addClass('clicked');
            }
        }, 400);
        return false;
    });
    jQuery("#nav").on('click', '.drops', function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").parent().next().slideUp();
        } else {
            jQuery(this).addClass("active").parent().next().slideDown();
        }
        return false;
    });
      
}); 

$(window).load(function() {

	 if ($('.container .bottom-slider .slides').length) {
		$(".container .bottom-slider .slides").jCarouselLite({
			btnNext: ".container .bottom-slider .btn-right",
			btnPrev: ".container .bottom-slider .btn-left"
			
		});
	}
});

$(window).resize(function() {
    if($(document).width() > 768){
      $( "#nav" ).addClass("active");
      $( "#nav ul" ).attr('style','');
      $( "#nav" ).attr('style','');
      $( "#nav" ).removeClass("clicked");
      $( "#nav .active" ).removeClass('active');
    }
    else {
        $( "#nav" ).removeClass("active");
    }
});