const landingLeftImg = document.querySelector("#land-left");
const landingRightImg = document.querySelector("#land-right");
const ethLeft = document.querySelector("#eth-left");
const ethRight = document.querySelector("#eth-right");
const tape1 = document.querySelector("#tape1");
const tape2 = document.querySelector("#tape2");


window.addEventListener("scroll", (e)=>{
  landingLeftImg.style.left = -1 *window.scrollY*25/window.innerHeight +'vw';
  landingRightImg.style.right = -1 *window.scrollY*17/window.innerHeight +'vw';
  tape1.style.marginLeft = -1*(window.scrollY - 2*window.innerHeight)*50/window.innerHeight + "vw";
  tape2.style.marginLeft = 1*(window.scrollY - 2*window.innerHeight)*50/window.innerHeight + "vw";
})
