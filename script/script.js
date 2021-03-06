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
        $(destext).animate({ fontWeight: 'bolder', fontSize: '30px' })

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devM).show(500);
        $(devtext).animate({ fontWeight: 'bolder', fontSize: '30px' })
    });
    $('.prod').on('click', function () {
        $('.prod').slideUp('slow');
        $(prodM).show(500);
        $(protext).animate({ fontWeight: 'bolder', fontSize: '30px' })
    });
    $(desM).on('click', function () {
        $('.des').slideDown();
        $(desM).hide(500);
        $(destext).animate({ fontWeight: 'normal', fontSize: '16px' })
    });
    $(devM).on('click', function () {
        $('.dev').slideDown();
        $(devM).hide(500);
        $(devtext).animate({ fontWeight: 'normal', fontSize: '16px' })
    });
    $(prodM).on('click', function () {
        $('.prod').slideDown();
        $(prodM).hide(500);
        $(protext).animate({ fontWeight: 'normal', fontSize: '16px' })
    })

    $('.portfolioImage').hover(function () {
        $('.pText', this).slideToggle('slow');
    }, function () {
        $('.pText', this).slideToggle('slow');
    });

    $("form#form").on('submit', function (event) {
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()) {
            alert("Greetings " + name + ", your message has been recieved");
        }
        else {
            alert("OOps! please enter the correct details");
        }



    });

})