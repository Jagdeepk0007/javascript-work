/* Jagdeep */
"use strict";

var $ = function (id) {
	return document.getElementById(id);
};

var display = function () {
	$("calculator__display").value += this.innerHTML;
};

window.onload = function () {

	var keyNum = document.getElementsByClassName("key--num");
	for (var i = 0; i < keyNum.length; i++) {
		keyNum[i].onclick = display;
	}
	
	var keyOperator = document.getElementsByClassName("key--operator");
	for (i = 0; i < keyOperator.length; i++) {
		keyOperator[i].onclick = display;
	}
	
	$("decimal").onclick = display;
	
	$("clear").onclick = function () {
		$("calculator__display").value = "";
	}
	
	$("key--equal").onclick = function () {
		$("calculator__display").value = eval($("calculator__display").value);
	};
    
    $("pi").onclick = function () {
        $("calculator__display").value += Math.PI;    
    };
    
    $("per").onclick = function () {
        $("calculator__display").value = parseInt($("calculator__display").value)/100;    
    };
    
    $("sq").onclick = function () {
        $("calculator__display").value = Math.pow($("calculator__display").value,2);    
    };
    
    $("root").onclick = function () {
        $("calculator__display").value = Math.sqrt($("calculator__display").value);    
    };
};
