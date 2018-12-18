$(function(){
    $(".banner").height($(window).height());
    $(window).bind('resize',function(){
        $(".banner").height($(window).height());
    });
    // $(".banner > *").top($(window).height()/2);
    // $(window).bind('resize',function(){
    //     $(".banner > *").top($(window).height()/2);
    // });

});