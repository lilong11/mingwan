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