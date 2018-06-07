$('#week1, #f-week1').click(function(){
	playSound();
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#main").load("pages/week1.html");
	$(this).addClass("active");
});
$('#week2, #f-week2').click(function(){
	playSound();
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week2.html");
	$(this).addClass("active");
});
$('#week3, #f-week3').click(function(){
	playSound();
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week3.html");
	$(this).addClass("active");
});
$('#week4, #f-week4').click(function(){
	playSound();
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week4.html");
	$(this).addClass("active");
});
$('#week5, #f-week5').click(function(){
	playSound();
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week5.html");
	$(this).addClass("active");
});
$('#week6, #f-week6').click(function(){
	playSound();
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week6.html");
	$(this).addClass("active");
});

function cl (a) {
	$(".nav-item .nav-link").removeClass("active");
	$("#home").load("pages/days/"+a+".html");
}

var sound = document.getElementById("audio");
sound.volume = 0.1;
function playSound() {
    
    sound.play();
}