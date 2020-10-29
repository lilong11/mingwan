;
(function($, window, undifined) {
    $.extend({
        backTop: function($elem) { // 返回顶部
            var wHigh = $(window).innerHeight() / 2;
            $(window).scroll(function() {
                var sTop = $(window).scrollTop();
                (sTop > wHigh) ? $elem.slideDown(200): $elem.slideUp(200);
            });
            $elem.bind('click', function() {
                $("html, body").stop().animate({ scrollTop: 0 }, 400);
            });
        },
        openLayer: function($btn, $mask, selector) { // 弹出窗
            var dataId = $btn.attr('data-layer');
            var $popup = $(dataId);
            var $close = $popup.find(selector);
            $btn.bind('click', function() {
                $mask.addClass('active');
                $popup.addClass('active');
            });
            $mask.bind('click', function() {
                $mask.removeClass('active');
                $popup.removeClass('active');
            });
            $close.bind('click', function() {
                $mask.removeClass('active');
                $popup.removeClass('active');
            });
        }
    })
})(jQuery, window);

if (isExist("backTop")) {
    var $backTop = $(document.getElementById("backTop"));
    $.backTop($backTop);
}

if (isExist("masklayer") && isExist("gradisList")) {
    var $btns = $('#gradisList').find('a');
    $btns.each(function() {
        $.openLayer($(this), $('#masklayer'), '.icon-close');
    })
}

// 侧边菜单滑动
window.onload = function() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    isPC();
    if (w < 768) {
        var stepSwiper = new Swiper('#stepSwiper', {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2
        });
    }
};
window.onresize = function() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    isPC();
    if (w < 768) {
        var stepSwiper = new Swiper('#stepSwiper', {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2
        });
    }
};

$(function() {
    if (!document.getElementById('menubtn')) return false;
    if (!document.getElementById('menubox')) return false;
    var $menuBtn = $(document.getElementById('menubtn'));
    var $menuBox = $(document.getElementById('menubox'));
    $menuBtn.on('click', function() { //打开
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $menuBox.removeClass('active');
        } else {
            $(this).addClass('active');
            $menuBox.addClass('active');
        }
    });
    $menuBox.find('a').each(function() {
        var $elem = $(this).next('.dropdown');
        if ($elem.length !== 0) {
            $(this).parent('.navitem').addClass('fold');
            $(this).bind('click', function() {
                !isPC() && event.preventDefault();
                var $parent = $(this).parent('.navitem');
                $parent.toggleClass('active').siblings('li').removeClass('active');
            })
        }
    })
});

// 检查当前浏览器是否为PC浏览器
function isPC() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return false;
    } else {
        return true;
    }
}

// 检查DOM对象是否存在，避免报错
function isExist(selector) {
    if (!document.getElementById(selector)) {
        return false;
    } else {
        return true;
    }
}