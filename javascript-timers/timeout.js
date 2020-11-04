var $h1 = document.querySelector('h1');

function hello() {
  $h1.textContent = 'Hello there';
}
window.setTimeout(hello, 2 * 1000);
