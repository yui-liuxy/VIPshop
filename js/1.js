var statusA = [
    {"list":[{"name":"北京市","id":"101101"},
    {"name":"天津市","id":"101102"},
    {"name":"河北省","id":"101103"},
    {"name":"山西省","id":"101104"},
    {"name":"内蒙古自治区","id":"101105"},
    {"name":"辽宁省","id":"102101"},
    {"name":"吉林省","id":"102102"},
    {"name":"黑龙江省","id":"102103"},
    {"name":"上海市","id":"103101"},
    {"name":"江苏省","id":"103102"},
    {"name":"浙江省","id":"103103"},
    {"name":"安徽省","id":"103104"},
    {"name":"福建省","id":"103105"},
    {"name":"江西省","id":"103106"},
    {"name":"山东省","id":"103107"},
    {"name":"河南省","id":"104101"},
    {"name":"湖北省","id":"104102"},
    {"name":"湖南省","id":"104103"},
    {"name":"广东省","id":"104104"},
    {"name":"广西壮族自治区","id":"104105"},
    {"name":"海南省","id":"104106"},
    {"name":"重庆市","id":"105100"},
    {"name":"四川省","id":"105101"},
    {"name":"贵州省","id":"105102"},
    {"name":"云南省","id":"105103"},
    {"name":"西藏自治区","id":"105104"},
    {"name":"陕西省","id":"106101"},
    {"name":"甘肃省","id":"106102"},
    {"name":"青海省","id":"106103"},
    {"name":"宁夏回族自治区","id":"106104"},
    {"name":"新疆维吾尔自治区","id":"106105"}],
    "info":{"big_money":"","code":"101","transport_time":"","is_big":"","get_piece_freight":"","is_receive_change":"","saleSite":"VIP_NH","is_cod":"","is_service":"","is_pos":"","more_carrier":"","is_ems":"","country_short_code":"CN","parent_code":"","is_children_support_air_embargo":"","state":"1","address_level":"0","carrier_name":"","get_piece_service_level":"","cod_fee":"","delivery":"","is_app":"","receive_onsite_flag":"","has_children":"","weekend_delivery":"","area_type":"","warehouse":"VIP_NH","country_code":"101","is_directly":"","postage":"","full_name":"","post_code":"","is_support_air_embargo":"","name":"中国","add_time":""}}];


// 动态插入城市信息选项卡
var Prairies = document.querySelector('.tab_centerrairies');//获取整个大盒子
//遍历并渲染数据
// console.log(statusA)
for(var j=0;j<statusA.length;j++){
    var strArr = statusA[j]["list"];
    // console.log(strArr)
    var str = [];
    for(index in strArr){
        var arr = strArr[index]["name"];
        var arrA = strArr[index]["id"];
        if(arrA=="104105"){
            a.className = 'a1 Canton'
        }
        // console.log(arr)
        for(var i=0;i<=arr.length;i++){
            var li = document.createElement('li')
            var a = document.createElement('a');
            a.setAttribute("href","#");
            // console.log(a)
            li.appendChild(a)
            // console.log(li)
            a.className = 'a1'

        }
        a.innerHTML = arr
        // console.log(li)
        Prairies.appendChild(li)
    }
}
var ura = [
    {"list":[ {
        "name": "广州市",
        "id": "104104101"
    }, {
        "name": "韶关市",
        "id": "104104102"
    }, {
        "name": "深圳市",
        "id": "104104103"
    }, {
        "name": "珠海市",
        "id": "104104104"
    }, {
        "name": "汕头市",
        "id": "104104105"
    }, {
        "name": "佛山市",
        "id": "104104106"
    }, {
        "name": "江门市",
        "id": "104104107"
    }, {
        "name": "湛江市",
        "id": "104104108"
    }, {
        "name": "茂名市",
        "id": "104104109"
    }, {
        "name": "肇庆市",
        "id": "104104112"
    }, {
        "name": "惠州市",
        "id": "104104113"
    }, {
        "name": "梅州市",
        "id": "104104114"
    }, {
        "name": "汕尾市",
        "id": "104104115"
    }, {
        "name": "河源市",
        "id": "104104116"
    }, {
        "name": "阳江市",
        "id": "104104117"
    }, {
        "name": "清远市",
        "id": "104104118"
    }, {
        "name": "东莞市",
        "id": "104104119"
    }, {
        "name": "中山市",
        "id": "104104120"
    }, {
        "name": "潮州市",
        "id": "104104151"
    }, {
        "name": "揭阳市",
        "id": "104104152"
    }, {
        "name": "云浮市",
        "id": "104104153"
    }]},
   
]
// 动态插入城市信息选项卡
var city = document.querySelector('.tab_bottomrairies');//获取整个大盒子
//遍历并获取相应数据
for(var i=0;i<ura.length;i++){
    var strArr = ura[i]["list"];
    var str = [];
    for(index in strArr){
        var arr = strArr[index]["name"];
        var arrA = strArr[index]["id"];
        if(arrA=="104104104"){
            a.className = 'a1 Deity'
        }
        // console.log(arr)
        for(var i=0;i<=arr.length;i++){
            var li = document.createElement('li')
            var a = document.createElement('a');
            a.setAttribute("href","#");
            // console.log(a)
            li.appendChild(a)
            // console.log(li)
            a.className = 'a1'

        }
        a.innerHTML = arr
        // console.log(li)
        city.appendChild(li)
    }
}
//遍历并渲染数据
var json1 = [
    {
        a:[
            '商品分类',
            '推荐',
            '3折疯抢',
            '唯品快抢',
            '唯品奥莱',
            '品牌清仓',
            '春季焕新',
            '女装',
            '美妆',
            '运动',
            '鞋包',
            '详情',
        ],
    }
]
//动态插入导航数据
var ul = document.querySelector('.uli1');
for(var j = 0; j < json1.length; j++){
    //将具体数据传入
    var strArr = json1[j]["a"];  
    // console.log(strArr)
    var str = [];
    for(index in strArr){
        var arr = strArr[index]
        for(var i=0;i<arr.length;i++){
            var li = document.createElement('li');
            var span = document.createElement('span');
            var a = document.createElement('a');
            a.setAttribute("href","./list.html");
            li.className = 'liu1';
            if(index == strArr.length-1){
                a.className = 'a2'
                span.className = 'iconfont icon-xiajiantou1'
                li.className = 'liu9'
            }
            //拿到对应的li值
            if(index==strArr.length-1-11){
                li.className = 'liu2'
            }
        }
        a.innerHTML = arr;
        ul.appendChild(li);
        a.appendChild(span);
        li.appendChild(a);
        // console.log(li);
    }
}
   
$('.shouping').click(function(){
      
        location.href="./loginout.html"
    })
    








 changelogin();  

$.ajax({
    url:"./php/index.php",
    dataType:'json',
  
}).then(res=>{
    var {data}=res;
    var firstCat = data.filter(item=>item.pid==0);
    handlerData(data,firstCat)
    var html=render(firstCat)
    document.querySelector('.liu2>ul').innerHTML=html;
    effects()
    return $.ajax({
        url:"php/goods.php",
        data:{pid:1191},
        data:'json',
        
    }).then(res=>{
        var {data}=res;
        str="";
         data.forEach(item=>{
         str += `
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                    <img src="${item.img}" width="100%" height="200">
                    <div class="caption">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <p><a href="detail.html?id=${item.id}" class="btn btn-primary" role="button">立即购买</a></p>
                    </div>
                </div>
            </div>`
    })
    
})






//鼠标移入移初特效
function effects(){
       var timer1;
    $('.liu2').mouseenter(function(){
        $('.liu2>ul').stop().slideDown()
    })

    $('.liu2').mouseleave(function(){
        $('.liu2>ul').stop().slideUp()
    })

    $('.liu2>ul').mouseenter(function(){
        $(this).stop().show()
    })

    $('.liu2>ul').mouseleave(function(){
        timer1 = setTimeout(function(){
            $(this).stop().slideUp()
        },500)
        
    })

    $('.liu2>ul>li').mouseenter(function(){
        $(this).children('ul').stop().show().parent().siblings().children('ul').stop().hide()
    })
    $('.liu2>ul>li ul').mouseenter(function(){
        clearInterval(timer1)
        $(this).stop().show()
    })
    $('.liu2>ul>li ul').mouseleave(function(){
        $(this).stop().hide()
        $('..liu2>ul').stop().slideUp()
    })
}
//递归熏染页面
function render(firstCat){
    var str="";
    for(var i=0;i<firstCat.length;i++){
        str+='<li><a href="list.html?cat='+firstCat[i].id+'">'+firstCat[i].name+'</a>'
        if(firstCat[i].children){
            str+='<ul>'
            str+=render(firstCat[i].children)
            st+='</ul>'
        }
        str+='</li>'
    }
    return str
}








// 将所有数据做成层级的数据 - 带children
function handlerData(data,firstCat){
    // 根据一级分类，找出所有层级的分类
    for(var i=0;i<firstCat.length;i++){
        var cat = data.filter(item=>item.pid == firstCat[i].id)
        if(cat.length){
            firstCat[i].children = cat
            handlerData(data,firstCat[i].children)
        }
    }
}



