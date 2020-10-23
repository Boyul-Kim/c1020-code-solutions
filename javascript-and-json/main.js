var library = [
  {
    isbn: 'isbn1',
    title: 'book1',
    author: 'author1'
  },
  {
    isbn: 'isbn2',
    title: 'book2',
    author: 'author2'
  },
  {
    isbn: 'isbn3',
    title: 'book3',
    author: 'author3'
  }
];

console.log('array type:', typeof library);

var libraryStringify = JSON.stringify(library);
console.log('json stringify type:', typeof libraryStringify);

var student = '{"numberId": 4, "name":"student1"}';
console.log('student string type:', typeof student);

var studentParse = JSON.parse(student);
console.log('student parse type:', typeof studentParse);
