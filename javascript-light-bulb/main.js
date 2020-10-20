var $container = document.querySelector('.container-light');
var $lightBulb = document.querySelector('.lightbulb-light');

var switchOn = true;

function lightSwitch() {
  if (switchOn === true) {
    $container.className = 'container-dark';
    $lightBulb.className = 'lightbulb-dark';
    switchOn = false;
  } else if (switchOn === false) {
    $container.className = 'container-light';
    $lightBulb.className = 'lightbulb-light';
    switchOn = true;
  }

}

$lightBulb.addEventListener('click', lightSwitch);
