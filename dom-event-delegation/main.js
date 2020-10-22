var $taskList = document.querySelector('.task-list');

function taskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var taskFinished = event.target.closest('.task-list-item');
    console.log('closest', taskFinished);
    taskFinished.remove();
  }
}

$taskList.addEventListener('click', taskList);
