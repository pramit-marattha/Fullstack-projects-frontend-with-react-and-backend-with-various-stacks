import React from 'react';
import { useTimer } from 'react-timer-hook';

function ChessTimeright({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
      <>
    <div style={{textAlign: 'right'}}>
    <h1 style={{color:"black",margin:"0",padding:"0"}}>Black</h1>
      <div style={{fontSize: '60px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>{isRunning ? 'Pause' : '' }</button>
      <button onClick={resume}>{isRunning ? '' : 'Resume' }</button>
      <button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time)
      }}>Restart</button>
      <p style={{fontSize: '30px'}}>{isRunning ? 'Timer Activated' : 'Timer Paused'}</p>  
    </div>
    </>
  );
}

export default function ChessTimerRight() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <ChessTimeright expiryTimestamp={time} />
    </div>
  );
}