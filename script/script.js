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
        $(desM).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devM).show(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.prod').on('click', function () {
        $('.prod').slideUp('slow');
        $(prodM).show(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });


})