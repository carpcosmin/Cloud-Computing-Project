import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

function handleAuthenticationUI(user) {
    const logInButton = document.getElementById("show-log-in-popup");
    const registerButton = document.getElementById("show-sign-in-popup");
    const signOutButton = document.getElementById("sign-out");

    if (user) {
        logInButton.style.display = "none";
        registerButton.style.display = "none";
        signOutButton.style.display = "block";
    } else {
        logInButton.style.display = "block";
        registerButton.style.display = "block";
        signOutButton.style.display = "none";
    }
}

onAuthStateChanged(auth, (user) => {
    handleAuthenticationUI(user);
});

const signOutButton = document.getElementById("sign-out");
signOutButton.addEventListener("click", function() {
    signOut(auth)
        .then(() => {
            alert("Logged out successfully!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error signing out:", error);
        });
});

const loginButton = document.getElementById("log-in");
loginButton.addEventListener("click", function(event) {
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

//const dropdownButton = document.getElementById("dropbtn");
//dropdownButton.addEventListener("click", function() {
//    const dropdownContent = document.getElementById("navDropdown");
//    dropdownContent.classList.toggle("show");
//});
