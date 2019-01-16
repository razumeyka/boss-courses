@@include('./lib/jquery.fancybox.min.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
    
// services-hover
	
	$('.services__item').mouseenter(function () { 
		if(window.innerWidth<1280) return;
		$(this).addClass('services__item_active'); 
	});
	
	$('.services__item').mouseleave(function () { 
		if(window.innerWidth<1280) return;
		$(this).removeClass('services__item_active'); 
	});

//accordeon

 $(".accordion__full").hide();
    $('.accordion__spoiler').click(function(){
        $(this).next().slideToggle(300);
        $(this).toggleClass('accordion__spoiler_active');
    });
}); 