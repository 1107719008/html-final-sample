
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBQv0oooAtcUrViRJvh3zranq1LVVMIDM",
    authDomain: "project-1841682900147615791.firebaseapp.com",
    databaseURL: "https://project-1841682900147615791.firebaseio.com",
    projectId: "project-1841682900147615791",
    storageBucket: "project-1841682900147615791.appspot.com",
    messagingSenderId: "192287192023",
    appId: "1:192287192023:web:184e33962afc877ae29192"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //make auth and firestore conferences
  const auth=firebase.auth();
  const db=firebase.firestore();

auth.createUserWithEmailAndPassword(email,password);
auth.signInWithEmailAndPassword(email,password);
auth.signOut();
auth.onAuthStateChanged(function(user){
    if(user){
        console.log("has logged in")
    }
    else{
        console.log("not logged in")
    }

});
//dom elements
const $email=$('#email');
const $password=$('#password');
const $btnSignUp=$('.login');

//signup
$btnSignUp.click(function(e){
    auth.createUserWithEmailAndPassword($email.val(),$password.val())
    .catch(function(e){
        $signInfo.html(e.message);
    })
});





//sign up 001
//const signupForm=document.querySelector('#username');
//signupForm.addEventListener('submit',(e)=>{
//    e.preventDefault();
//get user info
//const email =signupForm['username'].value;
//const password=signupForm['password'].value;
//console.log(email,password)
//)