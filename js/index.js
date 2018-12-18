$(function(){
    $(".banner").height($(window).height());
    $(window).bind('resize',function(){
        $(".banner").height($(window).height());
    });
    $(window).scroll(function() {
        var top1 = $('.banner').offset().top;
        var gun = $(document).scrollTop();
        var top = top1-gun;
        if (top < 0) {
            $('header').addClass('fixed_top');
            $('header').removeClass('fixed_top2');
        }else{
            $('header').removeClass('fixed_top');
            $('header').addClass('fixed_top2');
        }
    }); 
});
