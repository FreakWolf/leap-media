const landingLeftImg = document.querySelector("#land-left");
const landingRightImg = document.querySelector("#land-right");
const ethLeft = document.querySelector("#eth-left");
const ethRight = document.querySelector("#eth-right");
const tape1 = document.querySelector("#tape1");
const tape2 = document.querySelector("#tape2");


window.addEventListener("scroll", (e)=>{
  // landingLeftImg.style.left = -1 *window.scrollY*25/window.innerHeight +'vw';
  // landingRightImg.style.right = -1 *window.scrollY*17/window.innerHeight +'vw';
  tape1.style.marginLeft = -1*(window.scrollY - 2*window.innerHeight)*50/window.innerHeight + "vw";
  tape2.style.marginLeft = 1*(window.scrollY - 2*window.innerHeight)*50/window.innerHeight + "vw";
})

var servicesSection = document.querySelector('.services-sec');
var servicesImgContainer = document.querySelector('.services-img-container');
var frameInsideImg = document.querySelector('#frame_inside_img');
var sectionHeight = servicesSection.offsetHeight;
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var sectionOffset = servicesSection.offsetTop;

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
    frameInsideImg.src = "./static/video_ads_img.svg";
    frameInsideImg.alt = "video_ads_img";
  }
  else if(scrollTop > sectionOffset + windowHeight/2 && scrollTop <= sectionOffset + (3/2)*windowHeight){
    frameInsideImg.src = "./static/event_video_production_img.svg";
    frameInsideImg.alt = "event_video_production_img";
  }
  else{
    frameInsideImg.src = "./static/host_img.svg";
    frameInsideImg.alt = "host_img";
  }
});
