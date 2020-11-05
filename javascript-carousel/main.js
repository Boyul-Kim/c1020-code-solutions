var $leftArrow = document.querySelector('.fa-angle-double-left');
var $rightArrow = document.querySelector('.fa-angle-double-right');
var $imageStorage = document.querySelectorAll('.imageStorage');
var $buttonStorage = document.querySelectorAll('.switchButton');
var dataView = document.querySelectorAll('[data-view]');

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
  } else {
    $imageStorage[index].classList.add('hidden');
    $imageStorage[index - 1].classList.remove('hidden');
    $buttonStorage[index].classList.remove('switchButtonCurrent');
    $buttonStorage[index - 1].classList.add('switchButtonCurrent');
  }
  clearInterval(interval);
  interval = setInterval(arrowMoveRight, 3000);
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

  } else {
    $imageStorage[index].classList.add('hidden');
    $imageStorage[index + 1].classList.remove('hidden');
    $buttonStorage[index].classList.remove('switchButtonCurrent');
    $buttonStorage[index + 1].classList.add('switchButtonCurrent');
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
for (var i = 0; i <= $buttonStorage.length - 1; i++) {
  dataView[i].addEventListener('click', switchButtonIcon);
  dataView[i].value = i;
}
