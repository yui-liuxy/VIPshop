<?php
// header("content-type:text/html;charset=utf8");
$seValue = $_GET['seValues'];
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
$res = mysqli_query($con,"select * from goods where `name` like '%$seValue%'");
$arr = [];
$row = mysqli_fetch_all($res,MYSQLI_ASSOC);
$arr= $row;
echo json_encode([
    "meta"=>[
        "stauts"=>0,
        "msg"=>"数据获取成功"
    ],
    "data"=>$arr
]);