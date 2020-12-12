import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      counter: state.counter + 1
    }));

  }

  render() {
    let buttonColor = 'dark-purple';

    if (this.state.counter <= 3) {
      buttonColor = 'dark-purple';
    } else if (this.state.counter <= 6) {
      buttonColor = 'purple';
    } else if (this.state.counter <= 9) {
      buttonColor = 'pink';
    } else if (this.state.counter <= 12) {
      buttonColor = 'orange';
    } else if (this.state.counter <= 15) {
      buttonColor = 'yellow';
    } else if (this.state.counter <= 18) {
      buttonColor = 'white';
    }

    return (
      <button onClick={this.handleClick} className={`color ${buttonColor}`} >Hot Button</button>
    );
  }
}

export default HotButton;
