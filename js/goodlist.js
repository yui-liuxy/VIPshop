var username=tool.getCookie('remuserphone')
console.log(username)





// 获取商品id



var arr = location.search.match(/id=(\d+)/)
if(!arr){
    layer.msg('非法访问',{
        icon:2,
        time:2000
    },function(){
        location.href = "list.html"
    })
}
// 如果有传值
var id = arr[1]
// 有了商品id，就给这条商品数据的readnum++
$.ajax({
    url:'php/hot.php',
    data:{id}
})











//获取数据
$.ajax({
    url:"./php/detail.php",
    data:{id},
    dataType:"json",
    success:res=>{
        // layer.close(loadindex)
        var {data} = res;
        console.log(res)
        $('.goodsImg>img').attr('src',data.img)
        $('.goodsList>ul>li>a>img').attr('src',data.img)
        console.log( data.name)
         $('.pib-title>p').html(`${data.name}`)
          $('.sp-relprice').html(`${data.price}`)
           $('.hasFinalPrice>span:first').html(`${data.price}`)
    }
})

var username=tool.getCookie('remuserphone')

// 加入购物车
$('.hasFinalPrice').click(function(){
    console.log(111111)
    // 判断用户是否登录
    if(!username){
        layer.msg('请先登录',{
            icon:2,
            time:1500
        },function(){
            // 跳转到登录页面
            // 跳转之前 - 先将当前页面的路径存到本地存储中
            localStorage.setItem('url',location.href)
            location.href = "login.html"
        })
        return false;
    }
    // 把当前数据获取到 - 存入本地存储
    // 购物车应该有哪些数据？
  
    
    // 判断本地存储是否有这条数据
    var str = localStorage.getItem('cartData')
    if(str){
        var arr = JSON.parse(str)
        // 判断里面是否有这个用户的这个数据
        console.log(arr);
        var data = arr.find(item=>item.username === username && item.id === id)
        if(data){
            // 找到这个数据了
            data.number++
            localStorage.setItem('cartData',JSON.stringify(arr))
        }else{
            var obj = {
                id,
                number:1,
                username
            }
            arr.push(obj)
            localStorage.setItem('cartData',JSON.stringify(arr))
        }
    }else{
        // 购物车中没有数据
        var obj = {
            id,
            number:1,
            username
        }
        var arr = [];
        arr.push(obj)
        localStorage.setItem('cartData',JSON.stringify(arr))
    }
    cartnumber();
    layer.msg('购物车添加成功，请移步购物车结算',{
        icon:1,
        time:1500
    })
    
    return false;
})





function elgan(){
    console.log($('.goodsList ul li'))
    $('.goodsList ul li').eq(0).addClass('active')
    console.log( $('.goodsList ul li').eq(0))
    $('.goodsList ul li').click(function(){
        //给自己加红色边框给兄弟门的边框去掉
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.goodsList ul li img').click(function(){
        //点击获取到当前小图的src属性
        var path = $(this).attr('src')
        // console.log(path);
        $('.goodsImg>img').attr('src',path);
    })
    //鼠标移入中间盒子
    $('.goodsImg').hover(function(){
        $('.goodsImg .shade').show();
        $(this).mousemove(e=>{
            var x = e.pageX;
            var y = e.pageY;
            var l = x - $('.shade').width()/2
            var t = y - $('.shade').height()/10
            if(l<$('.goodsImg').offset().left){
                l=$('.goodsImg>').offset().left
            }
            if(l>$('.goodsImg').offset().left + $('.goodsImg').width() - $('.shade').width()){
                l=$('.goodsImg').offset().left + $('.goodsImg').width() - $('.shade').width()
            }
            if(t>$('.goodsImg').offset().top + $('.goodsImg').height() - $('.shade').height()){
                t=$('.goodsImg').offset().top + $('.goodsImg').height() - $('.shade').height()
            }
            $('.goodsImg .shade').offset({
                left:l,
                top:t
            })
            var bigLeft = $('.shade').position().left / $('.goodsImg').width() * $('.goodsImg').width()
            // console.log(bigLeft)
            var bigTop = $('.shade').position().top / $('.goodsImg').height() * $('.goodsImg').height()
            $('.goodsImg>img').css({
                left:-bigLeft + "px",
                top:-bigTop + "px",
                width:920 +"px",
                height:1220 + "px"
            })

        })
    },function(){
        $('.goodsImg .shade').hide();
        $('.goodsImg>img').css({
                width:420 +"px",
                height:420 + "px",
                left:0 + "px",
                right:0 + "px",
                top:0 + "px",
                bottom:0 + "px"
        })
    })
}
elgan()











