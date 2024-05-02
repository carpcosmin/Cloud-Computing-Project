if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration => {
      console.log("SW registered!");
      console.log(registration);
  }).catch(error => {
      console.log("SW Registration Failed!");
      console.log(error);
  });
}

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', function(){
  this .classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

document.querySelector("#show-log-in-popup").addEventListener("click", function(){
  document.querySelector(".login-popup").classList.add("active"); 
});
document.querySelector(".login-popup .btnClose").addEventListener("click", function(){
  document.querySelector(".login-popup").classList.remove("active"); 
}); 

document.querySelector("#show-sign-in-popup").addEventListener("click", function(){
  document.querySelector(".signin-popup").classList.add("active"); 
});
document.querySelector(".signin-popup .btnClose").addEventListener("click", function(){
  document.querySelector(".signin-popup").classList.remove("active"); 
}); 

// Code for the search bar
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

//Code for Home section
let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
  });
});