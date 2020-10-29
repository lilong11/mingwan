;(function($, undefined) {
    $.fn.tumble = function(settings) {
        if (!this.length) return false;
        return this.each(function() {
            $element = $(this);
            if ($.type(settings) !== "string") {
                ins = new Tumble($element, settings);
                ins.start();
            }
        });
    };
    var Tumble = function($element, settings) { // 构造函数创建对象
        var the = this;
        the.options = $.extend({}, the.options, settings);
        the.obj = { elem: $element };
        the.nums = 0;
        the.width = 0;
        the.index = 0;
        the.count = 0;
        the.timer = null;
    };
    Tumble.prototype.options = { // 参数列表
        speed: 600,     // 滚动项的内边距 默认为0，表示没有
        during: 3600,   //间隔时间
        hover: true,    //鼠标移入是否停止滚动stop/move
        effect: "iRoll",//默认效果
        control: true,  //是否有切换按钮
        autoplay: true, //是否自动播放
        callback: function() {}
    };
    Tumble.prototype.start = function() {
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        the.getObject();
        if (the.count <= the.nums) {
            the.autoPlay();
            ops.callback();
            if (ops.effect === 'slide') {
                obj.prev && obj.prev.bind('click', function() {
                    the.slidePrev();
                });
                obj.next && obj.next.bind('click', function() {
                    the.slideNext();
                });
            }
            if (ops.hover === true) { //鼠标悬浮状态
                obj.elem.hover(function() {
                    clearInterval(the.timer);
                }, function() {
                    the.autoPlay();
                })
            }
        }
    };
    Tumble.prototype.getObject = function() { //元素获取、创建和复制
        var nums = 0;
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        obj.view = obj.elem.find('.view');
        obj.list = obj.elem.find('.list');
        obj.item = obj.elem.find('.item');
        the.nums = obj.item.length;
        the.count = Math.ceil(obj.view.outerWidth() / obj.item.outerWidth());
        if (the.count > the.nums) { return false; }
        if (true === ops.control) { //创建左右切换按钮
            obj.prev = $('<a href="javascript:void(0);" class="btn-control prev">&lt;</a>').appendTo(obj.elem);
            obj.next = $('<a href="javascript:void(0);" class="btn-control next">&gt;</a>').appendTo(obj.elem);
        }
        for (var j = 0; j < the.count; j++) { //复制元素
        	var curItem = obj.item.eq(j);
        	var endItem = obj.item.eq(the.nums - 1 - j);
        	curItem.clone().addClass('clone').appendTo(obj.list);
        	endItem.clone().addClass('clone').prependTo(obj.list);
        }
        the.setSize();
    };
    Tumble.prototype.setSize = function() {
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        var len = obj.list.children().length;
        var space = parseInt(obj.item.css('padding-left'));
        var vWidth = obj.view.outerWidth();
        var vHeiht = obj.item.outerHeight();
        the.width = vWidth / the.count;
        var iWidth = the.width - 2 * space;
        obj.list.children().width(iWidth);
        obj.list.width(the.width * len).height(vHeiht).css({
            left: -the.count * the.width
        });
        obj.view.height(vHeiht);
    };
    Tumble.prototype.effectRoll = function() { //滚动
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        var sLeft = obj.view.scrollLeft();
        var dWidth = the.nums * the.width;
        if (sLeft <= dWidth) {
        	sLeft = sLeft + 1;
        	obj.view.stop(true, false).scrollLeft(sLeft);
        } else {
            obj.view.stop(true, false).scrollLeft(0);
        }
    };
    Tumble.prototype.slideNext = function() { //向右
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        if (!obj.list.is(":animated")) {
            if (the.index < the.nums) {
                the.index++;
                obj.list.animate({ left : '-=' +the.width }, ops.speed);
            } else {
                obj.list.css({ left: -the.width * the.count }).animate({
                    left : '-=' +the.width
                }, ops.speed);
                the.index = 1;
            }
        }
    };
    Tumble.prototype.slidePrev = function() { // 向左
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        if (!obj.list.is(":animated")) {
            if (the.index > 0) {
                obj.list.animate({ left : '+=' +the.width }, ops.speed);
                the.index--;
            } else {
                obj.list.css({ left: -the.width * (the.count + the.nums)}).animate({
                    left : '+=' +the.width
                }, ops.speed);
                the.index = the.nums-1;
            }
        }
    }; 
    Tumble.prototype.autoPlay = function() { //自动播放
        var the = this;
        var obj = the.obj;
        var ops = the.options;
        if (true === ops.autoplay && ops.effect === 'iRoll') { //运动效果
            the.timer = setInterval(function() {
                the.effectRoll();
            }, ops.speed / 50);
        } else if (true === ops.autoplay && ops.effect === 'slide') {
            the.timer = setInterval(function() {
                the.slideNext();
            }, ops.during);
        }
    };
})(jQuery);