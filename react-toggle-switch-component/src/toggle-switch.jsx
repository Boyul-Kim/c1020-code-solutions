import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }

  render() {
    let toggleStatus = null;
    let background = null;
    if (this.state.toggle) {
      toggleStatus = 'on';
      background = 'background-on';
    } else {
      toggleStatus = 'off';
      background = 'background-off';
    }
    return (
      <div className={`${background}`}>
        <button onClick={this.toggle} className={`${toggleStatus}`} ></button>
      </div>
    );
  }
}

export default ToggleSwitch;
