import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      on: true,
      intervalTimer: null,
      icon: 'fa-play'
    };
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.timer = this.timer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  handleTimerStart() {
    if (this.state.on === false) {
      this.stopTimer();
      this.setState({ icon: 'fa-play' });
    } else {
      this.setState({ intervalTimer: setInterval(this.timer, 1000) });
      this.setState({ icon: 'fa-stop' });
    }
    this.setState({ on: !this.state.on });
  }

  timer() {
    this.setState({ time: this.state.time + 1 });
  }

  stopTimer() {
    clearInterval(this.state.intervalTimer);
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'watch'}>
          <div className={'time'}>
            {`${this.state.time}`}
          </div>
        </div>
        <div className={'button'}>
          <i onClick={this.handleTimerStart} className={`fas ${this.state.icon}`}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <StopWatch />,
  document.querySelector('#root')
);
