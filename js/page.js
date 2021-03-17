function Page(classname,textInfo,pageInfo,show=function(){}){
    this.show = show
    // 获取到了准备放分页的盒子
    this.box = document.querySelector("."+classname);
    // 将传入进来的文本内容作为对象的一个属性，方便其他方法使用
    this.textInfo = textInfo;
    this.pageInfo =pageInfo
    // 设置参数的默认值
    this.defaultTextInfo = {
        first:'首页',
        previouse:'上一页',
        // 为了能多创建一个div，所以自己定义的参数中添加一个属性
        list:'',
        next:"下一页",
        last:'尾页'
    }
    this.defaultPageInfo = {
        total:1000,
        pageSize:10
    }
    // 定义当前页
    this.currentPage = 1
    // 如果用户传了，this.defaultTextInfo就应该是用户传进来的，如果用户不传，就使用自己定义的
    this.setDefault()
    // 计算总页数 - 作为属性
    this.totalPage = Math.ceil(this.defaultPageInfo.total/this.defaultPageInfo.pageSize)
    // 准备一个属性存中间放页码的div
    this.list = null;
    // 自己分页插件内部准备一个容器，用来存放自己的分页
    this.container = document.createElement("div");
    // 给这个容器设置样式
    this.setStyle(this.container,{
        width:'800px',
        height:'50px',
        border:"1px solid #000",
        margin:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    })
    // 将容器放在盒子中显示
    this.box.appendChild(this.container)
    // 创建首页、上一页 .....  盒子的一个方法
    this.createDiv()
    // 创建页码
    this.createPage()
    // 点击动起来
    this.click()
    // 处理禁用项
    this.setDisabled()
    // 添加文本框和按钮
    this.setInput()
    // 调用方法
    this.show(this.currentPage)
}
// 添加文本框和按钮
Page.prototype.setInput = function(){
    var input = document.createElement("input");
    input.type = 'number';
    this.setStyle(input,{
        width: '50px',
        height: '28px',
        border: '1px solid #000',
        margin: '5px',
        outline:"none"
    })
    this.container.appendChild(input)
    var button = document.createElement("button");
    button.innerText = 'GO';
    this.container.appendChild(button)
    this.setStyle(button,{
        height: '32px',
        border: '1px solid #000',
        margin: '5px',
        backgroundColor: 'skyblue',
        outline:"none"
    })
}
// 处理禁用项的方法
Page.prototype.setDisabled = function(){
    // 如果当前页是1，上一页和首页是禁用状态
    if(this.currentPage === 1){
        this.container.children[0].setAttribute('disabled','true')
        this.container.children[1].setAttribute('disabled','true')
        this.container.children[0].style.backgroundColor = '#aaa';
        this.container.children[1].style.backgroundColor = '#aaa';
    }else{
        this.container.children[0].setAttribute('disabled','false')
        this.container.children[1].setAttribute('disabled','false')
        this.container.children[0].style.backgroundColor = 'transparent';
        this.container.children[1].style.backgroundColor = 'transparent';
    }

    if(this.currentPage === this.totalPage){
        this.container.children[3].setAttribute('disabled','true')
        this.container.children[4].setAttribute('disabled','true')
        this.container.children[3].style.backgroundColor = '#aaa';
        this.container.children[4].style.backgroundColor = '#aaa';
    }else{
        this.container.children[3].setAttribute('disabled','false')
        this.container.children[4].setAttribute('disabled','false')
        this.container.children[3].style.backgroundColor = 'transparent';
        this.container.children[4].style.backgroundColor = 'transparent';
    }
}
// 点击动起来的方法
Page.prototype.click = function(){

    // 事件委托处理每个元素的点击
    this.container.onclick = e=>{
        // 事件对象
        var e = e || window.event;
        // 获取精准的事件源
        var target = e.target || e.srcElement;
        // 判断事件源是哪一个
        if(target.className === 'first' && target.getAttribute('disabled')!=='true'){
            this.currentPage = 1
            // 重新加载页码
            this.list.innerHTML = '';
            this.createPage()
            this.setDisabled()
            this.container.children[this.container.children.length-2].value = this.currentPage
            this.show(this.currentPage)
        }else if(target.className === 'previouse' && target.getAttribute('disabled')!=='true'){
            this.currentPage--
            this.list.innerHTML = '';
            this.createPage()
            this.setDisabled()
            this.container.children[this.container.children.length-2].value = this.currentPage
            this.show(this.currentPage)
        }else if(target.className === 'next' && target.getAttribute('disabled')!=='true'){
            this.currentPage++
            this.list.innerHTML = '';
            this.createPage()
            this.setDisabled()
            this.container.children[this.container.children.length-2].value = this.currentPage
            this.show(this.currentPage)
        }else if(target.className === 'last' && target.getAttribute('disabled')!=='true'){
            this.currentPage = this.totalPage
            // 重新加载页码
            this.list.innerHTML = '';
            this.createPage()
            this.setDisabled()
            this.container.children[this.container.children.length-2].value = this.currentPage
            this.show(this.currentPage)
        // }else if(target.nodeName){
        }else if(target.tagName === 'P' && this.currentPage!==target.innerText-0){
            this.currentPage = target.innerText-0
            this.list.innerHTML = '';
            this.createPage()
            this.setDisabled()
            this.container.children[this.container.children.length-2].value = this.currentPage
            this.show(this.currentPage)
        }else if(target.nodeName === 'BUTTON' && target.previousElementSibling.value-0!==this.currentPage){
            if(target.previousElementSibling.value-0>this.totalPage){
                target.previousElementSibling.value=this.totalPage
            }else if(target.previousElementSibling.value-0<1){
                target.previousElementSibling.value=1
            }
            this.currentPage = target.previousElementSibling.value-0
            this.list.innerHTML = '';
            this.createPage()
            this.setDisabled()
            this.container.children[this.container.children.length-2].value = this.currentPage
            this.show(this.currentPage)
        }
    }
}
// 创建页码
Page.prototype.createPage = function(){
    // 创建很多p标签，放到最中间的那个盒子中
    // 先判断总共多少页
    /*
    1.总页数<=9 将所有页码都展示出来
    2.总页数>9  根据当前页展示不同的页码
    */
   // 总页数 = Math.ceil(数据总数/每页显示的条数)
   // 需要数据总数，需要每页显示的数量 - 由调用插件的时候传进来
    if(this.totalPage<=9){
        // 创建所有页码
        this.createPageRepeat(1,this.totalPage)
        // for(var i=1;i<=this.totalPage;i++){
        //     var p = document.createElement("p");
        //     p.innerText = i;
        //     this.list.appendChild(p)
        //     this.setStyle(p,{
        //         margin:'5px',
        //         padding:"5px",
        //         border:"1px solid #000"
        //     })
        //     if(i === this.currentPage){
        //         p.style.backgroundColor = 'orange';
        //     }
        // }
    }else{
        // 总页数大于9
        /*
        1.当前页<5      1 2 3 4 5 ... 99 100
        2.当前页==5     1 2 3 4 5 6 7 ... 99 100
        3.当前页>5 && 当前页<96     1 2 ... 中间5个页码 ... 99 100
        4.当前页==96    1 2 ... 后面7个页码
        5.当前页>96     1 2 ... 后面5个页码
        */
        if(this.currentPage<5){
            this.createPageRepeat(1,5)
            // for(var i=1;i<=5;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            //     if(i === this.currentPage){
            //         p.style.backgroundColor = 'orange';
            //     }
            // }
            var span = document.createElement("span");
            span.innerText = '...';
            this.list.appendChild(span)
            this.createPageRepeat(this.totalPage-1,this.totalPage)
            // for(var i=this.totalPage-1;i<=this.totalPage;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            // }
        }else if(this.currentPage===5){
            this.createPageRepeat(1,7)
            // for(var i=1;i<=7;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            //     if(i === this.currentPage){
            //         p.style.backgroundColor = 'orange';
            //     }
            // }
            var span = document.createElement("span");
            span.innerText = '...';
            this.list.appendChild(span)
            this.createPageRepeat(this.totalPage-1,this.totalPage)
            // for(var i=this.totalPage-1;i<=this.totalPage;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            // }
        }else if(this.currentPage>5 && this.currentPage<this.totalPage-4){
            this.createPageRepeat(1,2)
            // for(var i=1;i<=2;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            // }
            
            var span = document.createElement("span");
            span.innerText = '...';
            this.list.appendChild(span)
            // 创建中间的5个页码
            // for(var i=this.currentPage-2;i<=this.currentPage+2;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            //     if(i === this.currentPage){
            //         p.style.backgroundColor = 'orange';
            //     }
            // }
            this.createPageRepeat(this.currentPage-2,this.currentPage+2)
            var span = document.createElement("span");
            span.innerText = '...';
            this.list.appendChild(span)
            this.createPageRepeat(this.totalPage-1,this.totalPage)
            // for(var i=this.totalPage-1;i<=this.totalPage;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            // }
        }else if(this.currentPage === this.totalPage-4){
            this.createPageRepeat(1,2)
            // for(var i=1;i<=2;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            // }
            
            var span = document.createElement("span");
            span.innerText = '...';
            this.list.appendChild(span)
            // 最后7个页码
            this.createPageRepeat(this.totalPage-6,this.totalPage)
            // for(var i=this.totalPage-6;i<=this.totalPage;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            //     if(this.currentPage === i){
            //         p.style.backgroundColor = 'orange';
            //     }
            // }
        }else if(this.currentPage>this.totalPage-4){
            this.createPageRepeat(1,2)
            // for(var i=1;i<=2;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            // }
            
            var span = document.createElement("span");
            span.innerText = '...';
            this.list.appendChild(span)
            // 最后7个页码
            this.createPageRepeat(this.totalPage-4,this.totalPage)
            // for(var i=this.totalPage-4;i<=this.totalPage;i++){
            //     var p = document.createElement("p");
            //     p.innerText = i;
            //     this.list.appendChild(p)
            //     this.setStyle(p,{
            //         margin:'5px',
            //         padding:"5px",
            //         border:"1px solid #000"
            //     })
            //     if(this.currentPage === i){
            //         p.style.backgroundColor = 'orange';
            //     }
            // }
        }
    }
}
// 提取创建页码时的相同代码封装
Page.prototype.createPageRepeat = function(start,end){
    for(var i=start;i<=end;i++){
        var p = document.createElement("p");
        p.innerText = i;
        this.list.appendChild(p)
        this.setStyle(p,{
            margin:'5px',
            padding:"5px",
            border:"1px solid #000"
        })
        if(this.currentPage === i){
            p.style.backgroundColor = 'orange';
        }
    }
}
// 设置默认参数
Page.prototype.setDefault = function(){
    // 遍历用户传进来的参数
    for(var attr in this.textInfo){
        // 将用户传进来的参数替换掉自己的参数
        this.defaultTextInfo[attr] = this.textInfo[attr]
    }
    for(var attr in this.pageInfo){
        // 将用户传进来的参数替换掉自己的参数
        this.defaultPageInfo[attr] = this.pageInfo[attr]
    }
}
// 创建首页、上一页 .....  盒子的方法
Page.prototype.createDiv = function(){
    // |<<   <<   >>    >>|   在创建div的时候，需要确定div中放什么内容，比如  首页  |<<  firstPage - 由调用插件的时候传入 - 所以插件还需要一个参数
    for(var attr in this.defaultTextInfo){
        var div = document.createElement("div");
        div.innerText = this.defaultTextInfo[attr]
        if(attr !== 'list'){
            this.setStyle(div,{
                margin:"5px",
                padding:"5px",
                border:'1px solid #000'
            })
            // 为了更好识别每个div - 就每个div添加类名
            div.className = attr;
        }else{
            this.list = div
            this.setStyle(div,{
                display:"flex",
                justifyContent:'center',
                alignItems:'center'
            })
        }
        
        this.container.appendChild(div)
    }
}
// 设置样式的方法
Page.prototype.setStyle = function(ele,styleObj){
    for(var attr in styleObj){
        ele.style[attr] = styleObj[attr]
    }
}