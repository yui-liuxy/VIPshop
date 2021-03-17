<?php
header("content-type:text/html;charset=utf8");
$userphone = $_POST['userphone'];
$goodsid = $_POST['goodsid'];
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
// 查询数据库中是否具有当前的数据
$res = mysqli_query($con,"select * from history where userphone='$userphone' and goodsid=$goodsid");
$row = mysqli_fetch_assoc($res);
if($row){
    // 存在就删除
    mysqli_query($con,"delete from history where id=".$row['id']);
}
// 不存在直接新增
mysqli_query($con,"insert history(userphone,goodsid) values('$userphone',$goodsid)");
