var openNav =function () {
   $("#mySidenav").addClass("open") ;
}
var closeNav=function () {
    $("#mySidenav").removeClass("open");
}   
$(document).ready(function(){
	$(".menu").click(function(){
		$(".button-collapse").sideNav();
	});
	$(".cross_icon").click(function () {
		$(".button-collapse").sideNav('hide');
	})
    // $("#modal_info").click(function(){
	$('#modal_info').modal();
    $('#modal_info_car').modal();
	$("#main").click(closeNav);
    $("#chat").click(openNav);
});