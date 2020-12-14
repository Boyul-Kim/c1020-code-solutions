fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // convert to json
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json()) // convert to json; promise chaining
  .then(data => console.log(data)); // previous result of json to console log
