import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(prop) {
  return <button>Click Me!</button>;
}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
