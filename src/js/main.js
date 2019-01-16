@@include('./lib/jquery.fancybox.min.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	$('.menu-item-has-children>a').click(function(e){
	$(this).parent().toggleClass('active');
	
	if($(".burger").hasClass("active")){
		e.preventDefault();
		
		$(this).parent().find('ul').slideToggle();
		}
	})

//sub-menu
	$('.menu-item-has-children').mouseenter(function(){
	if($(".burger_wrapper").width()==0){
			$(this).find('.sub-menu').fadeIn();
	}
	})
	
	$('.menu-item-has-children').mouseleave(function(){
	if($(".burger_wrapper").width()==0){
			$(this).find('.sub-menu').fadeOut();
	}
	})
    
// slider
	
	function topslider_change(){
		var countslides=$('.topslider').children().length;
		var slide=($('.topslider').data('slide'));
		slide++;
		if(slide>=countslides)slide=0;
		$('.topslider').data('slide',slide).css('margin-top','-'+slide+'00%');
		$('.topslider').on('transitionend webkitTransitionEnd oTransitionEnd',function(){
			$(this).children().eq(slide).addClass('active');
		})
	};
	setInterval(function(){topslider_change()},3000);
}); 