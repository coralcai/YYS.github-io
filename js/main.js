/**
 * Created by 周倩倩 on 2017/4/19.
 */

//封装id
function $id(id){
    return document.getElementById(id);
}
//封装获取属性函数兼容
function getStyle(element,attr){
    if(window.getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
//封装动画函数
function animate(element,obj){
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for(var attr in obj){
            //先封装zindex函数
            if(attr == "zIndex"){
                //因为层级没有过渡所以直接给最终值
                element.style.zIndex = obj[attr];
                var target = obj[attr];
                var current = target;
                if(current!=target){
                    flag = false;
                }
            }else if(attr == "opacity"){
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                current *= 100;
                target *= 100;
                var step = (target-current)/10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current/100;
                if(current!=target){
                    flag = false;
                }
            }else{
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                var step = (target-current)/10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
                if(current!=target){
                    flag = false;
                }
            }
        }
        if(flag){
            clearInterval(element.timer);
        }
    },20)
}



















var eventTool = {
    //获取事件对象
    getEvent:function (e) {
        return e || window.event;
    },
    //获取clientX
    getClientX:function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {
        return this.getEvent(e).clientY;
    },
    //获取事件的clientX+window的横向滚动的距离
    getPageX:function (e) {
        return this.getClientX(e) + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
    },
    //获取事件的clientX+window的纵向滚动的距离
    getPageY:function (e) {
        return this.getClientY(e) + (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    },
//        兼容的阻止事件冒泡
    stopPropagation:function(){
        var event = this.getEvent(e);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}
