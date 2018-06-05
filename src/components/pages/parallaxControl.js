
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('movingBackground').style.top = '500px';
  document.querySelector('.mainContent').style.top = '520px';
  document.querySelector('.scrollDownBtn').style.top = '540px';

  document.getElementById('parent-list').addEventListener('click', function() {
    scrollDown();
  })
  document.querySelector('.scrollDownBtn').addEventListener('click', function() {
    scrollDown();
  })

}, false);



window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f){setTimeout(f, 1000/60)}

function parallaxDenver () {
  // get number of pixels document has scrolled vertically
  var scrollTop = window.pageYOffset

  document.querySelector('.mainContent').style.top = ((-scrollTop * .08) +500) + 'px';

  document.getElementById('movingBackground').style.top = ((-scrollTop * .08) + 480) + 'px';
  document.querySelector('.scrollDownBtn').style.top = ((-scrollTop * .08) + 540) + 'px';

  document.getElementById('denver1').style.top = -scrollTop * .08 + 'px';
  document.getElementById('denver2').style.top = -scrollTop * .06 + 'px';
  document.getElementById('denver3').style.top = -scrollTop * .04 + 'px';
  document.getElementById('denver4').style.top = -scrollTop * .03 + 'px';
  document.getElementById('denver5').style.top = -scrollTop * .02 + 'px';

  headerFade(scrollTop);
  mainContentFader(scrollTop);

}

function mainContentFader(scroll) {
  if(scroll < 1000){
    document.querySelector('.mainContent').style.opacity = 0;
    document.querySelector('#titleText').style.opacity = 1;
    document.querySelector('.scrollDownBtn').style.opacity = 1;

    //!!!!!!this is causing strange transisitons!!!!!
    //document.querySelector('#movingBackground').style.zIndex = 11;
  } else if(scroll < 2000){
    document.querySelector('.mainContent').style.opacity = .25;
    document.querySelector('#titleText').style.opacity = .75;
    document.querySelector('.scrollDownBtn').style.opacity = .75;
  } else if(scroll < 3000){
    document.querySelector('.mainContent').style.opacity = .5;
    document.querySelector('#titleText').style.opacity = .5;
    document.querySelector('.scrollDownBtn').style.opacity = .5;
  } else if(scroll < 4000){
    document.querySelector('.mainContent').style.opacity = .75;
    document.querySelector('#titleText').style.opacity = .25;
    document.querySelector('.scrollDownBtn').style.opacity = .25;
  } else if(scroll < 5000){
    document.querySelector('.mainContent').style.opacity = 1;
    document.querySelector('#titleText').style.opacity = 0;
    document.querySelector('.scrollDownBtn').style.opacity = 0;

    //!!!!!!this is causing strange transisitons!!!!!
    //document.querySelector('#movingBackground').style.zIndex = 8;
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
      top: 6015,
      left: 0,
      behavior: 'smooth'
    });
  }
}

  // on page scroll
window.addEventListener('scroll', function(){
  requestAnimationFrame(parallaxDenver)
}, false)
