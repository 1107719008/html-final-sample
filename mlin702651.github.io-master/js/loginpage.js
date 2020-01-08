$(Document).ready(function(){

    $(function() {
        $(".lable_singin").click(
            function () {
                $(".welcomeback").html("Hello, Friend!");
                $(".logaccount").html("create your account");
                //$(".login").val("sign up");
                $(".signup").css("display","initial");
                $(".login").css("display","none");
                
                $(".lable_singin").css("background-color","#FFD655");
                $(".lable_login").css("background-color","#FFEAA8");
                $("btnSignIn").id("btnSignUp");

               
               
            }
        );
        $(".lable_login").click(
            function () {
                $(".welcomeback").html("Welcome Back");
                $(".logaccount").html("login your account");
                $(".signup").css("display","none");
                $(".login").css("display","initial");
                $(".lable_singin").css("background-color","#FFEAA8");
                $(".lable_login").css("background-color","#FFD655");
                $("btnSignUp").id("btnSignIn");
            }
        );
    }); 
});  //document結束
    