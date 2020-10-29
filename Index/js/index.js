
        function over(){ 
            var x = document.getElementById("rows").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("over-texts").style.color="#fff";
             var x2 = document.getElementById("over-texts2").style.color="#fff";
             var x3 = document.getElementById("lc1-img").src="Index/img/tubiao/top2s.png";  
        }
        function out(){ 
            var x = document.getElementById("rows").style.backgroundColor="#fff";
             var x2 = document.getElementById("over-texts").style.color="#666666";
             var x2 = document.getElementById("over-texts2").style.color="#101010";
            var x = document.getElementById("lc1-img").src="Index/img/tubiao/top2.png";
            
        } 

        function over1(){

             var x2 = document.getElementById("over1-texts1").style.color="#fff";
             var x2 = document.getElementById("over1-texts2").style.color="#fff";
            var x = document.getElementById("rows2").style.backgroundColor="#F2A613";
             var x3 = document.getElementById("lc2-img").src="Index/img/tubiao/top3s.png";  
        }
        function out1(){
            // var x = document.getElementById("rows").innerHTML="鼠标不在上面";
            // var x = document.getElementById("rows").style.color="red";
            var x = document.getElementById("rows2").style.backgroundColor="#fff";
             var x2 = document.getElementById("over1-texts1").style.color="#666666";            
              var x2 = document.getElementById("over1-texts2").style.color="#101010";
               var x3 = document.getElementById("lc2-img").src="Index/img/tubiao/top3.png";  
        } 

        function over2(){
            // var x = document.getElementById("rows").innerHTML="鼠标在上面的样子";
            var x = document.getElementById("over2-texts2").style.color="#fff";
            var x = document.getElementById("over2-texts1").style.color="#fff";
            var x = document.getElementById("rows3").style.backgroundColor="#F2A613";
                         var x3 = document.getElementById("lc3-img").src="Index/img/tubiao/top1s.png";  
        }
        function out2(){
            // var x = document.getElementById("rows").innerHTML="鼠标不在上面";
            var x = document.getElementById("over2-texts2").style.color="#101010";
            var x = document.getElementById("over2-texts1").style.color="#666666";
            var x = document.getElementById("rows3").style.backgroundColor="#fff";
            var x3 = document.getElementById("lc3-img").src="Index/img/tubiao/top1.png";  
            
        } 


// 二级导航end

        $(function() {

            var wow = new WOW({

                boxClass: 'wow',

                animateClass: 'animated',

                offset: 0,

                live: true

            });

            wow.init();    



            var banner = new Swiper('#banner', {

                pagination: '.swiper-pagination',

                paginationClickable: true,

                autoplay: 3500,

                loop: true

            });



            $("#focusimg").focusimg({

                speed: 700,

                effect: 'fade', //fade为淡入 slide为滚动

                duration: 4500,

                hasBtnSwitch: true,

                hasIndicator: true

            });



            $("#scrollPic").tumble({

                speed: 300, 

                hover: true, 

                effect: "slide", 

                during: 4800,

                control: true, 

                autoplay: true,

            });

       });

       $(function() {

            var $tabitem = $('#tabbar').find('a');

            var $tabcons = $('#tabcon').find('.tabcon-scroll');

            updata($tabcons.eq(0));

            $tabcons.eq(0).addClass('run');

            $tabitem.bind('click', function() {

                var $this = $(this);

                var idx = $this.index();

                var $tabcon = $tabcons.eq(idx);

                $this.addClass('active').siblings('a').removeClass('active');

                $tabcon.addClass('active').siblings('.tabcon-scroll').removeClass('active');

                if (!$tabcon.hasClass('run')) {

                    updata($tabcon);

                    $tabcon.addClass('run');

                }

            });

            function updata(obj) {

                obj.tumble({

                    speed: 450, 

                    hover: true, 

                    effect: "slide", 

                    during: 4800,

                    control: true, 

                    autoplay: true, 

                    callback: function() {

                        $("img.lazy").lazyload({constainer: $('.tabcon-scroll ul'), effect:"fadeIn",threshold:8000});

                    }

                });

            }

       });




 


// 案例end








 

        $(function(){

            //调用插件boxhovermodal,一个操作元素,一个参数

            //参数可以为空,默认为.box-hover-modal-m

            $(".box-hover-modal").boxhovermodal(".box-hover-modal-m");

        });
 

 
/**
 * 友情链接
 *  .
 */
var tabs_takes={
    "init":function(containId){
        if(containId==null||containId==""){
            alert("id不能为空");
            return;
        }
        $("#"+containId+">ul>li").on("click",function(){
            tabs_takes.tabItemTakes(containId,this)
        });
        var liActiveNumber =  $("#"+containId+" ul li.selectActive").length;
        if(liActiveNumber>0){
            var liRel = $("#"+containId+">ul>li.selectActive").eq(0).attr("rel");
            $("#"+containId+">div").css("display","none");
            $("#"+containId+">div[rel='"+liRel+"']").css("display","block");
            var tabHrefRel = $("#"+containId+">ul>li.selectActive").eq(0).attr("relHref");
            if(tabHrefRel!=null&&tabHrefRel!=""){
                $("#"+containId+">div[rel='"+liRel+"']").load(tabHrefRel);
            }
        }else{
            var liRel = $("#"+containId+">ul>li").eq(0).attr("rel");
            $("#"+containId+">ul>li").eq(0).addClass("selectActive");
            $("#"+containId+">div").eq(0).css("display","block");
            var tabHrefRel = $("#"+containId+">ul>li").eq(0).attr("relHref");
            if(tabHrefRel!=null&&tabHrefRel!=""){
                $("#"+containId+">div[rel='"+liRel+"']").load(tabHrefRel);
            }
        }
    },
    "tabItemTakes":function(containId,thisObj){
        var tabRel = $(thisObj).attr("rel");
        $("#"+containId+">ul>li").removeClass("selectActive");
        $(thisObj).addClass("selectActive");
        $("#"+containId+">div").css("display","none");
        $("#"+containId+">div[rel='"+tabRel+"']").css("display","block");
        var tabHrefRel = $(thisObj).attr("relHref");
        if(tabHrefRel!=null&&tabHrefRel!=""){
            $("#"+containId+">div[rel='"+tabRel+"']").load(tabHrefRel);
        }
    }
} 


    tabs_takes.init("tabs");




// 装修流程

        function lc1over(){ 
            var x = document.getElementById("lc1").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts").style.color="#F2A613"; 
            var x3 = document.getElementById("SSS").src="Index/img/tubiao/lc1s.png";  
        }

        function lc1out(){
            var x = document.getElementById("lc-texts").style.color="#9B9B9B";
            var x = document.getElementById("lc1").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("SSS").src="Index/img/tubiao/lc1.png";   
        } 

        function lc2over(){ 
            var x = document.getElementById("lc2").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts2").style.color="#F2A613"; 
            var x3 = document.getElementById("SSS2").src="Index/img/tubiao/lc2s.png";  
        }
        
        function lc2out(){
            var x2 = document.getElementById("lc-texts2").style.color="#9B9B9B"; 
            var x = document.getElementById("lc2").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("SSS2").src="Index/img/tubiao/lc2.png";   
        } 
 
         function lc3over(){ 
            var x = document.getElementById("lc3").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts3").style.color="#F2A613"; 
            var x3 = document.getElementById("SSS3").src="Index/img/tubiao/lc3ss.png";  
        }
        
        function lc3out(){
            var x2 = document.getElementById("lc-texts3").style.color="#9B9B9B"; 
            var x = document.getElementById("lc3").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("SSS3").src="Index/img/tubiao/lc3.png";   
        } 
 
         function lc4over(){ 
            var x = document.getElementById("lc4").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts4").style.color="#F2A613"; 
            var x3 = document.getElementById("lc4-img").src="Index/img/tubiao/lc4s.png";  
        }
        
        function lc4out(){
            var x2 = document.getElementById("lc-texts4").style.color="#9B9B9B"; 
            var x = document.getElementById("lc4").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc4-img").src="Index/img/tubiao/lc4.png";   
        } 
  
         function lc5over(){ 
            var x = document.getElementById("lc5").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts5").style.color="#F2A613"; 
            var x3 = document.getElementById("lc5-img").src="Index/img/tubiao/lc5s.png";  
        }
        
        function lc5out(){
            var x2 = document.getElementById("lc-texts5").style.color="#9B9B9B"; 
            var x = document.getElementById("lc5").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc5-img").src="Index/img/tubiao/lc5.png";   
        } 
  
         function lc6over(){ 
            var x = document.getElementById("lc6").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts6").style.color="#F2A613"; 
            var x3 = document.getElementById("lc6-img").src="Index/img/tubiao/lc6s.png";  
        }
        
        function lc6out(){
            var x2 = document.getElementById("lc-texts6").style.color="#9B9B9B"; 
            var x = document.getElementById("lc6").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc6-img").src="Index/img/tubiao/lc6.png";   
        } 
   
         function lc7over(){ 
            var x = document.getElementById("lc7").style.border="1px solid #F2A713";
            var x2 = document.getElementById("lc-texts7").style.color="#F2A713"; 
            var x3 = document.getElementById("lc7-img").src="Index/img/tubiao/lc7s.png";  
        }
        
        function lc7out(){
            var x2 = document.getElementById("lc-texts7").style.color="#9B9B9B"; 
            var x = document.getElementById("lc7").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc7-img").src="Index/img/tubiao/lc7.png";   
        } 

// 设计团队
    $(".box").superSlider({
        // prevBtn:     ".prev",//左按钮
        // nextBtn:     ".next",//右按钮
        listCont:    "#roll",//滚动列表外层
        scrollWhere: "prev",//自动滚动方向next
        delayTime:   2000,//自动轮播时间间隔
        speed:       1000,//滚动速度
        amount:      1,//单次滚动数量
        showNum:     3,//显示数量
        autoPlay:    true//自动播放
    }); 



// 定位
      $(document).ready(function(){
    $("#select").hide();
    $("#text").focus(function(){
      $("#select").show();
    });
    $(".cities").click(function(){
      $("#text").val($(this).text());
      $("#select").hide();
    });
    $("#text").blur(function(){
      setTimeout(function(){
        $("#select").hide();
      }, 300);
    });
  });




 // 服务保障开始
 
 
var GlobalWidth = $(window).width();
 

$(document).ready(shoufengqin);
function shoufengqin() {
    $('#fengqin').find('li').on('mouseover', function () {
        if (GlobalWidth > 1200) {
            $(this).addClass("active").siblings("li").removeClass("active");
            var index = $(this).index();
            $('#fengqin').find('li').each(function (i, c) {
                if (i < index) {
                    $(c).css('left', -600 + i * 100 + 'px')
                } else {
                    $(c).css('left', i * 100 + 'px')
                }
            })
        } else {
            $(this).removeAttr("style");
            var index = $(this).index();
            $('#fengqin').find('li').each(function (i, c) {
                if (i < index + 1) {
                    $(c).find('.left').css({
                        'z-index': '1'
                    }).parent().siblings().find('.left').css({
                        'z-index': 'auto'
                    });
                    $(c).find('.right').addClass('active').parent().siblings().find('.right').removeClass('active');
                    $(c).find('.right').on('click', function(){
                        $('.left').addClass('preview');
                    }).parent().siblings().find('.left').removeClass('preview');
                } else {
                    $(c).find('.left').css({
                        'z-index': 'auto'
                    }).parent().siblings().find('.left').removeClass('preview');
                }
            })
        }
    })
}
 


 // 服务保障结束
 
 // 鼠标悬停开始
 ; (function ($) {
    $.fn.extend({
        "boxhovermodal": function (value) {
            //获取传过来的模态层
            var $childmodal = $(value) || $(".box-hover-modal-m");

            //鼠标滑动事件
            $(this).mouseenter(function () {
                //getMouseWay()返回值是0~3,分别对应左上右下
                var wayNum = getMouseWay(this);
                if (wayNum == 0) {
                    $(this).children($childmodal).css({
                        "display": "block",
                        "top": "0",
                        "left": -$(this).width()
                    }).animate({
                        "left": "0"
                    }, 200);
                }
                else if (wayNum == 1) {
                    $(this).children($childmodal).css({
                        "display": "block",
                        "top": -$(this).height(),
                        "left": '0'
                    }).animate({
                        "top": "0"
                    }, 200);
                }
                else if (wayNum == 2) {
                    $(this).children($childmodal).css({
                        "display": "block",
                        "top": "0",
                        "left": $(this).width()
                    }).animate({
                        "left": "0"
                    }, 200);
                }
                else if (wayNum == 3) {
                    $(this).children($childmodal).css({
                        "display": "block",
                        "top": $(this).height(),
                        "left": 0
                    }).animate({
                        "top": "0"
                    }, 200);
                }
            }).mouseleave(function () {
                var wayNum = getMouseWay(this);
                if (wayNum == 0) {
                    $(this).children($childmodal).animate({
                        "left": -$(this).width()
                    }, 200);
                }
                else if (wayNum == 1) {
                    $(this).children($childmodal).animate({
                        "top": -$(this).height()
                    }, 200);
                }
                else if (wayNum == 2) {
                    $(this).children($childmodal).animate({
                        "left": 2 * $(this).width()
                    }, 200);
                }
                else if (wayNum == 3) {
                    $(this).children($childmodal).animate({
                        "top": $(this).height()
                    }, 200);
                }
            });


            //获取鼠标移动到元素的时候距离最近的边
            //左上右下=>0,1,2,3
            function getMouseWay(nowEle) {
                //获取当前鼠标位置
                var mx = event.pageX;
                var my = event.pageY;

                //获取当前元素的上下左右
                var bl = $(nowEle).offset().left;
                var bt = $(nowEle).offset().top;
                var br = bl + parseInt($(nowEle).width());
                var bb = bt + parseInt($(nowEle).height());

                //计算出鼠标距离上下左右哪个最近
                var ml = Math.abs(mx - bl);
                var mt = Math.abs(my - bt);
                var mr = Math.abs(br - mx);
                var mb = Math.abs(bb - my);

                //把计算出的是个距离放到数组bm里面
                var bm = [ml, mt, mr, mb];

                //计算出最小的那个值,虽然我不懂apply但是挺管用的
                var bmMin = Math.min.apply(null, bm);

                //根据最小值遍历数组判断出是哪边最近
                var way;
                $.each(bm, function (index, content) {
                    if (content == bmMin) {
                        way = index;
                    }
                });
                return way;
            }


        }
    });
})(jQuery);




 // 鼠标悬停结束