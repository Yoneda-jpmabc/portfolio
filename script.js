$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
});

$('.nav-item').on('click', function(){
    var tabW = $(window).width();
    var devW = 699;
    if (devW > tabW) {
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').fadeToggle(500);
    }
});

