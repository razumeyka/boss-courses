@@include('./lib/jquery.fancybox.min.js')

$(document).ready(function(){
    
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
    
// slider
	
	function topslider_change(){
		var countslides=$('.topslider').children().length;
		var slide=($('.topslider').data('slide'));
		slide++;
		if(slide>=countslides)slide=0;
		$('.topslider').data('slide',slide).css('transform','translateY(-'+'slidecount*slide'+'00%)');
		$('.topslider').on('transitionend webkitTransitionEnd oTransitionEnd',function(){
			$(this).children().eq(slide).addClass('active');
		})
	};
	setInterval(function(){topslider_change()},3000);
}); 