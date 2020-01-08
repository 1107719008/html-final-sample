$(Document).ready(function(){


$('.la_background').hover(
function(){
    $(this).fadeTo(300,0.5);
},
function(){
    $(this).fadeTo(0,1);
},
);
$('.shopee_background').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,1);
    },
    );
$('.yahoo_background').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,1);
    },
    );
$('.pchome_background').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,1);
    },
    );
$('.moout').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,1);
    },
    );

//自動更換圖片
$(function() {
    $(".flexslider").flexslider({
        slideshowSpeed: 3000, //展示时间间隔ms
        animationSpeed: 200, //滚动时间ms
        
    });
}); 


//
$('.addanimated').delegate(".heart","click",
    function(){
        $('.addanimated').addClass('animated rubberBand');
        $('.heart').attr("src", "images/heartafteranimate_icon.png");
        $('.heart').addClass('change');
        $('.heart').removeClass('heart');
        
    }
);

//change點擊換回heart   用delegate才會是動態繫節
$('.addanimated').delegate(".change","click",
    function(){
        $('.change').attr("src", "images/heart_icon.png");
        $('.change').addClass('heart');
        $('.change').removeClass('change');
        
    }
);

//觸發動畫後復原
$('.addanimated').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('.addanimated').removeClass('animated rubberBand');
    }
);

});  //document結束


