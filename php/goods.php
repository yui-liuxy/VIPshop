<?php
header("content-type:text/html;charset=utf8");
$pid = $_GET['pid'];
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
$res = mysqli_query($con,"select * from goods where cat=$pid");
$arr = [];
while($row = mysqli_fetch_assoc($res)){
    $arr[] = $row;
}
echo json_encode([
    "meta"=>[
        "stauts"=>0,
        "msg"=>"数据获取成功"
    ],
    "data"=>$arr
]);