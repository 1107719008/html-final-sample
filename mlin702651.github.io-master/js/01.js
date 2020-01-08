$(Document).ready(function(){


    // //自動更換圖片
    // $(function() {
    //     $(".flexslider").flexslider({
    //         slideshowSpeed: 4000, //展示时间间隔ms
    //         animationSpeed: 200, //滚动时间ms
            
    //     });
    // }); 

    // //浮動視窗
    // $(function(){
    //     // 先取得 #cart 及其 top 值
    //     var tophight=document.getElementById("top").offsetTop;
    //     // 當網頁捲軸捲動時
    //     var $win = $(window).scroll(function(){
    //         //$("#popWindow").hide();
    //         // 如果現在的 scrollTop 大於原本 #cart 的 top 時
    //         if($win.scrollTop() >tophight){

    //                 $('#cart').css({
    //                     position: 'fixed',
    //                     top: '20 vw',
    //                     opacity: '1',
    //                 });
    //             //打開浮動視窗
    //             $('#header').click(
    //                 function(){
    //                     $("#popWindow").toggle();
    //                     //$("#popWindow").show();
    //                 },
    //                 //復原 還沒寫完
    //                 // function(){
    //                 //     $("p").toggle();
    //                 // },
    //             );

    //         }else{
    //             // 還原 #cart 的座標系統為 absolute
    //             $('#cart').css({
    //                 opacity: '0'
    //             });
    //         }
    //     });
    // });
    $(function() {
        $("#gototopseller").click(function () {
                $('html,body').animate({
                    scrollTop:1680
                }, 1000);
            }
        );
    }); 
    // $(".btn1").click(function(){
   
    //     $("html,body").scrollTop('20vw');
    //       $('html,body').animate({
    //          scrollTop: 500
    //        }, 1000);
                  
    //   });
});  //document結束
    
    