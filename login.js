  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

  import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"

  const firebaseConfig = {
    apiKey: "AIzaSyD-nW2r1d_yZ6FxILRsEFcVizTmid6rnvY",
    authDomain: "trip-management-app-93c87.firebaseapp.com",
    projectId: "trip-management-app-93c87",
    storageBucket: "trip-management-app-93c87.appspot.com",
    messagingSenderId: "152884296056",
    appId: "1:152884296056:web:8554cbc75a4cc33455b08d"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

 const login = document.getElementById("log-in");

 login.addEventListener("click", function(event){
   event.preventDefault();

   const email = document.getElementById("login-email").value;
   const password = document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       alert("Logged in successfully!");
       window.location.href = "index.html";
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage);
     });
 });



