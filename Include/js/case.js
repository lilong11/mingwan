
        function over(){ 
            var x = document.getElementById("rows").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("over-texts").style.color="#fff";
             var x2 = document.getElementById("over-texts2").style.color="#fff";
             var x2 = document.getElementById("over-texts3").style.color="#fff";
             var x2 = document.getElementById("over-texts4").style.color="#fff"; 
        }
        function out(){ 
            var x = document.getElementById("rows").style.backgroundColor="#F1F1F1";
             var x2 = document.getElementById("over-texts").style.color="#000"; 
             var x2 = document.getElementById("over-texts2").style.color="#666666";
             var x2 = document.getElementById("over-texts3").style.color="#F2A613";
             var x2 = document.getElementById("over-texts4").style.color="#666666"; 
            
        } 

        function over1(){
            var x = document.getElementById("rows1").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("over1-texts").style.color="#fff";
             var x2 = document.getElementById("over1-texts2").style.color="#fff";
             var x2 = document.getElementById("over1-texts3").style.color="#fff";
             var x2 = document.getElementById("over1-texts4").style.color="#fff"; 
        }
        function out1(){
            var x = document.getElementById("rows1").style.backgroundColor="#F1F1F1";
             var x2 = document.getElementById("over1-texts").style.color="#000"; 
             var x2 = document.getElementById("over1-texts2").style.color="#666666";
             var x2 = document.getElementById("over1-texts3").style.color="#F2A613";
             var x2 = document.getElementById("over1-texts4").style.color="#666666"; 
        } 

        function over2(){
            var x = document.getElementById("rows2").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("over2-texts").style.color="#fff";
             var x2 = document.getElementById("over2-texts2").style.color="#fff";
             var x2 = document.getElementById("over2-texts3").style.color="#fff";
             var x2 = document.getElementById("over2-texts4").style.color="#fff"; 
        }
        function out2(){
            var x = document.getElementById("rows2").style.backgroundColor="#F1F1F1";
             var x2 = document.getElementById("over2-texts").style.color="#000"; 
             var x2 = document.getElementById("over2-texts2").style.color="#666666";
             var x2 = document.getElementById("over2-texts3").style.color="#F2A613";
             var x2 = document.getElementById("over2-texts4").style.color="#666666"; 
            
        } 





        function show(){ 
            var x = document.getElementById("show").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("show-texts").style.color="#fff";
             var x2 = document.getElementById("show-texts2").style.color="#fff";
             var x2 = document.getElementById("show-texts3").style.color="#fff";
             var x2 = document.getElementById("show-texts4").style.color="#fff"; 
        }
        function shows(){ 
            var x = document.getElementById("show").style.backgroundColor="#F1F1F1";
             var x2 = document.getElementById("show-texts").style.color="#000"; 
             var x2 = document.getElementById("show-texts2").style.color="#666666";
             var x2 = document.getElementById("show-texts3").style.color="#F2A613";
             var x2 = document.getElementById("show-texts4").style.color="#666666"; 
            
        } 

        function show1(){
            var x = document.getElementById("show1").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("show1-texts").style.color="#fff";
             var x2 = document.getElementById("show1-texts2").style.color="#fff";
             var x2 = document.getElementById("show1-texts3").style.color="#fff";
             var x2 = document.getElementById("show1-texts4").style.color="#fff"; 
        }
        function shows1(){
            var x = document.getElementById("show1").style.backgroundColor="#F1F1F1";
             var x2 = document.getElementById("show1-texts").style.color="#000"; 
             var x2 = document.getElementById("show1-texts2").style.color="#666666";
             var x2 = document.getElementById("show1-texts3").style.color="#F2A613";
             var x2 = document.getElementById("show1-texts4").style.color="#666666"; 
        } 

        function show2(){
            var x = document.getElementById("show2").style.backgroundColor="#F2A613";
             var x2 = document.getElementById("show2-texts").style.color="#fff";
             var x2 = document.getElementById("show2-texts2").style.color="#fff";
             var x2 = document.getElementById("show2-texts3").style.color="#fff";
             var x2 = document.getElementById("show2-texts4").style.color="#fff"; 
        }
        function shows2(){
            var x = document.getElementById("show2").style.backgroundColor="#F1F1F1";
             var x2 = document.getElementById("show2-texts").style.color="#000"; 
             var x2 = document.getElementById("show2-texts2").style.color="#666666";
             var x2 = document.getElementById("show2-texts3").style.color="#F2A613";
             var x2 = document.getElementById("show2-texts4").style.color="#666666"; 
            
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
 *  .
 */
 




// 装修流程

        function lc1over(){ 
            var x = document.getElementById("lc1").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts").style.color="#F2A613"; 
            var x3 = document.getElementById("SSS").src="Include/img/tubiao/lc1s.png";  
        }

        function lc1out(){
            var x = document.getElementById("lc-texts").style.color="#9B9B9B";
            var x = document.getElementById("lc1").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("SSS").src="Include/img/tubiao/lc1.png";   
        } 

        function lc2over(){ 
            var x = document.getElementById("lc2").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts2").style.color="#F2A613"; 
            var x3 = document.getElementById("SSS2").src="Include/img/tubiao/lc2s.png";  
        }
        
        function lc2out(){
            var x2 = document.getElementById("lc-texts2").style.color="#9B9B9B"; 
            var x = document.getElementById("lc2").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("SSS2").src="Include/img/tubiao/lc2.png";   
        } 
 
         function lc3over(){ 
            var x = document.getElementById("lc3").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts3").style.color="#F2A613"; 
            var x3 = document.getElementById("SSS3").src="Include/img/tubiao/lc3ss.png";  
        }
        
        function lc3out(){
            var x2 = document.getElementById("lc-texts3").style.color="#9B9B9B"; 
            var x = document.getElementById("lc3").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("SSS3").src="Include/img/tubiao/lc3.png";   
        } 
 
         function lc4over(){ 
            var x = document.getElementById("lc4").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts4").style.color="#F2A613"; 
            var x3 = document.getElementById("lc4-img").src="Include/img/tubiao/lc4s.png";  
        }
        
        function lc4out(){
            var x2 = document.getElementById("lc-texts4").style.color="#9B9B9B"; 
            var x = document.getElementById("lc4").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc4-img").src="Include/img/tubiao/lc4.png";   
        } 
  
         function lc5over(){ 
            var x = document.getElementById("lc5").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts5").style.color="#F2A613"; 
            var x3 = document.getElementById("lc5-img").src="Include/img/tubiao/lc5s.png";  
        }
        
        function lc5out(){
            var x2 = document.getElementById("lc-texts5").style.color="#9B9B9B"; 
            var x = document.getElementById("lc5").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc5-img").src="Include/img/tubiao/lc5.png";   
        } 
  
         function lc6over(){ 
            var x = document.getElementById("lc6").style.border="1px solid #F2A613";
            var x2 = document.getElementById("lc-texts6").style.color="#F2A613"; 
            var x3 = document.getElementById("lc6-img").src="Include/img/tubiao/lc6s.png";  
        }
        
        function lc6out(){
            var x2 = document.getElementById("lc-texts6").style.color="#9B9B9B"; 
            var x = document.getElementById("lc6").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc6-img").src="Include/img/tubiao/lc6.png";   
        } 
   
         function lc7over(){ 
            var x = document.getElementById("lc7").style.border="1px solid #F2A713";
            var x2 = document.getElementById("lc-texts7").style.color="#F2A713"; 
            var x3 = document.getElementById("lc7-img").src="Include/img/tubiao/lc7s.png";  
        }
        
        function lc7out(){
            var x2 = document.getElementById("lc-texts7").style.color="#9B9B9B"; 
            var x = document.getElementById("lc7").style.border="1px solid #9B9B9B";
            var x3 = document.getElementById("lc7-img").src="Include/img/tubiao/lc7.png";   
        } 

// 设计团队
    $(".box").superSlider({
        // prevBtn:     ".prev",//左按钮
        // nextBtn:     ".next",//右按钮
        listCont:    "#roll",//滚动列表外层
        scrollWhere: "prev",//自动滚动方向next
        delayTime:   2000,//自动轮播时间间隔
        speed:       400,//滚动速度
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




 // 分页开始
       $(function() {
        $("#pagination1").pagination({
          currentPage: 1,
          totalPage: 12,
          callback: function(current) {
            $("#current1").text(current)
          }
        });

        $("#pagination2").pagination({
          currentPage: 3,
          totalPage: 12,
          isShow: false,
          count: 6,
          prevPageText: "< 上一页",
          nextPageText: "下一页 >",
          callback: function(current) {
            $("#current2").text(current)
          }
        });

        $("#pagination3").pagination({
          currentPage: 4,
          totalPage: 16,
          isShow: true,
          count: 7,
          homePageText: "首页",
          endPageText: "尾页",
          prevPageText: "上一页",
          nextPageText: "下一页",
          callback: function(current) {
            $("#current3").text(current)
          }
        });

        $("#getPage").on("click", function() {
          var info = $("#pagination3").pagination("getPage");
          alert("当前页数：" + info.current + ",总页数：" + info.total);
        });

        $("#setPage").on("click", function() {
          $("#pagination3").pagination("setPage", 1, 10);
        });
      });


   // 分页结束
  

// 地图开始
  // 百度地图API功能
  function G(id) {
    return document.getElementById(id);
  }
  var map = new BMap.Map("l-map"); 
  map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
  map.enableContinuousZoom();     //启用地图惯性拖拽，默认禁用
  var local = new BMap.LocalSearch(map, {
    renderOptions:{map: map}
  });
  var msearch = document.getElementById("suggestId").value;
  local.search(msearch);  //百度地图关键字检索 默认加载一次
  var company = new Array(); 
  company[0] = "杭州市拱墅区沈半路198号杭州名万装饰";     //这里写入每个选项对应的说明文字
   

  function companyReveal() {  
    var companyindex = document.companyForm.companyPick.selectedIndex;//取得当前下拉菜单选定项目的序号
    helpmsg = company[companyindex];//根据序号取得当前选项的说明
    document.companyForm.companyField.value = helpmsg//将说明写进文框
    var msearch = document.getElementById("suggestId").value;
    local.search(msearch);  //百度地图关键字检索 触发加载
  } 
// 地图结束
 