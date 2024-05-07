import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD-nW2r1d_yZ6FxILRsEFcVizTmid6rnvY",
    authDomain: "trip-management-app-93c87.firebaseapp.com",
    projectId: "trip-management-app-93c87",
    storageBucket: "trip-management-app-93c87.appspot.com",
    messagingSenderId: "152884296056",
    appId: "1:152884296056:web:8554cbc75a4cc33455b08d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    const destination = document.getElementById("destination").value;
    const guests = document.getElementById("guests").value;
    const departureDate = document.getElementById("departureDate").value;
    const arrivalDate = document.getElementById("arrivalDate").value;

    push(ref(db, 'booking'), {
        destination: destination,
        numberGuests: guests,
        departureDate: departureDate,
        arrivalDate: arrivalDate
    }).then((newBookingRef) => {
        const bookingID = newBookingRef.key;
        alert("Booking added!");
    }).catch((error) => {
        console.error("Error adding booking: ", error);
    });
});
