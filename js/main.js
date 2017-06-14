/**
 * Created by ��ٻٻ on 2017/4/19.
 */

//��װid
function $id(id){
    return document.getElementById(id);
}
//��װ��ȡ���Ժ�������
function getStyle(element,attr){
    if(window.getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
//��װ��������
function animate(element,obj){
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for(var attr in obj){
            //�ȷ�װzindex����
            if(attr == "zIndex"){
                //��Ϊ�㼶û�й�������ֱ�Ӹ�����ֵ
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
    //��ȡ�¼�����
    getEvent:function (e) {
        return e || window.event;
    },
    //��ȡclientX
    getClientX:function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {
        return this.getEvent(e).clientY;
    },
    //��ȡ�¼���clientX+window�ĺ�������ľ���
    getPageX:function (e) {
        return this.getClientX(e) + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
    },
    //��ȡ�¼���clientX+window����������ľ���
    getPageY:function (e) {
        return this.getClientY(e) + (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    },
//        ���ݵ���ֹ�¼�ð��
    stopPropagation:function(){
        var event = this.getEvent(e);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}
