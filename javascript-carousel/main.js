var $leftArrow = document.querySelector('.fa-angle-double-left');
var $rightArrow = document.querySelector('.fa-angle-double-right');
var $imageStorage = document.querySelectorAll('.imageStorage');
var $buttonStorage = document.querySelectorAll('.switchButton');
var $button1 = document.querySelector('.button1');
var $button2 = document.querySelector('.button2');
var $button3 = document.querySelector('.button3');
var $button4 = document.querySelector('.button4');
var $button5 = document.querySelector('.button5');

var interval = setInterval(arrowMoveRight, 3000);

function arrowMoveLeft() {
  var index = null;
  for (var i = 0; i <= $imageStorage.length - 1; i++) {
    if (!$imageStorage[i].className.includes('hidden')) {
      index = i;
    }
  }

  if (index === 0) {
    $imageStorage[0].classList.add('hidden');
    $imageStorage[$imageStorage.length - 1].classList.remove('hidden');
    $buttonStorage[0].classList.remove('switchButtonCurrent');
    $buttonStorage[$imageStorage.length - 1].classList.add('switchButtonCurrent');
    clearInterval(interval);
    interval = setInterval(arrowMoveRight, 3000);
  } else {
    $imageStorage[index].classList.add('hidden');
    $imageStorage[index - 1].classList.remove('hidden');
    $buttonStorage[index].classList.remove('switchButtonCurrent');
    $buttonStorage[index - 1].classList.add('switchButtonCurrent');
    clearInterval(interval);
    interval = setInterval(arrowMoveRight, 3000);
  }
}

function arrowMoveRight() {
  var index = null;
  for (var i = 0; i <= $imageStorage.length - 1; i++) {
    if (!$imageStorage[i].className.includes('hidden')) {
      index = i;
    }
  }

  if (index === $imageStorage.length - 1) {
    $imageStorage[$imageStorage.length - 1].classList.add('hidden');
    $imageStorage[0].classList.remove('hidden');
    $buttonStorage[$imageStorage.length - 1].classList.remove('switchButtonCurrent');
    $buttonStorage[0].classList.add('switchButtonCurrent');
    clearInterval(interval);
    interval = setInterval(arrowMoveRight, 3000);

  } else {
    $imageStorage[index].classList.add('hidden');
    $imageStorage[index + 1].classList.remove('hidden');
    $buttonStorage[index].classList.remove('switchButtonCurrent');
    $buttonStorage[index + 1].classList.add('switchButtonCurrent');
    clearInterval(interval);
    interval = setInterval(arrowMoveRight, 3000);
  }
}

function hideAll() {
  for (var imageIndex = 0; imageIndex <= $imageStorage.length - 1; imageIndex++) {
    if (!$imageStorage[imageIndex].className.includes('hidden')) {
      $imageStorage[imageIndex].classList.add('hidden');
    }
  }
}

function switchButtonIcon(event) {
  var buttonIndex = null;
  if (event.target.className.includes('button1')) {
    buttonIndex = 0;
  } else if (event.target.className.includes('button2')) {
    buttonIndex = 1;
  } else if (event.target.className.includes('button3')) {
    buttonIndex = 2;
  } else if (event.target.className.includes('button4')) {
    buttonIndex = 3;
  } else if (event.target.className.includes('button5')) {
    buttonIndex = 4;
  }

  for (var index = 0; index <= $buttonStorage.length - 1; index++) {
    if (index !== buttonIndex) {
      $buttonStorage[index].classList.remove('switchButtonCurrent');
    } else {
      $buttonStorage[index].classList.add('switchButtonCurrent');
      hideAll();
      $imageStorage[index].classList.remove('hidden');
      clearInterval(interval);
      interval = setInterval(arrowMoveRight, 3000);
    }
  }

}

$leftArrow.addEventListener('click', arrowMoveLeft);
$rightArrow.addEventListener('click', arrowMoveRight);
$button1.addEventListener('click', switchButtonIcon);
$button2.addEventListener('click', switchButtonIcon);
$button3.addEventListener('click', switchButtonIcon);
$button4.addEventListener('click', switchButtonIcon);
$button5.addEventListener('click', switchButtonIcon);
