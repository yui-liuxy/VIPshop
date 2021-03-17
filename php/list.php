<?php
header("content-type:text/html;charset=utf8");
$cat = $_GET['cat'];
if($cat == 'all'){
    $where = '';
}else{
    $where = " where cat=$cat";
}

$sql = "select * from goods $where";
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
$res = mysqli_query($con,$sql);
$arr = [];
while($row = mysqli_fetch_assoc($res)){
    $arr[] = $row;
}
echo json_encode([
    "meta"=>[
        "status"=>0,
        "msg"=>"数据获取成功"
    ],
    "data"=>$arr
]);