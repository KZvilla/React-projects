import { Fragment, useState } from 'react';
import { Keyboard, SoundGroup1, SoundGroup2 } from './components/Keyboard';
import {DrumControle} from './components/DrumControle'
import './style/App.scss';

const soundsNameList = {
  heaterKit: 'Heater Kit',
  smoothPianoKit: 'Smooth Piano Kit'
};

const soundsTypeList = {
  heaterKit: SoundGroup1,
  powerothPianoKit: SoundGroup2
};
function App() {
  const [volume, setVolume] = useState(1);
  const [power, setpower] = useState(true);
  const [soundName, setSoundName] = useState("");
  const [soundsTypes, setSoundsTypes] = useState('heaterKit');
  const [soundsGroups, setSoundsGroups] = useState(soundsTypeList[soundsTypes]);

  const handlePower = () => {
    setpower(!power)
  }

  const handleVolume = (e) => {
    setVolume(e.target.value)
  }

  const handlePlay = (keyTrigger, music) => {
    setSoundName(music);
    const audioMed = document.getElementById(keyTrigger);
    audioMed.currentTime = 0;
    audioMed.play();
  }
  const changeSoundGroup = () => {
    setSoundName("");
    if (soundsTypes === 'heaterKit') {
      setSoundsTypes('smoothPianoKit');
      setSoundsGroups(soundsTypeList.smoothPianoKit);
    } else {
      setSoundsTypes('heaterKit');
      setSoundsGroups(soundsTypeList.heaterKit);
    }
  }

  const setAudioVolume = () => {
    const audioVolumeFix = soundsGroups.map((x) => document.getElementById(x.keyTrigger))
    audioVolumeFix.forEach(a => {
      if(a) {
        a.volume = volume;
      }
    });
    return null;
  }

  return (
    <Fragment>
      <div id="drum-machine" className="App">
        {setAudioVolume()}
        <div className="container">
          <div className="container__keys">
            <Keyboard 
            power={power}
            playSound={handlePlay} 
            soundsGroup={soundsGroups} 
            />
          </div>
          <div className="container__panel">
            <DrumControle
              name={soundName || soundsNameList[soundsTypes]}
              power={power}
              handlePower={handlePower}
              changeSoundGroup={changeSoundGroup}
              volume={volume}
              handleVolume={handleVolume}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
