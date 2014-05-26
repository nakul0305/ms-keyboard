// JavaScript Document
var targetTouches = null;
function hideKeyboard(){
	$(".touchArea").animate({opacity:'.05'},150,function(){
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
	var oldText = $(".textAr").html();
	var keyPress = e.currentTarget.firstChild.innerHTML;
	
	if(keyPress!='&lt;&lt; backspace' && keyPress!='enter' && keyPress!='&lt;' && keyPress!='&gt;'){
		$(".textAr").html(oldText+keyPress);
	}
	
	if(keyPress==''){
		$(".textAr").html(oldText+' ');
	}
	
	if(keyPress=='&lt;&lt; backspace'){
		var newText = oldText.substring(0,oldText.length-1);
		$(".textAr").html(newText);
	}
	
	if(keyPress=='&lt;'){
		var evt = $.Event("keydown");
		evt.which = 37; // # Some key code value
		//$("input").val(String.fromCharCode(e.which));
		$(document).trigger(evt);
	}
	
	if(keyPress=='&gt;'){
		var evt = $.Event("keydown");
		evt.which = 39; // # Some key code value
		//$("input").val(String.fromCharCode(e.which));
		$(document).trigger(evt);
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
})