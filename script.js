// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Typewriter Effect.

var typeName = document.getElementById("name");
var myName = ["I'am Apoorva Tomar", "A Full Stack Developer"];
let charPosition = 0;
let textPosition = 0;

typeWriter = () => {
    typeName.innerText = myName[textPosition].substring(0, charPosition);
    if(charPosition++ != myName[textPosition].length)
    {
        setTimeout(typeWriter, 100);
    }
    let text = myName[textPosition];
    if(charPosition === text.length+1)
    {
        setTimeout(delChar, 3000);
    }
};

delChar = () => {
    typeName.innerText = myName[textPosition].substring(0, charPosition);
    if(--charPosition >= 0)
    {
        setTimeout(delChar, 50);
    }
    if(charPosition === 0)
    {
        if(textPosition === myName.length-1)
        {
            textPosition = 0;
        }
        else
        {
            textPosition++;
        }
        setTimeout(typeWriter, 1000);
    }
};

typeWriter();


// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
