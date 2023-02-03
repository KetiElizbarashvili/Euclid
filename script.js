


//NAVIGATION
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    
    
    
    
    
    //ONSCROLL FUNCTION
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {

    
    //CLIENT LOGO SLIDER
    $(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);

    function rotateClients() {
    if (rotating != false) {
    var $first = $('#clientlogo li:first');
    $first.animate({
    'margin-left': '-245px'
    }, 2000, function() {
    $first.remove().css({
    'margin-left': '0px'
    });
    $('#clientlogo li:last').after($first);
    });
    }
    }
    });
    
    
     