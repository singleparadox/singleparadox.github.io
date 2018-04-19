$('#week1').click(function(){
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#main").load("pages/week1.html");
	$(this).addClass("active");
});
$('#week2').click(function(){
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week2.html");
	$(this).addClass("active");
});
$('#week3').click(function(){
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week3.html");
	$(this).addClass("active");
});
$('#week4').click(function(){
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week4.html");
	$(this).addClass("active");
});
$('#week5').click(function(){
	$(".nav-link").removeClass("active");
	$("#main").removeClass("bg");
	$("#nav-item a").removeClass("active");
	$("#main").load("pages/week5.html");
	$(this).addClass("active");
});

function cl (a) {
	$(".nav-item .nav-link").removeClass("active");
	$("#home").load("pages/days/"+a+".html");
}