var buttonCounter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCounter(event) {
  buttonCounter++;
  $clickCount.textContent = 'Clicks: ' + buttonCounter;

  if (buttonCounter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (buttonCounter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (buttonCounter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (buttonCounter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (buttonCounter < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (buttonCounter > 16) {
    $hotButton.className = 'hot-button nuclear';
  }

}

$hotButton.addEventListener('click', clickCounter);
