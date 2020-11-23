var $leftArrow = document.querySelector('.fa-angle-double-left');
var $rightArrow = document.querySelector('.fa-angle-double-right');
var $imageStorage = document.querySelectorAll('.imageStorage');
var $buttonStorage = document.querySelectorAll('.switchButton');
var dataView = document.querySelectorAll('[data-view]');

var interval = setInterval(arrowMoveRight, 3000);

var data = {
  index: ''
};

function arrowMoveLeft() {
  for (var i = 0; i <= $imageStorage.length - 1; i++) {
    if (!$imageStorage[i].className.includes('hidden')) {
      data.index = i;
    }
  }

  if (data.index === 0) {
    $imageStorage[0].classList.add('hidden');
    $imageStorage[$imageStorage.length - 1].classList.remove('hidden');
    $buttonStorage[0].classList.remove('switchButtonCurrent');
    $buttonStorage[$imageStorage.length - 1].classList.add('switchButtonCurrent');
  } else {
    $imageStorage[data.index].classList.add('hidden');
    $imageStorage[data.index - 1].classList.remove('hidden');
    $buttonStorage[data.index].classList.remove('switchButtonCurrent');
    $buttonStorage[data.index - 1].classList.add('switchButtonCurrent');
  }
  clearInterval(interval);
  interval = setInterval(arrowMoveRight, 3000);
}

function arrowMoveRight() {
  for (var i = 0; i <= $imageStorage.length - 1; i++) {
    if (!$imageStorage[i].className.includes('hidden')) {
      data.index = i;
    }
  }

  if (data.index === $imageStorage.length - 1) {
    $imageStorage[$imageStorage.length - 1].classList.add('hidden');
    $imageStorage[0].classList.remove('hidden');
    $buttonStorage[$imageStorage.length - 1].classList.remove('switchButtonCurrent');
    $buttonStorage[0].classList.add('switchButtonCurrent');

  } else {
    $imageStorage[data.index].classList.add('hidden');
    $imageStorage[data.index + 1].classList.remove('hidden');
    $buttonStorage[data.index].classList.remove('switchButtonCurrent');
    $buttonStorage[data.index + 1].classList.add('switchButtonCurrent');
  }
  clearInterval(interval);
  interval = setInterval(arrowMoveRight, 3000);
}

function hideAll() {
  for (var imageIndex = 0; imageIndex <= $imageStorage.length - 1; imageIndex++) {
    if (!$imageStorage[imageIndex].className.includes('hidden')) {
      $imageStorage[imageIndex].classList.add('hidden');
    }
  }
}

function switchButtonIcon(event) {
  var buttonIndex = Number(event.target.value);
  for (var i = 0; i <= $buttonStorage.length - 1; i++) {
    if (i !== buttonIndex) {
      $buttonStorage[i].classList.remove('switchButtonCurrent');
    } else {
      $buttonStorage[i].classList.add('switchButtonCurrent');
      hideAll();
      $imageStorage[i].classList.remove('hidden');
      clearInterval(interval);
      interval = setInterval(arrowMoveRight, 3000);
    }
  }
}

$leftArrow.addEventListener('click', arrowMoveLeft);
$rightArrow.addEventListener('click', arrowMoveRight);
for (var i = 0; i <= $buttonStorage.length - 1; i++) {
  dataView[i].addEventListener('click', switchButtonIcon);
  dataView[i].value = i;
}
