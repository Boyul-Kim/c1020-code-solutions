var $popUpText = document.querySelector('.popUpText');
var $modalButton = document.querySelector('.modalButton');
var $noButton = document.querySelector('.no');
var $survey = document.querySelector('.survey');

function modalButtonAction() {
  $survey.className = 'survey popUp containerDark';
  $popUpText.className = 'popUpText';
  // $container.className = 'container containerDark';
}
$modalButton.addEventListener('click', modalButtonAction);

function surveyButtonAction() {
  $survey.className = 'survey popUp';
  $popUpText.className = 'popUpText ghost';
  // $container.className = 'container';
}
$noButton.addEventListener('click', surveyButtonAction);
