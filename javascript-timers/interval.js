var $h1 = document.querySelector('h1');

function countDown() {
  $h1.textContent--;
  if ($h1.textContent === '0') {
    clearInterval(countDownInterval);
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}

var countDownInterval = setInterval(countDown, 1000);
