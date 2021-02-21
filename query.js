$(function(){
    $("#neuesSpiel").click(function(){
        $(".card").hide().fadeIn(2000);
    });
    $("#naechsterZug").click(function(){
       $(".card").hide().fadeIn(200);
    });
 });
 
 $("#neuesSpiel").hover(
    function() { //mouseover 
        $(this).css(background-color: red);
},
    function() { //mouseout
        $(this).removecss("highlight");
    }
 );