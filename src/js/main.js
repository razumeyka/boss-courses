@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/sticky-kit.js')
@@include('./lib/wpcf7.js')

$(document).ready(function(){
    
	jQuery("body").on("click","a.scroll_to", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href');
		var top = jQuery('a[name="'+id.substr(1)+'"]').offset().top;
		jQuery('body,html').animate({scrollTop: top}, 800);
	});
// mobile_menu
    
    $('.mobile-menu').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	$('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('.mobile-menu').is(':visible'))return;
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
	});
	var ww=window.innerWidth;
	$(window).resize(function(){
		if(window.innerWidth==ww)return;
		ww=window.innerWidth;
		if(!$('.mobile-menu').is(':visible')){
			$('header .menu').slideDown(300);
			$('.burger').removeClass( 'burger_active' ); 
		}else{
			$('header .menu').slideUp(300);
			$('.burger').removeClass( 'burger_active' ); 
		}
	})
    
// slider
	
	function topslider_change(){
		var countslides=$('.topslider').children().length;
		var slide=($('.topslider').data('slide'));
		var rez=100/countslides*slide;
		slide++;
		if(slide>=countslides)slide=0;
		$('.topslider').data('slide',slide).css('transform','translateY(-'+rez+'%)');		
		$('.topslider').on('transitionend webkitTransitionEnd oTransitionEnd',function(){
			$(this).children().eq(slide).addClass('active');
		})
	};
	setInterval(function(){topslider_change()},3000);
	
//sticky-kit

	if(ww>1200){
		$(".inner-page__form").stick_in_parent();
	}
			
// accordion
    $('.accordion__information').hide();
    $('.accordion__caption').click(function(){
        $(this).next().slideToggle(500);
		$(this).toggleClass('accordion__caption_active');
    });
	
	
	
}); 