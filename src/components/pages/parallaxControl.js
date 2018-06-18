
document.addEventListener('DOMContentLoaded', function(){

  var screenDifference = checkScreen();
  document.getElementById('movingBackground').style.top = (500  + screenDifference) + 'px';
  document.querySelector('.mainContent').style.top = '1000px';

  document.getElementById('parent-list').addEventListener('click', function() {
    scrollDown();
  })
  document.querySelector('.scrollDownBtn').addEventListener('click', function() {
    scrollDown();
  })

}, false);

var atTop = true;


window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f){setTimeout(f, 1000/60)}

function parallaxDenver () {
  // get number of pixels document has scrolled vertically
  var scrollTop = window.pageYOffset;
  var contentTop = document.querySelector('.mainContent').style.top;
  contentTop = contentTop.slice(0, (contentTop.length -2));
  contentTop = parseInt(contentTop);
  var screenDifference = checkScreen();

  //console.log(typeof contentTop);

  // if(contentTop > 25 || scrollTop ) {
  //   console.log("yup")
  //   document.querySelector('.mainContent').style.top = ((-scrollTop * .3) +1000) + 'px';
  // } else {
  //   document.querySelector('.mainContent').style.top = 25;
  // }
  document.querySelector('.mainContent').style.top = ((-scrollTop * .3) + 1000) + 'px';

  document.getElementById('movingBackground').style.top = ((-scrollTop * .08) + (480  + screenDifference)) + 'px';

  document.getElementById('denver1').style.top = -scrollTop * .08 + 'px';
  document.getElementById('denver2').style.top = -scrollTop * .06 + 'px';
  document.getElementById('denver3').style.top = -scrollTop * .04 + 'px';
  document.getElementById('denver4').style.top = -scrollTop * .03 + 'px';
  document.getElementById('denver5').style.top = -scrollTop * .02 + 'px';

}

function checkScreen() {
  var screenWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  console.log(screenWidth);

  if(screenWidth < 1300) {
    return 0;
  }
  else if (screenWidth < 1700) {
    return 150;
  } else {
    return 400;
  }
}

function headerFade(scroll){
  if(scroll > 4500){
    document.getElementById('mainHeader').style.backgroundColor = "#121C25";
    document.querySelector('.snow').style.zIndex = 8;
  } else if(scroll < 4500){
    document.getElementById('mainHeader').style.backgroundColor = "";
    document.querySelector('.snow').style.zIndex = 4;
  }
}

function scrollDown() {
  if(window.pageYOffset < 4500) {
    window.scroll({
      top: 3665,
      left: 0,
      behavior: 'smooth'
    });
  }
}

  // on page scroll
window.addEventListener('scroll', function(){
  requestAnimationFrame(parallaxDenver)
}, false)
