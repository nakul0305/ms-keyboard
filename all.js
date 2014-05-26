// JavaScript Document
var targetTouches = null;

var dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum";

function hideKeyboard(){
	$(".touchArea").animate({opacity:'.15'},150,function(){
	});
}

function showKeyboard(){
	$(".touchArea").animate({opacity:'1'},150,function(){
	});
}

function handleStart(e){
	e.preventDefault();
	var touchPoints = e.touches;
	if(touchPoints.length>1){
		hideKeyboard();
		return 0;
	}
	$(".para").html("OK, somethings happening.."+touchPoints.length+" touches");
};

function handleKeyStart(e){
	e.preventDefault();
	var touchPoints = e.touches;
	if(touchPoints.length>1){
		return 0;
	}
	$(e.currentTarget).css({'background-color':'#DDD'});
	var oldText = $(".textAr").val();
	var keyPress = e.currentTarget.firstChild.innerHTML;
	
	if(keyPress!='&lt;&lt; backspace' && keyPress!='enter' && keyPress!='&lt;' && keyPress!='&gt;'){
		$(".textAr").val(oldText+keyPress);
	}
	
	if(keyPress==''){
		$(".textAr").val(oldText+' ');
	}
	
	if(keyPress=='&lt;&lt; backspace'){
		var newText = oldText.substring(0,oldText.length-1);
		$(".textAr").val(newText);
	}
	
	if(keyPress=='&lt;'){
		var evt = $.Event('keypress');
		evt.which = 37; // # Some key code value
		//$("input").val(String.fromCharCode(e.which));
		$(".textAr").trigger(evt);
	}
	
	if(keyPress=='&gt;'){
		var evt = $.Event('keypress');
		evt.which = 39; // # Some key code value
		//$("input").val(String.fromCharCode(e.which));
		$(".textAr").trigger(evt);
	}
	
};

function handleKeyEnd(e){
	$(e.currentTarget).css({'background-color':'rgba(148,148,148,1.00)'});
}

function handleEnd(e){
	e.preventDefault();
	var touchPoints = e.touches;
	if(touchPoints.length<2){
		showKeyboard();		
	}
	$(".para").html("OK, somethings happening.."+touchPoints.length+" touches");
};

function handleCancel(e){
	e.preventDefault();
};

$(document).ready(function(){
	var elem = document.getElementsByClassName("touchArea")[0];
	elem.addEventListener("touchstart", handleStart, false);
	elem.addEventListener("touchend", handleEnd, false);
	elem.addEventListener("touchcancel", handleCancel, false);
	var keyElem = document.getElementsByClassName("isKey");
	for(var i=0; i<keyElem.length; i++){
		keyElem[i].addEventListener("touchstart", handleKeyStart, false);
		keyElem[i].addEventListener("touchend", handleKeyEnd, false);
	}
	
	$(".content").height($(window).height());
	$(".dummyText").val(dummyText);
})