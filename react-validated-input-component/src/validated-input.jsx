import React from 'react';

class ValidatedInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.onPWChange = this.onPWChange.bind(this);
  }

  onPWChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const capitalLetter = /(?=.*[A-Z])/;
    const digit = /(?=.*\d)/;
    const specialChar = /([!@#$%^&*()])/;
    let fasName = null;

    if (this.state.password.length < 8) {
      fasName = 'fa-times';
    } else {
      fasName = 'fa-check';
    }

    if (!RegExp(capitalLetter).test(this.state.password)) {
      fasName = 'fa-times';
    } else {
      fasName = 'fa-check';
    }

    if (!RegExp(digit).test(this.state.password)) {
      fasName = 'fa-times';
    } else {
      fasName = 'fa-check';
    }

    if (!RegExp(specialChar).test(this.state.password)) {
      fasName = 'fa-times';
    } else {
      fasName = 'fa-check';
    }

    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div className={'passwordInput'}>
            <input onChange={this.onPWChange} value={this.state.password} type="password" name="password" id="password" />
            <i className={`fas ${fasName}`}></i>
          </div>

        </form>
      </div>
    );

  }
}

export default ValidatedInputs;
