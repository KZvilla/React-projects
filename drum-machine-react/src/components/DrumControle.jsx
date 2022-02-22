export const DrumControle = function({name, power, handlePower, changeSoundGroup, volume, handleVolume}) { 
const volumeFix = Math.round(volume*100);
const powerFix = power ? "ON" : "OFF"; 
return (
  <div className="controle">
    <button className="container__panel--powerButton" onClick={handlePower}>Power: {powerFix}</button>
    <h2>Volume: {volumeFix}%</h2>
    <input
      max="1"
      min="0"
      step="0.01"
      type="range"
      value={volume}
      onChange={handleVolume}
    />
    <h2 id="display">{name}</h2>
    <button
      type="button"
      className="container__panel--resetButton"
      onClick={changeSoundGroup}
    >
      Change Sound Group
    </button>
  </div>
);
}