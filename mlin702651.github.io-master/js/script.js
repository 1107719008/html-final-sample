$(document).ready(function(){

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAiFO-Gxp8OjijSI9-10nasph2iNri552U",
    authDomain: "firelogintest-8b2a3.firebaseapp.com",
    databaseURL: "https://firelogintest-8b2a3.firebaseio.com",
    projectId: "firelogintest-8b2a3",
    storageBucket: "firelogintest-8b2a3.appspot.com",
    messagingSenderId: "401712267934",
    appId: "1:401712267934:web:fec607e3f86493e0a2f18f",
    measurementId: "G-ZVPRFL4BQP"
    });
    // Reference Firebase Auth
    const auth = firebase.auth();
  
    // REGISTER DOM ELEMENTS
    const $email = $('#email');
    const $password = $('#password');
    const $btnSignIn = $('#btnSignIn');
    const $btnSignUp = $('#btnSignUp');
    const $btnSignOut = $('#btnSignOut');
    const $signInfo = $('#sign-info');
  
    // SignIn
    $btnSignIn.click(function(e){
      console.log(' sign in button click!!! ')
    
      auth.signInWithEmailAndPassword($email.val(), $password.val())
      .catch(function(e){
        $signInfo.html(e.message);
      });
    });
  
    // SignUp
    $btnSignUp.click(function(e){
      console.log(' sign up button click!!! ')
      auth.createUserWithEmailAndPassword($email.val(), $password.val())
      .catch(function(e){
        $signInfo.html(e.message);
        
      });
    });
  
    // Listening
    auth.onAuthStateChanged(function(user){
      if(user) {
        $signInfo.html(`${user.email} is login...`);
        console.log(user);
      } else {
        console.log("not logged in");
      }
    });
  
    // Signout
    $btnSignOut.click(function(){
      auth.signOut();
      $email.val('');
      $password.val('');
      $signInfo.html('No one login...');
    });
  });