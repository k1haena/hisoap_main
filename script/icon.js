$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.header').fadeIn();
    } else {
        $('.header').fadeOut();
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height < 100) {
        $('.w_header').show();
    } else {
        $('.w_header').hide();
    }
});
