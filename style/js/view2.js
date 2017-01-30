var openNav =function () {
   $("#mySidenav").addClass("open") ;
}
var closeNav=function () {
    $("#mySidenav").removeClass("open");
}  
var aparece =function () {
	 $("#location").removeClass("hiden");
} 
$(document).ready(function(){
	$(".menu").click(function(){
		$(".button-collapse").sideNav();
	});
	$(".cross_icon").click(function () {
		$(".button-collapse").sideNav('hide');
	})
	$("#move2").click(function(){
		 $('#move').modal();
		 aparece();
	})
    // $("#modal_info").click(function(){
	$('#modal_info').modal();
    $('#modal_info_car').modal();
    $('#modal_info_t').modal();
	$("#main").click(closeNav);
    $("#chat").click(openNav);
});