function ExampleConstructor() {}
console.log('value of ExampleConstructor', ExampleConstructor.prototype);
console.log('type of ExampleConstructor', typeof ExampleConstructor.prototype);

var newFunction = new ExampleConstructor();
console.log('newFunction', newFunction);
console.log('instanceof', newFunction instanceof ExampleConstructor);
