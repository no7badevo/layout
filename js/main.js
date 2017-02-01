$(document).ready(function() {
   $('.header-menu').click(function() {
      $('.main-nav').slideToggle();
   });
    
   $("#anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#second-section").offset().  top     }, 2000);
        });
    
    $("#second-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#second-section").offset().  top     }, 2000);
        });
    
     $("#third-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#third-section").offset().  top     }, 2000);
        });
    
     $("#fourth-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#fourth-section").offset().  top     }, 2000);
        });
    
     $("#fifth-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#fifth-section").offset().  top     }, 2000);
        });
});
