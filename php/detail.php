<?php
header("content-type:text/html;charset=utf8");
$id = $_GET['id'];
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
$res = mysqli_query($con,"select * from goods where id=$id");
$row = mysqli_fetch_Assoc($res);
if($row){
    $arr = [
        "meta"=>[
            "status"=>0,
            "msg"=>"数据获取成功"
        ],
        "data"=>$row
    ];
}else{
    $arr = [
        "meta"=>[
            "status"=>1,
            "msg"=>"数据获取失败"
        ],
        "data"=>null
    ];
}
echo json_encode($arr);