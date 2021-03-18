//判断用户是否登录
var userphone=tool.getCookie('remuserphone')
if(userphone){
     $('.head-login>span:first>a:first').html(userphone)
     $('.b').click(function(){
         
        var coindex=layer.confirm('你确定要退出吗',{
            btn:['仍要离开','我在想想']
        },function(){
            tool.removeCookie('remuserphone')
             tool.removeCookie('userphone')
             location.href="./loginout.html"
             layer.close(coindex)
            
        },function(){
            layer.msg('感谢留下',{
                icon:1,
                time:500
            })
        })
        return false
    })
}
else{
    layer.msg('请先登录',{
        icon:2,
        time:1000
    },function(){
        //  localStorage.setItem('url',location.href)
         location.href = "login.html"
    })
}





// 获取购物车数据并显示
var str = localStorage.getItem('cartData')

// 判断是否有数据
if(str){
    // 转成数组
    var arr = JSON.parse(str)
    // 筛选出属于当前用户的数据
    arr = arr.filter(item=>item.username === userphone)
    console.log(arr)
    // 判断是否筛选出当前用户的数据
    if(arr.length){
        // 显示数据
        console.log(arr);
        // 将购物车数据中的所有商品id组合一起发送到php去获取数据
        var ids = arr.map(item=>item.id).join(',')
        $.ajax({
            url:"php/cart.php",
            data:{ids},
            dataType:"json",
            success(res){
                var {data} = res;
                console.log(data);
                var str = '';
                for(var i=0;i<data.length;i++){
                    // data[i].id
                    var number = arr.find(item=>item.id === data[i].id).number
                    str += `
                        <tr>
                            <td><input type="checkbox" name="selectOne"></td>
                            <td><img src="${data[i].img}" width="50" height="50"></td>
                            <td>${data[i].name}</td>
                            <td class="price">单价：￥<span>${data[i].price}</span></td>
                            <td class="number" data-stock="${data[i].stock}">
                                <button class="btn btn-default reduce">-</button>
                                <input type="number" name="number" value="${number}">
                                <button class="btn btn-default add">+</button>
                            </td>
                            <td class="subtotal">小计：￥<span>${data[i].price * number}</span>元</td>
                            <td data-id="${data[i].id}"><button class="remove btn btn-danger">移出购物车</button></td>
                        </tr>
                    `
                }
                $('.b-table').html(str)
                // 全选功能
                selectAll()
                // 单选功能
                selectOne()
                // 数量加减功能
                addAndReduce()
                // 计算小计
                subtotal()
                // 计算总数量和总价
                total()
                // 移出购物车
                removeCart()
            }
        })
    }else{
        // layer.close(loadindex)
        // 没有当前用户的数据
        empty()
    }
}else{
    // layer.close(loadindex)
    empty()
}
// 显示空空如也
function empty(){
    $('.b-table').html(`
        <div class="empty">
            <h1>购物车空空如也!</h1>
            <p>想要快速获取数据，请移步列表页挑选商品！</p>
            <p><a class="btn " href="list.html" role="button">去列表页</a></p>
        </div>
    `)
}
// 移出购物车
function removeCart(){
    $('.remove').click(function(){
        var that = this
        layer.confirm('你确定狠心删除吗？',{
            btn:['狠心删除','不舍得']
        },function(){
            // 节点移出
            $(that).parent().parent().remove()
            // 移出本地存储
            var arr = JSON.parse(localStorage.getItem('cartData'))
            var id = $(that).parent().attr('data-id')
            var index = arr.findIndex(item=>item.id == id && item.username === userphone)
            arr.splice(index,1)
            localStorage.setItem('cartData',JSON.stringify(arr))
            layer.msg('删除成功',{
                icon:1,
                time:1500
            })
             total()
            // 判断购物车数据是否为空
            arr = JSON.parse(localStorage.getItem('cartData'))
            var data = arr.filter(item=>item.username === userphone)
            if(!data.length){
                empty()
            }
        },function(){
            layer.msg('谢谢你对这个商品的偏爱',{
                icon:1,
                time:1500
            })
        })
    })
}
// 计算总数量和总价
function total(){
    // 所有选中的
    var totalnum = 0
    var totalprice = 0
    $('[name="selectOne"]:checked').each((index,item)=>{
        totalnum += $(item).parent().siblings('.number').children('[name="number"]').val() - 0
        totalprice += $(item).parent().siblings('.subtotal').children('span').text() - 0
    })
    $('.count11').text(`${totalnum}件商品`)
    $('.shiji>span:last').text(totalprice)
}
// 计算小计
function subtotal(){
    $('.price').each((index,item)=>{
        var price = $(item).children('span').text() - 0;
        var number = $(item).next().children('[name="number"]').val() - 0;
        var sub = price * number;
        $(item).siblings('.subtotal').children('span').text(sub)
    })
}
// 数量加减功能
function addAndReduce(){
    $('.reduce').click(function(){
        var number = $(this).next().val()-0;
        number--;
        if(number<=1){
            number=1
        }
        $(this).next().val(number)
        var data = JSON.parse(localStorage.getItem('cartData'))
        var id = $(this).parent().siblings().last().attr('data-id')
        console.log()
        var currentData = data.find(item=>item.username === userphone && item.id == id)
        currentData.number = number;
        localStorage.setItem('cartData',JSON.stringify(data))
        subtotal()
        total()
    })

    $('.add').click(function(){
        var number = $(this).prev().val()-0;
        number++;
        if(number>=$(this).parent().attr('data-stock')){
            number = $(this).parent().attr('data-stock')-0
        }
        $(this).prev().val(number)
        var data = JSON.parse(localStorage.getItem('cartData'))
        var id = $(this).parent().siblings().last().attr('data-id')
        var currentData = data.find(item=>item.username === userphone && item.id == id)
        currentData.number = number;
        localStorage.setItem('cartData',JSON.stringify(data))
        subtotal()
        total()
    })
}
// 单选功能函数
function selectOne(){
    $('[name="selectOne"]').click(function(){
        // 判断是否所有单选都选中了
        // 将元素集合伪数组转为数组
        var arr = Array.prototype.slice.call($('[name="selectOne"]'))
        // 调用every方法
        var bool = arr.every(item=>item.checked)
        $('[name="selectAll"]').prop('checked',bool)
        total()
    })
}
// 全选功能函数
function selectAll(){
 $('[name="selectAll"]').click(function(){
        $('[name="selectOne"]').prop('checked',$(this).prop('checked'))
        $('[name="selectAll"]').prop('checked',$(this).prop('checked'))
        total()
    })
}









