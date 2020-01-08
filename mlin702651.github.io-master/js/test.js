$(Document).ready(function(){

  
  $(function() {
      var rellax = new Rellax('.rellax');
  }); 

  $(function() {
    $("#gototopseller").click(function () {
            $('html,body').animate({
                scrollTop:2070
            }, 1000);
        }
    );
}); 
$('.boximg').hover(
  function(){
      $(this).fadeTo(300,0.5);
  },
  function(){
      $(this).fadeTo(0,1);
  },
  );
  $('.mask1').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,0);
    },
    );
$('.mask2').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,0);
    },
    );
    $('.mask3').hover(
        function(){
            $(this).fadeTo(300,0.5);
        },
        function(){
            $(this).fadeTo(0,0);
        },
        );


});  //document結束
    
    
    