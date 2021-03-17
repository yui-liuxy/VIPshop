var loginScan = document.getElementsByClassName('logTabnavle')[0];
var loginAccount = document.getElementsByClassName('logTabnavri')[0];
var contain=document.getElementsByClassName('contain')[0];
var scanImg=document.getElementsByClassName('scan-img')[0];
var scan=document.getElementsByClassName('log-topScanbk')[0];
var contain=document.getElementsByClassName('contain')[0];
var containAccount=document.getElementsByClassName('containAccount-login')[0];

loginScan.onmouseenter = function () {
    loginScan.style.color = "crimson";
}
loginScan.onmouseleave = function () {
    loginScan.style.color = "#666";
}
loginAccount.onmouseenter = function () {
    loginAccount.style.color = "crimson";
}
loginAccount.onmouseleave = function () {
    loginAccount.style.color = "#666";
}
//鼠标移入contain,scan向右缓动left:-80px,scanImg透明度0-1
contain.onmouseenter=function(){
    move(scan,"left","-80")
    move(scanImg, "opacity","100")
}
contain.onmouseleave=function(){
    move(scan,"left","0")
    move(scanImg, "opacity","0")
}

//tab选项卡

loginScan.onclick=function(){
    contain.style.display = "block";
    loginScan.style.color = "red";
    containAccount.style.display = "none";
}
loginAccount.onclick=function(){
    containAccount.style.display = "block";
    contain.style.display = "none";

}



var userphone=0
$('[type="text"]').bind('input propertychange',function(){
  
     userphone=$('[type="text"]').val()
  
      
})

// 检查是否有记住的用户名 - 有就放到文本框中
var remuserphone = tool.getCookie('remuserphone')
if(remuserphone){
    $('input[type="text"]').val(remuserphone)
}
$('button').click(function(){
    if($('[type="text"]').val()===""){
        layer.msg('用户名不能为空',{
            inco:2,
            time:1000
        })
        return false
    }if($('[type="password"]').val()===""){
        layer.msg("密码不能为空",{
            inco:2,
            time:1000
        })
        return false;
    }
    var loadindex=layer.load(0,{
        shade:[1,"#000"] //白色透明背景
    })
    //禁用按钮
    $(this).prop("disabled",true)
    $.post(
        "./php/login.php",
        {
            userphone:$('[type="text"]').val(),
            password:$('input[name="password"]').val()
        },res=>{
            var {meta:{status,msg},data}=res;
            layer.close(loadindex)
            if(status===1){
                layer.msg(msg,{
                    inco:1,
                    time:1500
                },function(){
                    //添加cookie
                    tool.setCookie("userphone",$('[type="text"]').val(),7200)
                    tool.setCookie('remuserphone',$('[type="text"]').val(),3600*24*7)
                    location.href="index.html"
                })
            }else{
                layer.msg(msg,{
                    icon:2,
                    time:1500
                })
                $(this).prop('disabled',false)
                return false;
            }
        },"json"
    )
})



