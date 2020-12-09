import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello, React!'
    );
  }
}

ReactDOM.render(React.createElement(HelloReact),
  document.getElementById('root'));
