//侧边栏
$('.uli1>li>a').hover(function(){
    $(this).next().stop().slideDown(300)
})
//当鼠标移入侧边栏时内容还显示移出时就消失
$('.liu2').hover(function(){
    $('.ul3').parent().stop().slideUp(300)
})

//JQ轮播图
var index = 0;
var timerId = null;
var flag = true
function move(){
    if(!flag){
        return false
    }
    flag = false
     index++;
     if(index===$('.bannerA ul li').length){
         index=0
     }
     $('.bannerA ul li').eq(index).addClass('active').siblings().removeClass('active').parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
    flag = true
}
$('a.rightBtn').click(move)
$('.leftBtn').click(function(){
     index--;
    if(index<0){
     index=$('.bannerA ul li').length-1
    }
    $('.bannerA ul li').eq(index).addClass('active').siblings().removeClass('active').parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
})
$('.bannerA li').hover(function(){
    if(!flag){
        return false
    }
    flag = false
    index=$(this).index()
    $('.bannerA ul li').eq(index).addClass('active').siblings().removeClass('active').parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
    flag = true
})
timerId = setInterval(move,2500)
$('.bannerA').hover(function(){
    clearInterval(timerId)
},function(){
     timerId = setInterval(move,2500)
})

// 选项卡
var btn0 = document.querySelector('.li1 .a1');
var btn = document.querySelector('.tab_top .s2');
var btn1 = document.querySelector('.tab_top .s3');
var btn2 = document.querySelector('.s_top .s2');
// console.log(btn1)
var dart = document.querySelector('.tab_centerrairies');
// console.log(dart)
var area = document.querySelector('.tab_bottomrairies');
// console.log(btn)
var city = document.querySelector('.city');
var icon = document.querySelector('.icon-caret-up');
var icon1 = document.querySelector('.icon-xiajiantou');
btn.onclick = function(){
    // console.log(1)
    dart.style.display = "block"
    area.style.display = "none"
}
btn1.onclick = function(){
    dart.style.display = "none"
    area.style.display = "block"
}
btn0.onclick = function(){
    city.style.display = "block"
    icon.style.display = "block";
    icon1.style.display = "none";
    btn0.style.backgroundColor = "#fff";
    btn0.style.zIndex = "9999"
    btn0.style.height = "31px"
    btn0.style.position = "absolute"
}
btn2.onclick = function(){
    city.style.display = "none"
    icon1.style.display = "block"
    icon.style.display = "none"
    btn0.style.backgroundColor = "#F5F5F5";
    btn0.style.height = "30px"
}
//给头部添加选项卡功能
 $('.tab_top span').click(function(){
    $(this)
        .addClass('s2')
        .siblings()
        .removeClass('s2')
})



    

