/**
 * Created by ÖÜÙ»Ù» on 2017/4/19.
 */

window.onload = function() {
    var bg = document.getElementsByClassName("flower");
    var bg1 = bg[0];
    var bg2 = bg[1];
    function snow() {
        var current = 0;
        var current1 = 0;
        var step = Math.random()*1+1;
        var step1 = Math.random()*3+3;
            setInterval(function () {
            current+=step;
            current1+=step1;
            bg1.style.backgroundPositionY=current+"px";
            bg2.style.backgroundPositionY=current1+"px";
        },20)
    }
    snow();


    var left= document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];
    var img = document.getElementById("img");
    var step = 0;
    var timer = null;
    left.onmousemove = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            step -= 2;
            if(step > -400){
                img.style.left = step + "px";
            }else{
                clearInterval(timer);
            }

        },16)
    }
    right.onmousemove = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            step += 2;
            if(step <=0){
                img.style.left = step + "px";
            }else{
                clearInterval(timer);
            }

        },16)
    }



}
$(function (){


    $(".side1 a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $(".side1 a.on").removeClass("on");
        $this.addClass("on");
        $("#container2 > div:eq(1) > div").removeClass("on");
        $("#container2 > div:eq(1) > div").eq($this.index()).addClass("on");
    });

    $(".side2 a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $(".side2 a.on").removeClass("on");
        $this.addClass("on");
        $("#container3 > div:eq(1) > div").removeClass("on");
        $("#container3 > div:eq(1) > div").eq($this.index()).addClass("on");
    });

    $(".side3 a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $(".side3 a.on").removeClass("on");
        $this.addClass("on");
        $("#container4 > div:eq(1) > div").removeClass("on");
        $("#container4 > div:eq(1) > div").eq($this.index()).addClass("on");
    });

    $(".side4 a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $(".side4 a.on").removeClass("on");
        $this.addClass("on");
        $("#container5 > div:eq(1) > div").removeClass("on");
        $("#container5 > div:eq(1) > div").eq($this.index()).addClass("on");
    });

    $("#container2 .zhujue a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $("#container2 .zhujue a.on").removeClass("on");
        $this.addClass("on");
        $("#container2 .zhujue > div:eq(1) > div").removeClass("on");
        $("#container2 .zhujue > div:eq(1) > div").eq($this.index()).addClass("on");
    });

    $("#container3 .scroll li").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $("#container3 .scroll li.on").removeClass("on");
        $this.addClass("on");
        $("#container3 .center2_c a").removeClass("on");
        $("#container3 .center2_c a").eq($this.index()).addClass("on");
    });

    $("#container4 .zhujue a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $("#container4 .zhujue a.on").removeClass("on");
        $this.addClass("on");
        $("#container4 .zhujue > div:eq(1) > div").removeClass("on");
        $("#container4 .zhujue > div:eq(1) > div").eq($this.index()).addClass("on");
    });

    $("#container5 .screen1 > div:eq(1) a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $("#container5 .screen1 > div:eq(1) a").removeClass("on");
        $this.addClass("on");
        $("#container5 .screen1 > div:eq(0) div").removeClass("on");
        $("#container5 .screen1 > div:eq(0) div").eq($this.index()).addClass("on");
    });

    $("#container5 .screen1 > div:eq(2) a").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $("#container5 .screen1 > div:eq(2) a").removeClass("on");
        $this.addClass("on");
        $("#container5 .screen1 > div:eq(0) div").removeClass("on");
        $("#container5 .screen1 > div:eq(0) div").eq($this.index()+3).addClass("on");
    });

    $("#icons li").on("click", function () {
        var $this = $(this);
        if($this.hasClass("on")){
            return;
        }
        $("#icons li").removeClass("on");
        $this.addClass("on");
    });
});
