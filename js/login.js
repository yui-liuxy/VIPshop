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