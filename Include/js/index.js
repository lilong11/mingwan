 

 

        $(function(){

            //调用插件boxhovermodal,一个操作元素,一个参数

            //参数可以为空,默认为.box-hover-modal-m

            $(".box-hover-modal").boxhovermodal(".box-hover-modal-m");

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


// 友情链接
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

    // tabs_takes.init("tabs");友情链接
 