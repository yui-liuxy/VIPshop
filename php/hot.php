<?php
header("content-type:text/html;charset=utf8");
$id = $_GET['id'];
$con = mysqli_connect("127.0.0.1","lxy","xhcCDAajemXMndRE","lxy");
mysqli_query($con,"set names utf8");
mysqli_query($con,"update goods set readnum=readnum+1 where id=$id");