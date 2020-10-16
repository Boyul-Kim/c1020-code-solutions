/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i <= students.length - 1; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
