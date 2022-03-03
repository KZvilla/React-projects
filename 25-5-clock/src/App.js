import {Fragment, useEffect, useState} from 'react';
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faArrowUp,faPlay,faPause,faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import sound from './breakSound.wav';

const ClockZone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50vh;
  width: 50vw;
  display: grid;
  justify-items:center;
  align-items:center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: #F8F8FF;
  background-color: #34568B;
  border:solid #F8F8FF 2px;
  border-radius:25px;
  transform: translate(-50%, -50%);
  .title{
    grid-area: 1 / 1 / 2 / 3;
    background-color: #34568B;
  };
  .break{
    grid-area: 2 / 1 / 3 / 2; 
  };
  .session{
    grid-area: 2 / 2 / 3 / 3;
  };
  .display{
    margin:1rem;
    padding:0.375em;
    border:solid #F8F8FF 2px;
    border-radius:25px;
    background-color: #34568B;
    grid-area: 3 / 1 / 4 / 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    &__number {
      background-color: #34568B;
      grid-area: 1 / 1 / 2 / 3;
      align-self: center;
      justify-self: center;
    }
    &__pausePlay {
      background-color: #34568B;
      color: #F8F8FF;
      grid-area: 2 / 1 / 3 / 2;
      align-self: center;
      justify-self: center;
      &:hover{
      color:#E9967A;
      }
    }
    &__reload {
      background-color: #34568B;
      color: #F8F8FF;
      grid-area: 2 / 2 / 3 / 3;
      align-self: center;
      justify-self: center;
      &:hover{
      color:#E9967A;
      }
    }
  }
`;

const BreakSessionControls =styled.div`
  color: #F8F8FF;
  background-color: #34568B;
  grid-area: 2 / 1 / 3 / 2; 
  .time-sets{
    display:flex;
    text-align:center;
    justify-content:center;
    gap: 30px 20px;
    background-color: #34568B;
  }
`;
const Text = styled(BreakSessionControls)`
`;
const Button = styled(BreakSessionControls)`
.arrow-down{
  background-color: #34568B;
  &:hover{
    color:#E9967A;
  }
}
.arrow-up{
  background-color: #34568B;
  &:hover{
    color:#E9967A;
  }
}
`;
function SelectorType({title, changeTime, type, time, formatTime}) {
  return (
    <BreakSessionControls>
      <Text>{title}</Text>
      <div className='time-sets'> 
        <Button onClick={() => changeTime(-60, type)}>
          <FontAwesomeIcon icon={faArrowDown} className={'arrow-down'} />
        </Button>
        <Text>{formatTime(time)}</Text>
        <Button  onClick={() => changeTime(60, type)}>
          <FontAwesomeIcon icon={faArrowUp} className={'arrow-up'} />
        </Button>
      </div>
    </BreakSessionControls>
  );
}


export function App() {
  const [time, setTime] = useState(5);
  const [breakTime, setBreakTime] = useState(3);
  const [sessionTime, setsessionTime] = useState(5);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = useState( new Audio(sound));
  
  useEffect(() => {
    if (time <= 0) {
      setOnBreak(true);
    } else if (!timerOn && time === breakTime) {
      setOnBreak(false);
    }
  }, [time, onBreak, timerOn, breakTime, sessionTime,]);

  const playSound = () => {
    breakAudio.currentTime = 0;
    breakAudio.play();
  }

  const toTimeFormat = (t) => {
    let minutes = Math.round(t/60);
    let seconds = t % 60;
    return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
  };
  const changeTime = (n, type) =>{
    if (type ==='break' && breakTime > 0){
      setBreakTime((p)=>p+n);
    } else if (type ==='session' && sessionTime > 0){
      setsessionTime((p)=>p+n);
      if (!timerOn){
        setTime(sessionTime + n);
      }
    } else singleReset(type);
  };
  const controlClock = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;
    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setTime((prev) => {
            if (prev <= 0 && !onBreakVariable) {
              playSound();
              setOnBreak(true);
              onBreakVariable = true;
              return breakTime;
            } else if (prev <= 0 && onBreakVariable) {
              playSound();
              onBreakVariable = false;
              setOnBreak(false);
              return sessionTime;
            } 
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("interval-id", interval);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
  };


  const globalReset = () =>{
    setTime(25*60);
    setBreakTime(5*60);
    setsessionTime(25*60);
  }
  const singleReset = (type) =>{
    if (type === 'break') {
      setBreakTime(5*60);
    } else {
      setsessionTime(25*60);
      setTime(25*60);
    }
  }
  return (
    <Fragment>
      <ClockZone className='noselect'>
        <h1 className='title'>25+5 Clock</h1>
        <div className={'break'}>
          <SelectorType title={'Break Lenght'} 
          changeTime={changeTime} 
          type={'break'} 
          time={breakTime} 
          formatTime={toTimeFormat} 
        />
        </div>
        <div className={'session'}>
          <SelectorType title={'Session Lenght'} 
          changeTime={changeTime} 
          type={'session'} 
          time={sessionTime} 
          formatTime={toTimeFormat}
        />
        </div>
        <div className='display'>
          <h3>{onBreak ? "Break" : "Session"}</h3>
          <h1 className='display__number'>{toTimeFormat(time)}</h1>
          <button className={'display__pausePlay'} onClick={controlClock} >
          {!timerOn ? (<FontAwesomeIcon icon={faPlay} className={'display__pausePlay'} />
          ) : (<FontAwesomeIcon icon={faPause} className={'display__pausePlay'} />)}
          </button>
          <button  className={'display__reload'} onClick={globalReset}>
          <FontAwesomeIcon icon={faArrowRotateRight} className={'display__reload'} />
          </button>
        </div>
      </ClockZone>
    </Fragment>
  );
}
