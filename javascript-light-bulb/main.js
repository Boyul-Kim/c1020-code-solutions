var $container = document.querySelector('.container-light');
var $lightBulb = document.querySelector('.lightbulb-light');

function lightSwitch() {
  if ($container.className === 'container-light' && $lightBulb.className === 'lightbulb-light') {
    $container.className = 'container-dark';
    $lightBulb.className = 'lightbulb-dark';
  } else if ($container.className === 'container-dark' && $lightBulb.className === 'lightbulb-dark') {
    $container.className = 'container-light';
    $lightBulb.className = 'lightbulb-light';
  }

}

$lightBulb.addEventListener('click', lightSwitch);
