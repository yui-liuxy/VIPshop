<?php
header("content-type:text/html;charset=utf-8");
$userphone = $_POST['userphone'];
$password = $_POST['password'];

// echo ($userphone);
<<<<<<< HEAD
$con = mysqli_connect("127.0.0.1","root","root","weipinghui");
=======
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
>>>>>>> versin 0.0.4
mysqli_query($con,"set names utf8");
// 查询用户名是否被占用
$res = mysqli_query($con,"select * from user where userphone='$userphone'");
$row = mysqli_fetch_assoc($res);
if($row){ // 提取到数据了就表示用户名被占用了
    $arr = [
        "meta"=>[
            "status"=>2,
            "msg"=>"用户名被占用"
        ],
        "data"=>null
    ];
}else{
    // 没有被占用 - 可以注册
    // 将数据添加到数据库
    $res = mysqli_query($con,"insert user(userphone,password) values('$userphone','$password')");
    if($res){ // 添加成功
        $arr = [
            "meta"=>[
                "status"=>0,
                "msg"=>"注册成功"
            ],
            "data"=>null
        ];
    }else{
        $arr = [
            "meta"=>[
                "status"=>1,
                "msg"=>"注册失败"
            ],
            "data"=>null
        ];
    }
}

echo json_encode($arr);

mysqli_close($con);
?>









