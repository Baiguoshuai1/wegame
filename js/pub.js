//导航的点击事件
function sli(){
    $(".s1-content").children("div").each(function(){
        $(this).click(function(){
            let numb=$(this).attr("num")
            move(numb);
            //页面滑动
            $(".swiper-wrapper").css({//"translate3d(-375px,0px,0px)",
                transform:function(){
                    let transX=numb*375*-1;
                    return "translate3d("+transX+"px,0px,0px)"    //拼接字符串
                },
                transitionDuration:"300ms"
            })
        })
    })
}
//滑动页面调用的函数
function move(activeIndex) {
    //alert(this.activeIndex);
    //当前字体变颜色
    $(".s1-content").children("div").eq(activeIndex)[0].style.color="#53a6a1"
    //其他字体变颜色
    $(".s1-content").children("div").eq(activeIndex).siblings().css({
        color:"#7e8b8d"
    })
    //底线滑动
    $(".footercolor").animate({
        left:57*activeIndex+125+"px"
    },200)
}









$("footer").children("div").each(function(){
    $(this).click(function(){
        $(this).add($(this).children("i")).attr("style","color:#b59b72")
        $(this).siblings().add($(this).siblings().children("i")).attr("style","color:#7c898b")
        location.href="index"+ $(this).attr("b")+".html";
    })
})