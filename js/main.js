

//'use strict';
//
//$(function () {
//    var windowWidth=$(window).width();
//    var isSmallScreen=windowWidth<768;
//
//    $("#main_ad > .carousel-inner > .item").each(function (i,item) {
//        var $item=$(item);
//        var imgSrc=isSmallScreen?$item.data("image-xs"):$item.data("image-lg");
//        $item.css('backgroundImage','url("'+imgSrc+'")');
//    })
//});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

        //选项卡容器的宽度
    var $ulContainer=$(".nav-tabs");
    var width=30;
    $ulContainer.children().each(function (index,element) {
        width+=element.clientWidth;
    });

    if(width>$(window).width()){
        $ulContainer.css('width',width).parent().css('overflow-x','scroll');
    }

    var $newTitle=$(".news-title");

    $('.nav-pills  li a').on('click', function () {
        var $this=$(this);
        var title=$this.data('title');
        $newTitle.text(title);
    });

});