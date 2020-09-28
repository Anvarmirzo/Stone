$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 400) {
            $('#top').fadeIn();
        }
        else {
            $('#top').fadeOut();
        }
    })

    $('#top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

    $('.nav-link').click(function (e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $('html').animate({
            scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('.navbar').innerHeight()
        }, 800)
    })
    $('.navbar-brand').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navbar').innerHeight()
        }, 800)
    })


    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        $('.nav-link').each(function () {
            var attr = $(this).attr('href');
            var position = $(attr).offset().top - 191;
            if (scroll >= position) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        })
    })
})





