const landingLeftImg = document.querySelector("#land-left");
const landingRightImg = document.querySelector("#land-right");
const ethLeft = document.querySelector("#eth-left");
const ethRight = document.querySelector("#eth-right");
const tape1 = document.querySelector("#tape1");
const tape2 = document.querySelector("#tape2");

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
  tape1.style.marginLeft = -1*(window.scrollY - window.innerHeight)*50/window.innerHeight + "vw";
  tape2.style.marginLeft = 1*(window.scrollY - window.innerHeight)*50/window.innerHeight + "vw";
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
    frameInsideImg.src = "./static/product_demo_img.svg";
    frameInsideImg.alt = "product_demo_img";
  }
  else if(scrollTop > sectionOffset + windowHeight/2 && scrollTop <= sectionOffset + (3/2)*windowHeight){
    frameInsideImg.src = "./static/social_media_videos_img.svg";
    frameInsideImg.alt = "social_media_videos_img";
  }
  else if(scrollTop > sectionOffset + (3/2)*windowHeight && scrollTop <= sectionOffset + (5/2)*windowHeight){
    frameInsideImg.src = "./static/explainer_videos_img.svg";
    frameInsideImg.alt = "explainer_videos_img";
  }
  else if(scrollTop > sectionOffset + (5/2)*windowHeight && scrollTop <= sectionOffset + (7/2)*windowHeight){
    frameInsideImg.src = "./static/host_img.svg";
    frameInsideImg.alt = "host_img";
  }
  else if(scrollTop > sectionOffset + (7/2)*windowHeight && scrollTop <= sectionOffset + (9/2)*windowHeight){
    frameInsideImg.src = "./static/event_video_production_img.svg";
    frameInsideImg.alt = "event_video_production_img";
  }
  else{
    frameInsideImg.src = "./static/social_media_management_img.svg";
    frameInsideImg.alt = "social_media_management_img";
  }
});
