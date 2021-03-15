var tool = Tool = (function(){
    class Tool{
        noconflict(bool){
            if(bool){
                return this
            }
        }

        rand(a,b){
            return Math.floor(Math.random()*(a-b))+b;
        }

        setCookie(key,value,seconds,path="/"){
            var date = new Date()
            date.setTime(date.getTime() - 8*3600*1000 + seconds*1000)
            document.cookie = `${key}=${value};expires=${date};path=${path}`
        }

        getCookie(key){
            var arr = document.cookie.split('; ');
            var length = arr.length;
            for(var i=0;i<length;i++){
                var brr = arr[i].split('=')
                if(brr[0] === key){
                    return brr[1]
                }
            }
        }
        removeCookie(key,path='/'){
            this.setCookie(key,null,-1,path)
        }
        
    }
    var tool;
    return (function(){
        if(!tool){
            tool = new Tool;
        }
        return tool
    })()
})()

