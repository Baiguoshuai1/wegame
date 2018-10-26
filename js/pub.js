$("footer").children("div").each(function(){
    $(this).click(function(){
        $(this).add($(this).children("i")).attr("style","color:#b59b72")
        $(this).siblings().add($(this).siblings().children("i")).attr("style","color:#7c898b")
        location.href="index"+ $(this).attr("b")+".html";
    })
})