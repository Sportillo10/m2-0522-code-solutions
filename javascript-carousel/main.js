var $imgList = document.querySelectorAll('img');
var $progessCircle = document.querySelectorAll('.dot');
var $nextImg = document.querySelector('.next');
var $prevImg = document.querySelector('.prev');

var imgPosition = 0;

function updateImg() {
  for (var i = 0; i < $imgList.length; i++) {
    $imgList[i].className = 'hidden';
    $imgList[imgPosition].className = 'active';
    $progessCircle[i].className = 'far fa-circle';
    $progessCircle[imgPosition].className = 'fas fa-circle';
  }
}

$nextImg.addEventListener('click', function (event) {
  if (imgPosition === $imgList.length - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updateImg();
  runTimer();
});

$prevImg.addEventListener('click', function (event) {
  if (imgPosition === 0) {
    imgPosition = $imgList.length - 1;
  } else {
    imgPosition--;
  }
  updateImg();
  runTimer();
});

var $dots = document.querySelectorAll('.dot-box div');
var timer = null;

$dots.forEach(dot => {
  dot.addEventListener('click', function (event) {
    var className = dot.className;
    var position = className.split('dot-')[1];
    imgPosition = position - 1;

    updateImg();
    runTimer();
  });
});

function carouselImg() {
  if (imgPosition === $imgList.length - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updateImg();
}

function runTimer() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(function () { carouselImg(); }, 1000);
}

runTimer();
