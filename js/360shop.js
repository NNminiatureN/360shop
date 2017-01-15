// 头部广告关闭
$('.close').click(function () {
    $('.headad').css({display:'none'});
})
// banner
var banswiper = new Swiper('.bannerBox', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
// 滚动新闻
var toutConsBox=$('.toutConsBox');
var toutCons=$('.toutCons');
var height=toutCons.height();
console.log(height);
var t=setInterval(upgun,1000);
console.log(toutCons.eq(0).nextAll());
toutCons.eq(0).nextAll().css({top:height});
var next=0;
var now=0;
function upgun() {
    next++;
    if(next==toutCons.length){
        next=0;
    }
    toutCons.eq(now).css({'top':-height,'transition': 'all 1s'});
    toutCons.eq(next).css({'top':0,'transition': 'all 1s'});
    toutCons.eq(next+1).css({'top':height,'transition':'all 0s'});
    now=next;
}

// 横向滚动
var hxswiper = new Swiper('.btmBox', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30
});

// 底部固定
var footli=$('.footfix').find('li');
var icon=footli.find('.footicon');
var iconspan=footli.find('span');
icon.first().css({color:'#38B95E'});
iconspan.first().css({color:'#38B95E'});
footli.click(function () {
    icon.css({color:'#6C6C6C'});
    iconspan.css({color:'#6C6C6C'});
    $(this).find('.footicon').css({color:'#38B95E'});
    $(this).find('span').css({color:'#38B95E'});
})
// 回到顶部
$('.back').click(function () {
   $('html,body').animate({scrollTop:0},700);
})







