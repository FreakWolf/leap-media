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
  var windowTop = $(window).scrollTop();
  var tape1Top = $("#tape1").offset().top;
  var tape2Top = $("#tape2").offset().top;
  if(window.innerWidth < 750){
    var left1Position = windowTop - tape1Top + window.innerHeight/2;
  }else{
    var left1Position = windowTop - tape1Top + window.innerHeight/3;
  }
  var left2Position = windowTop - tape2Top + window.innerHeight/3;
  $("#tape1").css({ left: -left1Position });
  $("#tape2").css({ left: left2Position });
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
});

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
