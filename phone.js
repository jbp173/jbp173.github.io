$(document).ready(function() { //do this when the document is loaded
	$("#contentDialer").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
});

$("#buttonDialer").click(function() { //when "button_id is clicked"
	$("#contentDialer").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
});

$("#buttonList").click(function() { //when "button_id is clicked"
	$("#contentList").show(); //show the element with ID "element"
	$("#contentDialer").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
});

$("#buttonAdd").click(function() { //when "button_id is clicked"
	$("#contentAdd").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentDialer").hide(); //hide the element with ID "otherElement"
});