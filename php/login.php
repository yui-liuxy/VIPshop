<?php
header("content-type:text/html;charset=utf8");
$userphone = $_POST['userphone'];
$password = $_POST['password'];
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
// 检查用户名是否存在
$res = mysqli_query($con,"select * from user where userphone='$userphone'");
$row = mysqli_fetch_assoc($res);
// 判断是否提取到数据
if($row){
    // 存在就可以检查密码
    if($row['password'] === $password){
        $arr = [
            "meta"=>[
                "status"=>1,
                "msg"=>"登陆成功"
            ],
            "data"=>null
        ];
    }else{
        $arr = [
            "meta"=>[
                "status"=>2,
                "msg"=>"密码或用户名错误"
            ],
            "data"=>null
        ];
    }
}else{
    // 用户名不存在
    $arr = [
        "meta"=>[
            "status"=>0,
            "msg"=>"用户名不存在"
        ],
        "data"=>null
    ];
}
echo json_encode($arr);