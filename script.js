const landingLeftImg = document.querySelector("#land-left");
const landingRightImg = document.querySelector("#land-right");
const ethLeft = document.querySelector("#eth-left");
const ethRight = document.querySelector("#eth-right");

window.addEventListener("scroll", (e)=>{
  landingLeftImg.style.left = -1 *window.scrollY*25/window.innerHeight +'vw';
  landingRightImg.style.right = -1 *window.scrollY*17/window.innerHeight +'vw';
})





