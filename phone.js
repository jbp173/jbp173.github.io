$(document).ready(function() { //do this when the document is loaded
	$("#contentDialer").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
	$("#contentGesture").hide(); //hide the element with ID "otherElement"
});

$("#buttonDialer").click(function() { //when "button_id is clicked"
	$("#contentDialer").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
	$("#contentGesture").hide(); //hide the element with ID "otherElement"
});

$("#buttonList").click(function() { //when "button_id is clicked"
	$("#contentList").show(); //show the element with ID "element"
	$("#contentDialer").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
	$("#contentGesture").hide(); //hide the element with ID "otherElement"
});

$("#buttonAdd").click(function() { //when "button_id is clicked"
	$("#contentAdd").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentDialer").hide(); //hide the element with ID "otherElement"
	$("#contentGesture").hide(); //hide the element with ID "otherElement"
});

$("#buttonGesture").click(function() { //when "button_id is clicked"
	$("#contentGesture").show(); //show the element with ID "element"
	$("#contentList").hide(); //hide the element with ID "otherElement"
	$("#contentDialer").hide(); //hide the element with ID "otherElement"
	$("#contentAdd").hide(); //hide the element with ID "otherElement"
});


//Gesture Controls
downX = 0;
downY = 0;

$("#gestureArea").mousedown(function(event) {
	$("#gestureOutput").val("Mouse Down");
	downX = event.pageX;
	downY = event.pageY;
});

$("#gestureArea").mouseup(function(event) {
	upX = event.pageX;
	upY = event.pageY;

	if (upX < downX)
	{
		$("#gestureOutput").val("Swipe Left");		
	}
	else if (upX > downX)
	{
		$("#gestureOutput").val("Swipe Right");
	}
	else if (upX == downX)
	{
		$("#gestureOutput").val("Mouse Up");
	}
});



$("#button1").click(function() { 
	$("#input1").val($("#input1").val() + "1");
});

$("#button2").click(function() { 
	$("#input1").val($("#input1").val() + "2");
});

$("#button3").click(function() { 
	$("#input1").val($("#input1").val() + "3");
});

$("#button4").click(function() { 
	$("#input1").val($("#input1").val() + "4");
});

$("#button5").click(function() { 
	$("#input1").val($("#input1").val() + "5");
});

$("#button6").click(function() { 
	$("#input1").val($("#input1").val() + "6");
});

$("#button7").click(function() { 
	$("#input1").val($("#input1").val() + "7");
});

$("#button8").click(function() { 
	$("#input1").val($("#input1").val() + "8");
});

$("#button9").click(function() { 
	$("#input1").val($("#input1").val() + "9");
});

$("#button0").click(function() { 
	$("#input1").val($("#input1").val() + "0");
});

$("#buttonStar").click(function() { 
	$("#input1").val($("#input1").val() + "*");
});

$("#buttonHash").click(function() { 
	$("#input1").val($("#input1").val() + "#");
});

$("#buttonClear").click(function() { 
	$("#input1").val("");
});

