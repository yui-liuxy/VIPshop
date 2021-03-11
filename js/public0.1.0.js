// 定义一个函数:rand
// 参数:最小整数，最大整数
// 返回:两个整数之间的一个随机整数
function rand(min,max){
    return parseInt(Math.random()*(max-min+1))+min;
}

// 返回一个随机的颜色16进制
function color(){
    var str = "#";
    for(var i=0;i<6;i++){
        str += rand(0,15).toString(16);
    }
    return str;
}

// 返回指定dom节点的attr样式值
function getStyle(dom,attr){
    if(window.getComputedStyle){
        // 说明有getComputedStyle方法
        return window.getComputedStyle(dom,null)[attr]
    }else{
        return dom.currentStyle[attr]
    }
}

// 根据id获取元素
function $id(id){
    return document.getElementById(id);
}

// 单属性缓动
function move(dom,attr,target,callback){
   
    /* 
        dom:要运动的节点
        attr:要运动的样式名
        target:运动到的目标值
        callback:运动完成的回调函数
    */           

    // 动画需要定时器
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        // 1 获取元素当前位置
        if(attr == "opacity"){
            var current = parseInt(getStyle(dom,attr)*100);
            console.log(current);
        }else{
            var current = parseInt(getStyle(dom,attr));
           
        }
        // 2 计算速度
        var speed = target-current>0?Math.ceil((target-current)/10):Math.floor((target-current)/10);
        // 3 计算下一个位置
        if(attr=='zIndex'){
            var next = target;//zIndex一步到位
        }else{
            var next = current+speed;
        }
        // 4 定位元素
        if(attr=="zIndex"){
            dom.style.zIndex = target;
        }else if(attr=="opacity"){
            dom.style.opacity = next/100;
            dom.style.filter = "alpha(opacity="+next+")";
        }else{
            dom.style[attr] = next+"px";
        }
        // 停止定时器
        if(next==target){
            clearInterval(dom.timer);
            typeof callback==='function'&&callback()
        }
        
    },20)

}


// 多属性缓动
function animate(dom,json,callback){
    clearInterval(dom.timer)
    // 要运动要定时器
    dom.timer = setInterval(function(){
        // 每20毫秒
        var flag = true;
        // json有几个属性，就要运动几次
        for(var attr in json){
            // 1 获取当前位置
            if(attr=="opacity"){
                // 透明度在获取当前值的是要乘100
                var current = parseInt(getStyle(dom,attr)*100);
            }else{
                var current = parseInt(getStyle(dom,attr));
            }
            // 2 计算速度
            var speed = json[attr]-current>0?Math.ceil((json[attr]-current)/10):Math.floor((json[attr]-current)/10)
            // 3 计算下一个位置
            if(attr=="zIndex"){
                var next = json[attr];
            }else{
                var next = current + speed;
            }
            // 4 定位元素
            if(attr=="zIndex"){
                dom.style[attr] = next;
            }else if(attr=="opacity"){
                dom.style.opacity = next/100;
                dom.style.filter = "alpha(opacity="+next+")";
            }else{
                dom.style[attr] = next+"px";
            }
            // 判断是否到达目标
            if(next!=json[attr]){
                flag = false;
            }
        }

        if(flag){
            clearInterval(dom.timer);
        }
    },20)
}

// 返回页面被卷曲的距离：垂直,水平
function scroll(){
    return {
        top:document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset,
        left:document.body.scrollLeft||document.documentElement.scrollLeft||window.pageXOffset
    }
}

// 返回节点距离页面的距离
function distance(dom){
    return {
        left:"",
        top:""
    }
}

// 计算节点距离页面的距离
function getDistance(dom){
    var distance = {
        left:0,
        top:0
    }
    while(true){
        distance.left = distance.left+dom.offsetLeft;
        distance.top = distance.top+dom.offsetTop
        dom = dom.offsetParent;
        if(dom.nodeName=="BODY"){ 
            return distance;
        }
    }
}

