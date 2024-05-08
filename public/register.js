  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

  import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"

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

 const register = document.getElementById("register");

 register.addEventListener("click", function(event){
   event.preventDefault();

   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       alert("Account created successfully!");
       window.location.href = "index.html";
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage);
     });
 });



