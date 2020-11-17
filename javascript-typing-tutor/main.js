/// var $text = document.querySelector('.text');
var $body = document.querySelector('body');
var $span = document.querySelectorAll('span');
var $accuracy = document.querySelector('.accuracy');
var $button = document.querySelector('button');
var counter = 0;
var miss = 0;

function typeCheck(event) {
  if (event.key === $span[counter].textContent) {
    $span[counter].className = 'green';
    $span[counter].style.textDecoration = 'none';
    counter++;
  } else {
    $span[counter].className = 'red';
    miss++;
  }

  $span[counter].style.textDecoration = 'underline';

  if (counter === $span.length - 1) {
    $accuracy.textContent = 'Accuracy:  ' + Math.round(((counter - miss) / counter * 100)) + '%';
  }
}

function reType(event) {
  counter = 0;
  miss = 0;
  for (var i = 0; i <= $span.length - 1; i++) {
    $span[i].className = '';
  }
  $body.addEventListener('keydown', typeCheck);
}

$body.addEventListener('keydown', typeCheck);
$button.addEventListener('click', reType);
