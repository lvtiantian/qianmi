$("#banner").mouseover(function(){
    $("#mycarousel span").css('display','inline-block');
})
$("#banner").mouseout(function(){
    $("#mycarousel span").hide();
})
$(window).scroll( function() {
    if(window.scrollY>0){
        $("#header .header-top").addClass("active");
        $("#header .header-bottom").addClass("active");
        $("#header .header-bottom img").attr('src','img/logop.png');
        if(window.scrollY>=1468){
            num();
        };
    }else{
        $("#header .header-top").removeClass("active");
        $("#header .header-bottom").removeClass("active");
        $("#header .header-bottom img").attr('src','img/logo.png');
    }
} );
$("#main .container .row img").mouseover(function(){
    $(this).siblings('span').slideDown(300);
})
$("#main .container .row img").mouseout(function(){
    $(this).siblings('span').slideUp(300);
})
/*****数字增加函数*****/
function num(){
    var num=parseInt($("#main .pinzhi li:first-child span:first-child").html());
    if(num<93360){
        var timer=setInterval(function(){
            num+=48;
            $("#main .pinzhi li:first-child span:first-child").html(num);
            if(num>=93333){
                clearInterval(timer);
                timer=null;
            }
        },50);
        var num2=parseInt($("#main .pinzhi li:nth-child(2) span:first-child").html());
        var timer2=setInterval(function(){
            num2+=4;
            $("#main .pinzhi li:nth-child(2) span:first-child").html(num2);
            if(num2>=395){
                clearInterval(timer2);
                timer2=null;
            }
        },50);
    }
}
function customMoveLeft(){
    var left=parseFloat($("#main .slide ul").css("left"));
    var liwidth=$("#main .slide li").width();
    var liAwidth=$("#main .slide li.active").width();
    if(left>=-6*liwidth){
        $("#main .custom span.left").css("opacity","1");
        $("#main .slide ul").animate({
            left:(left-liwidth)+"px"
        },500);
        $("#main .slide li.active").animate({
            width:liwidth+"px",
            paddingTop:"15px"
        },500,function(){
            var index= $("#main .slide li.active").index("#main .slide li");
            $("#main .slide li.active").removeClass("active");
            $("#main .content div.active").removeClass("active");
            $("#main .content div:nth-child("+(index+2)+")").addClass("active");
        });
        $("#main .slide li.active").next().animate({
            width:liAwidth+"px",
            padding:"0"
        },500,function(){
            $(this).addClass('active');
        });
        var oleft=parseFloat($("#main .slide ul").css("left"));
        if(oleft==-6*liwidth){
            $("#main .custom span.right").css("opacity","0.2");
        }
    }
}
function customMoveRight(){
    var left=parseFloat($("#main .slide ul").css("left"));
    var liwidth=$("#main .slide li").width();
    var liAwidth=$("#main .slide li.active").width();
    if(left<=2*liwidth){
        $("#main .custom span.right").css("opacity","1");
        $("#main .slide ul").animate({
            left:(left+liwidth)+"px"
        },500);
        $("#main .slide li.active").animate({
            width:liwidth+"px",
            paddingTop:"15px"
        },500,function(){
            var index= $("#main .slide li.active").index("#main .slide li");
            $("#main .slide li.active").removeClass("active");
            $("#main .content div.active").removeClass("active");
            $("#main .content div:nth-child("+(index)+")").addClass("active");
        });
        $("#main .slide li.active").prev().animate({
            width:liAwidth+"px",
            padding:"0"
        },500,function(){
            $(this).addClass('active');
        });
        var oleft=parseFloat($("#main .slide ul").css("left"));
        if(oleft==2*liwidth){
            $("#main .custom span.left").css("opacity","0.2");
        }
    }
}
$("#main .custom span.right").click(function(){
    customMoveLeft();
})
$("#main .custom span.left").click(function(){
    customMoveRight();
})
screen();
function screen(){
    var liwidth=$("#main .slide").width()*13/100;
    var liAwidth=$("#main .slide").width()*22/100;
    $("#main .slide li").css("width",liwidth+"px");
    $("#main .slide li.active").css("width",liAwidth+"px");
}

var arr=[];
setInterval(function(){
    var iw=window.innerWidth;
    arr.push(iw);
    if(arr[arr.length-1]!==arr[arr.length-2]){
        screen();
        arr=[];
    }
},500);
$("#main .inline ul.show li").mouseover(function(e){
    var target= e.target;

    if(!$(this).hasClass('active')&&target.nodeName=="LI"){
        var len=$("#main .inline ul.show li.current").length;
        if(len==0){
            $("#main .inline ul.show li.active>div").children("div:nth-child(2)").hide();
            $("#main .inline ul.show li.active>p:last-child button").animate({
                opacity:"0"
            },500);
            $("#main .inline ul.show li.active").addClass("current").animate({
                width:"260px"
            },500,function(){
                $(this).removeClass('active');
                $(this).removeClass('current');
            })
            $(this).animate({
                width:"520px"
            },500,function(){
                $(this).addClass('active');
                $(this).children("div").children("div:nth-child(2)").show();
            })
            $(this).children("p:last-child").children("button").animate({
                opacity:'1'
            },500)
        }
    }
})


