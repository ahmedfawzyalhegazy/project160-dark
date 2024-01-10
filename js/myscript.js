/*glopal $, alert, console*/

$(function(){

    'use strict';

    // menu for header for mobile screen
    $('header .container > .row > div:nth-of-type(1) i').click(function(){
        $("header .container > .row > div:nth-of-type(2) ul").slideToggle(500);
    });

    // header links to down
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#faq').offset().top
        },500);
    });

    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#comparison').offset().top
        },700);
    });

    $('.link4').click(function() {
        $('html, body').animate({
            scrollTop: $('#result').offset().top
        },1000);
    });

    $('.link5').click(function() {
        $('html, body').animate({
            scrollTop: $('#register').offset().top
        },1200);
    });


    
    //qusetion part
    $(".faq .container .row > div h5").click(function(){
        $(this).toggleClass('cssp');
        $(this).siblings("p").slideToggle(500);
        
    });

    // the button to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 2000);
    });
    
});