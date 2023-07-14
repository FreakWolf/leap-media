const landingLeftImg = document.querySelector("#land-left");
const landingRightImg = document.querySelector("#land-right");
const ethLeft = document.querySelector("#eth-left");
const ethRight = document.querySelector("#eth-right");
const tape1 = document.querySelector("#tape1");
const tape2 = document.querySelector("#tape2");
// const productDemoHeading = new SplitType('#product_demo_heading')

// gsap.to('.char', {
//   y: 0,
//   stagger: 0.05,
//   delay: 0.2,
//   duration: 0.1
// })

// Preloader
let preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}

window.addEventListener("scroll", (e)=>{
  // landingLeftImg.style.left = -1 *window.scrollY*25/window.innerHeight +'vw';
  // landingRightImg.style.right = -1 *window.scrollY*17/window.innerHeight +'vw';
  if(window.innerWidth < 750){
  tape1.style.left = -1*(window.scrollY - window.innerHeight)*175/window.innerHeight + "vw";
  tape2.style.right = -1*(window.scrollY - 1.25*window.innerHeight)*125/window.innerHeight + "vw";
  }
  else{
    tape1.style.left = -1*(window.scrollY - window.innerHeight)*50/window.innerHeight + "vw";
    tape2.style.right = -1*(window.scrollY - 1.25*window.innerHeight)*50/window.innerHeight + "vw";
  }
})

var servicesSection = document.querySelector('.services-sec');
var contactSection = document.querySelector('.contact-sec');
var servicesImgContainer = document.querySelector('.services-img-container');
var frameInsideImg = document.querySelector('#frame_inside_img');
var sectionHeight = servicesSection.offsetHeight;
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var sectionOffset = servicesSection.offsetTop;
  var contactSecOffset = contactSection.offsetTop;

  if(scrollTop <= (2/10)*windowHeight){
    document.querySelector('.floating-telegram-icon').style.display = 'none';
    document.querySelector('.floating-meet-btn').style.display = 'none';
  }
  else if(scrollTop >= contactSecOffset - windowHeight){
    document.querySelector('.floating-telegram-icon').style.display = 'block';
    document.querySelector('.floating-meet-btn').style.display = 'none';
  }
  else{
    document.querySelector('.floating-telegram-icon').style.display = 'block';
    document.querySelector('.floating-meet-btn').style.display = 'block';
  }

  if (scrollTop >= sectionOffset && scrollTop <= sectionOffset + sectionHeight - windowHeight) {
    servicesImgContainer.style.position = 'fixed';
    servicesImgContainer.style.top = '0';
  }
  else if (scrollTop >= sectionOffset + sectionHeight - windowHeight) {
    servicesImgContainer.style.position = 'absolute';
    servicesImgContainer.style.top = 'auto';
    servicesImgContainer.style.bottom = '0';
  }
  else {
    servicesImgContainer.style.position = 'absolute';
    servicesImgContainer.style.top = '0';
    servicesImgContainer.style.bottom = 'auto';
  }

  if(scrollTop <= sectionOffset + windowHeight/2){
    frameInsideImg.src = "./static/product_demo_img.png";
    frameInsideImg.alt = "product_demo_img";
  }
  else if(scrollTop > sectionOffset + windowHeight/2 && scrollTop <= sectionOffset + (3/2)*windowHeight){
    frameInsideImg.src = "./static/social_media_videos_img.png";
    frameInsideImg.alt = "social_media_videos_img";
  }
  else if(scrollTop > sectionOffset + (3/2)*windowHeight && scrollTop <= sectionOffset + (5/2)*windowHeight){
    frameInsideImg.src = "./static/explainer_videos_img.png";
    frameInsideImg.alt = "explainer_videos_img";
  }
  else if(scrollTop > sectionOffset + (5/2)*windowHeight && scrollTop <= sectionOffset + (7/2)*windowHeight){
    frameInsideImg.src = "./static/host_img.png";
    frameInsideImg.alt = "host_img";
  }
  else if(scrollTop > sectionOffset + (7/2)*windowHeight && scrollTop <= sectionOffset + (9/2)*windowHeight){
    frameInsideImg.src = "./static/event_video_production_img.png";
    frameInsideImg.alt = "event_video_production_img";
  }
  else{
    frameInsideImg.src = "./static/social_media_management_img.png";
    frameInsideImg.alt = "social_media_management_img";
  }
});

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["users", "eyeballs", "revenue", "brand building"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });

const getOffsetTop = element => {
  let offsetTop = 0;
  while(element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

let textRevealDivs = document.querySelectorAll('.showRight-animate');

window.onscroll = () => {
  textRevealDivs.forEach(textRevealDiv => {
    let top = window.scrollY;
    let offset = getOffsetTop(textRevealDiv);

    if (top + (8/10)*window.innerHeight > offset) {
      textRevealDiv.classList.add('show-animate');
    }
    else{
      textRevealDiv.classList.remove('show-animate');
    }
  })
}
