var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function tabContainer(event) {
  var result = event.target.matches('.tab');
  var $dataView = event.target.getAttribute('data-view');
  if (result) {
    for (var i = 0; i <= $tab.length - 1; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    for (var x = 0; x <= $view.length - 1; x++) {
      if ($view[x].getAttribute('data-view') === $dataView) {
        $view[x].className = 'view';
      } else {
        $view[x].className = 'hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', tabContainer);
