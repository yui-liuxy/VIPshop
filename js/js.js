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
var json = [
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
        b:[
            "女鞋<span>/</span>男鞋<span>/</span>箱包",
            "女装<span>/</span>男装<span>/</span>内衣",
            "护肤彩妆<span>/</span>个护",
            "运动户外",
            "家电数码",
            "母婴童装",
            "手表配饰",
            "居家用品",
            "唯品生活",
            "医药健康"
        ],name:[
            "美裙衣橱 <span>></span>",
            "连衣裙 <span>></span>",
            "半身裙 <span>></span>",
            "套装裙 <span>></span>",
            "修身美裙 <span>></span>",
            "白色连衣裙 <span>></span>", 
            "连衣裙 <span>></span>",
            "半身裙 <span>></span>",
            "旗袍 <span>></span>",
            "半身裙 <span>></span>",
            "人气美衣 <span>></span>",
            "连衣裙 <span>></span>",
            "半身裙 <span>></span>",
            "特色上衣 <span>></span>",
        ],
        n:{
            "id":"防晒衣",
            "id":"防晒衣",
            "id":"短裤",
            "id":"牛仔裤",
            "id":"妈·妈装",
            "id":"大码女装",
            "id":"外套",
        }
    }
]
//动态插入导航数据
var ul = document.querySelector('.uli1');
for(var j = 0; j < json.length; j++){
    //将具体数据传入
    var strArr = json[j]["a"];  
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

    //创建大的uli侧边栏
    var ul3 = document.createElement('ul');
    ul3.className = 'li12'
    var li01 = document.querySelector('.liu2');
    li01.appendChild(ul3)
    // console.log(li01)
    // 将具体的数据传入
    var strBrr = json[j]["b"];
    for(index in strBrr){
        var arr1 = strBrr[index];
        for(var i =0;i<arr1.length;i++){
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.setAttribute("href","#");
            li.appendChild(a);
        }
        a.innerHTML = arr1
        ul3.appendChild(li)
        li.className = 'ul3'
    }
    
    //动态添加扩展侧边栏
    var leftImg = document.querySelector('.Introduction_leftTop');
    var div = document.createElement('div');
    div.className = 'right_box';
    var div1 = document.createElement('div');
    div1.className = 'left_box'
    div.appendChild(div1)
    var right_nav = document.querySelector('.right_nav');
    right_nav.appendChild(div)
    for(var j=0;j<json.length;j++){
        var str = json[j]["name"];
        for(index in str){
            var arr2 = str[index];
            // console.log(arr2)
            var b = document.createElement('b');
            b.innerHTML = arr2;
            div1.appendChild(b)
        }
    }
}












