$(function(){
    var winHeight = $(window).height();
    $(window).scroll(function(){
        if($(window).scrollTop()>winHeight){
            $(".back").fadeIn(300);
        }else{
            $(".back").fadeOut(300);
        }
    });
    $('.back').click(function(){
        $("html,body").animate({
            scrollTop:0
        },500);
    });
})