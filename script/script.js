$(function () {
    let destext = $('#desTitle');
    let devtext = $('#devTitle');
    let protext = $('#prodTitle');
    let desM = $('#designMessage');
    let devM = $('#devMessage');
    let prodM = $('#prodMessage'); 
    $(desM).hide();
    $(devM).hide();
    $(prodM).hide();
    
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(desp).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });


})