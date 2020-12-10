import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

class HotButtonPage extends React.Component {
  constructor(props) {
    super(props);
    this.HotButton = new HotButton();
  }

  render() {
    return <HotButton />;
  }
}

ReactDOM.render(
  <HotButtonPage />,
  document.querySelector('#root')
);
