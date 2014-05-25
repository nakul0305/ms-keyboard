// JavaScript Document
$(document).ready(function(e) {
    $('.touchArea').bind('swipemove',function(e, data){
		if($('.touchArea').css('background-color')=="rgb(102, 102, 102)"){
			$('.touchArea').css({'background-color':'#C03'});
		}
		else{
			$('.touchArea').css({'background-color':'#666'});
		}
	});
});