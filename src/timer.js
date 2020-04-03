import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time : 0,
      timerStarted : false,
      controlBtn : 'Start',
      controlBtnClass :''
    }

    this.timerControl = () => {
      if (this.state.timerStarted === false) {
        this.setState(
          { timerStarted : true,
            controlBtn : 'Pause',
            controlBtnClass: ' active'
          });
        this.timer =  setInterval(() => {
          this.setState({
              time : this.state.time + 1000
          }) 
          },1000
        )
      }
      else {
          this.setState(
            { timerStarted: false,
              controlBtn : 'Resume',
              controlBtnClass :''
            });
          clearInterval(this.timer);
      }
    }

    this.resetTimer = () => {
      this.setState({
        time: 0,
        timerStarted : false,
        controlBtn : 'Start'
      });
      clearInterval(this.timer);
    };

  }

  render () {
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60
    const hours = Math.floor(this.state.time / msPerHour)
    const hoursMod = this.state.time % msPerHour
    const minutes = Math.floor(hoursMod / msPerMinute)
    const minutesMod = hoursMod % msPerMinute
    const seconds = Math.floor(minutesMod / msPerSecond)

    return (
      
      <div className='box'>
        <div className='timer-container'>
          <span>{String(hours).padStart(2, '0')}</span><span>:</span>
          <span>{String(minutes).padStart(2, '0')}</span><span>:</span>
          <span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <div className='timer-text'>
          <span>Hours</span>
          <span>Minutes</span>
          <span>seconds</span>
        </div>
        <div className='controls'>
          <button className={'control-btn'+this.state.controlBtnClass} onClick={this.timerControl}>{this.state.controlBtn}</button>
          <button className='reset-btn' onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    )
  } 
}

export default Timer