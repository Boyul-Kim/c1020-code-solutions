import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    let button;
    if (this.state.isClicked) {
      button = <button onClick={this.handleClick}>Thanks</button>;
    } else {
      button = <button onClick={this.handleClick}>Click me</button>;
    }

    return (
      button
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
