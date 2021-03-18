var tool = Tool = (function(){
    class Tool{
        noconflict(bool){
            if(bool){
                return this
            }
        }

        rand(a,b){
            return Math.floor(Math.random()*(a-b))+b;
        }

        setCookie(key,value,seconds,path="/"){
            var date = new Date()
            date.setTime(date.getTime() - 8*3600*1000 + seconds*1000)
            document.cookie = `${key}=${value};expires=${date};path=${path}`
        }

        getCookie(key){
            var arr = document.cookie.split('; ');
            var length = arr.length;
            for(var i=0;i<length;i++){
                var brr = arr[i].split('=')
                if(brr[0] === key){
                    return brr[1]
                }
            }
        }
        removeCookie(key,path='/'){
            this.setCookie(key,null,-1,path)
        }
        
    }
    var tool;
    return (function(){
        if(!tool){
            tool = new Tool;
        }
        return tool
    })()
})()



function changelogin(){
var username=tool.getCookie('remuserphone')

if(username){
    $('.loginname').remove()
    reName=$(`<a href="javascript:;" class="reName" >你好${username}</a>`)
    $('.nav_box >li:eq(0)').prepend(reName);
    $('.register').remove()
    reA=$(' <a href="javascript:;" class="reback" >退出登录</a>')
    $('.nav_box >li:eq(1)').prepend(reA);
    $('.cart').click(function(){
        location.href="./cart.html"
    })
    
   $('.shouping').click(function(){
      
        location.href="./cart.html"
    })
    
    $('.reback').click(function(){
        var coindex=layer.confirm('你确定要退出吗',{
            btn:['仍要离开','我在想想']
        },function(){
            tool.removeCookie('remuserphone')
             $('.reName').remove()
              $('.reback').remove()
            loginA=$(` <a href="./login.html" class="loginname">登录</a>`)
             $('.nav_box >li:eq(0)').prepend(loginA);
            registerA=$(`<a href="./register.html" class="register">注册</a>`)
             $('.nav_box >li:eq(1)').prepend(registerA);
             location.href="./index.html"
             layer.close(coindex)
            
        },function(){
            layer.msg('感谢留下',{
                icon:1,
                time:500
            })
        })
        return false
    })
    
}

}




function cartnumber(){
var userphone=tool.getCookie('remuserphone')
var str = localStorage.getItem('cartData')

if(str){
    var arr=JSON.parse(str)
    arr=arr.filter(item=>item.username==userphone)
   console.log(arr)
   var number=arr.reduce(function(a,b){
       return a+b.number
   },0)
   if(arr===[]){
       $('.shouping  .s2').html(0)
         console.log( $('.shouping  .s2'))
    }else{
console.log( $('.top-nav>ul>li:nth-child(2)>i:last'))        
$('.top-nav>ul>li:nth-child(2)>i:last').html(number)
         console.log(number)
 
         $('.shouping  .s2').html(number)
    }
}
}