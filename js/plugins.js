
$(function () {

	var winH 	= $(window).height(),
		upperH	= $('.upper-bar').innerHeight(),
		navH 	= $('.navbar').innerHeight();
	// $('.slider, .carousel-item').height(winH - (upperH + navH));
	$('.slider, .carousel-item').height((winH - (upperH + navH) ) + 100);
});

// Featured Work Shuffle

$('.featured-work ul li').on('click', function (){
	$(this).addClass('active').siblings().removeClass('active');

	if($(this).data('class') === 'all'){
		$('.shuffle-images .col-md').css('opacity', 1);
	}else{
		$('.shuffle-images .col-md').css('opacity', '0.08');
		$($(this).data('class')).parent().css('opacity', 1);
	}




	$('.arrow').click(function(){$('html, body').animate({

		scrollTop: $('.home').offset().top
		
	
		}, 1000);
	});




	var scrollButton = $("#scroll-top");
// Caching The Scroll Top Element
    
$(window).scroll(function () {
        
	if ($(this).scrollTop() >= 85) {
		
		scrollButton.css('right', '30px');
		$('.arrow').fadeOut();

		
	} else {
		
		scrollButton.css('right', '-70px');
		$('.arrow').fadeIn();
	}
});

// Click On Button To Scroll Top

scrollButton.click(function () {
	
	$("html,body").animate({ scrollTop : 0 }, 600);
	

});
	// Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
		// cursorcolor: '#f7600e',
		cursorcolor: '#8e44ad',
        cursorwidth: 10,
		cursorborderradius: 50,
		cursorborder: '1px solid #8e44ad'

        // cursorborder: '1px solid #f7600e'
        
    });
	
});