import {Fragment, useEffect, useState, useRef} from 'react';
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faArrowUp,faPlay,faPause,faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
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

const SessionType = styled.h3`
   grid-area: 3 / 1 / 4 / 3;
      text-align:center;
      background-color: #34568B;
      color: #F8F8FF;
`;
const SessionTitle  = function sessionTitle({onBreak}) {
  return( 
    <SessionType id={'timer-label'} className='display__sessionTitle'>{onBreak ? "Break" : "Session"}</SessionType>
    )};

    const audioSource = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
    function SelectorType({title, changeTime, type, time, formatTime, idIncrement ,idDecrement}) {
  const handleIdDown = (t) => {
    if(t ==='break') {
      return 'break-decrement'
    } return 'session-decrement'
  };
  const handleIdUp = (t) => {
    if(t ==='break') {
      return 'break-increment'
    } return 'session-increment'
  };
  const handleTitle = (t) =>{
    if(t ==='break') {
      return 'break-length'
    } return 'session-length'
  };
  const handleTime = (t)=>{
    if(t ==='break') {
      return time / 60;
    } return time / 60;
  };
  return (
    <BreakSessionControls>
      <Text>{title}</Text>
      <div className='time-sets'> 
        <Button 
        onClick={() => changeTime(-60, type)} 
        id={handleIdDown(type)}>
          <FontAwesomeIcon icon={faArrowDown} className={'arrow-down'} />
        </Button>
        <Text id={handleTitle(type)}>{handleTime(type)}</Text>
        <Button  
        onClick={() => changeTime(60, type)}
        id={handleIdUp(type)}
        >
          <FontAwesomeIcon icon={faArrowUp} className={'arrow-up'} />
        </Button>
      </div>
    </BreakSessionControls>
  );
}

export function App() {
  const [time, setTime] = useState(25*60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [sessionTime, setsessionTime] = useState(25*60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  
  let myAudio = useRef(null);
  useEffect(() => {
    if (time <= 0) {
      setOnBreak(true);
    } else if (!timerOn && time === breakTime) {
      setOnBreak(false);
    }
  }, [time, onBreak, timerOn, breakTime, sessionTime,]);

  const playSound = () => {
    myAudio.current.currentTime = 0;
    myAudio.current.play();
  }
  const toTimeFormat = (t) => {
    let minutes = Math.floor(t/60);
    let seconds = t % 60;
    return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
  };
  const changeTime = (n, type) =>{
    if (type ==='break'){
      if((breakTime <= 60 && n < 0) || breakTime >= 60 * 60) {
        return;
    }
      setBreakTime((p)=>p+n);
    } else {
      if ((sessionTime <= 60 && n < 0) || sessionTime >= 60 * 60){
        return;
      }
      setsessionTime((p)=>p+n);
      if (!timerOn){
        setTime(sessionTime + n);
      }
    }
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
    clearInterval(localStorage.getItem("interval-id"));
    setTime(25*60);
    setBreakTime(5*60);
    setsessionTime(25*60);
    myAudio.current.pause();
    myAudio.current.currentTime = 0;
    setTimerOn(false);
    setOnBreak(false);
  };
  return (
    <Fragment>
      <ClockZone className='noselect'>
        <h1 className='title'>25+5 Clock</h1>
        <div className={'break'} id={"break-label"}>
          <SelectorType 
          title={'Break Length'} 
          changeTime={changeTime} 
          type={'break'} 
          time={breakTime} 
          formatTime={toTimeFormat}
        />
        </div>
        <div className={'session'} id={"session-label"}>
          <SelectorType 
          title={'Session Length'} 
          changeTime={changeTime} 
          type={'session'} 
          time={sessionTime} 
          formatTime={toTimeFormat}
        />
        </div>
        <div className='display'>
          <SessionTitle 
          className={'display__sessionTitle'} 
          onBreak={onBreak}/>
          <h1 id={'time-left'} className='display__number'>{toTimeFormat(time)}</h1>
          <button id={'start_stop'} className={'display__pausePlay'} onClick={controlClock} >
          {!timerOn ? (<FontAwesomeIcon icon={faPlay} className={'display__pausePlay'} />
          ) : (<FontAwesomeIcon icon={faPause} className={'display__pausePlay'} />)}
          </button>
          <button id={"reset"} className={'display__reload'} onClick={globalReset}>
          <FontAwesomeIcon icon={faArrowRotateRight} className={'display__reload'} />
          </button>
        </div>
        <audio ref={myAudio} src={audioSource} id="beep" />
      </ClockZone>
    </Fragment>
  );
}
