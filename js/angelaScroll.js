/**
 * Created by hcxin on December 16h, 2017.to celebrate angela's two years old birthday.
 */
;(function ($) {
    var defaults = {
        topBtn: '#topBtn',
        topSpeed: 500,
        topCallBack: function () {
            console.log("已到顶部");
        },
        bottomSpeed: 500,
        bottomBtn: '#bottomBtn',
        bottomCallBack: function () {
            console.log("已到底部");
        }
    };
    $.extend({
        angelaScroll: function (options) {
            var options = $.extend(defaults, options);

            //回到顶部
            $(options.topBtn).click(function () {
                $.when($('body,html').animate({
                    scrollTop: 0
                }, defaults.topSpeed)).then(options.topCallBack());
            });

            //回到低部
            $(options.bottomBtn).click(function () {
                $.when(
                    $('body,html').animate({
                        scrollTop: $(document).height() - $(window).height()
                    }, defaults.bottomSpeed)).then(options.bottomCallBack());
            });
        }
    });
})(jQuery);