// JavaScript Document
function handleStart(e){
	e.preventDefault();
	var touchPoints = e.changedTouches;
	$(".para").html("OK, somethings happening.."+touchPoints.length+" touches");
};

function handleKeyStart(e){
	e.preventDefault();
	var touchPoints = e.changedTouches;
	$(e.currentTarget).css({'background-color':'#DDD'});
	var oldText = $(".textAr").html();
	var keyPress = e.currentTarget.firstChild.innerHTML;
	if(keyPress!='&lt;&lt; backspace' && keyPress!='enter' && keyPress!='^'){
		$(".textAr").html(oldText+keyPress);
	}
	if(keyPress==''){
		$(".textAr").html(oldText+' ');
	}
	if(keyPress=='&lt;&lt; backspace'){
		var newText = oldText.substring(0,oldText.length-1);
		$(".textAr").html(newText);
	}
};

function handleKeyEnd(e){
	$(e.currentTarget).css({'background-color':'rgba(148,148,148,1.00)'});
}

function handleEnd(e){
	e.preventDefault();
	var touchPoints = e.changedTouches;
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