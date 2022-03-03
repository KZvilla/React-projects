import { Fragment, useState } from 'react';
import Select from 'react-select';
import './style/App.scss';

function checkUnit(fromUnit,setConversion,toUnit,number) {
  if (fromUnit === 'mm') {
    switch (toUnit) {
      case 'cm':
        setConversion(number/10)
        break;
      case 'dm':
        setConversion(number/100)
        break;
      case 'm':
        setConversion(number/1000)
        break;
      case 'dam':
        setConversion(number/10000)
        break;
      case 'hm':
        setConversion(number/100000)
        break;
      case 'km':
        setConversion(number/1000000)
        break;
      default:
          setConversion(number);
        break;
    }
  } else if (fromUnit === 'cm') {
    switch (toUnit) {
      case 'mm':
        setConversion(number*10)
        break;
      case 'dm':
        setConversion(number/10)
        break;
      case 'm':
        setConversion(number/100)
        break;
      case 'dam':
        setConversion(number/1000)
        break;
      case 'hm':
        setConversion(number/10000)
        break;
      case 'km':
        setConversion(number/100000)
        break;
      default:
          setConversion(number);
        break;
    }
  }else if (fromUnit === 'dm') {
    switch (toUnit) {
      case 'mm':
        setConversion(number*100)
        break;
      case 'cm':
        setConversion(number*10)
        break;
      case 'm':
        setConversion(number/10)
        break;
      case 'dam':
        setConversion(number/100)
        break;
      case 'hm':
        setConversion(number/1000)
        break;
      case 'km':
        setConversion(number/10000)
        break;
      default:
          setConversion(number);
        break;
    }
  }else if (fromUnit === 'm') {
    switch (toUnit) {
      case 'mm':
        setConversion(number*1000)
        break;
      case 'cm':
        setConversion(number*100)
        break;
      case 'dm':
        setConversion(number*10)
        break;
      case 'dam':
        setConversion(number/10)
        break;
      case 'hm':
        setConversion(number/100)
        break;
      case 'km':
        setConversion(number/1000)
        break;
      default:
          setConversion(number);
        break;
    }
  }else if (fromUnit === 'dam') {
    switch (toUnit) {
      case 'mm':
        setConversion(number*10000)
        break;
      case 'cm':
        setConversion(number*1000)
        break;
      case 'dm':
        setConversion(number*100)
        break;
      case 'm':
        setConversion(number*10)
        break;
      case 'hm':
        setConversion(number/10)
        break;
      case 'km':
        setConversion(number/100)
        break;
      default:
          setConversion(number);
        break;
    }
  }else if (fromUnit === 'hm') {
    switch (toUnit) {
      case 'mm':
        setConversion(number*100000)
        break;
      case 'cm':
        setConversion(number*10000)
        break;
      case 'dm':
        setConversion(number*1000)
        break;
      case 'm':
        setConversion(number/100)
        break;
      case 'dam':
        setConversion(number*10)
        break;
      case 'km':
        setConversion(number/10)
        break;
      default:
          setConversion(number);
        break;
    }
  }else 
    switch (toUnit) {
      case 'mm':
        setConversion(number*1000000)
        break;
      case 'cm':
        setConversion(number*100000)
        break;
      case 'dm':
        setConversion(number*10000)
        break;
      case 'm':
        setConversion(number*1000)
        break;
      case 'dam':
        setConversion(number*100)
        break;
      case 'hm':
        setConversion(number*10)
        break;
      default:
          setConversion(number);
        break;
  }
}

export function App() {
  const [conversion, setConversion] = useState('');
  const [fromUnit, setFromUnit] = useState('Select unit input');
  const [toUnit, setToUnit] = useState("Select unit output")
  const data = [
    {
      value: 'mm',
      label: "Milimeter"
    },
    {
      value: 'cm',
      label: "Centimeter"
    },
    {
      value: 'dm',
      label: "Decimeter"
    },
    {
      value: 'm',
      label: "Meter"
    },
    {
      value: 'dam',
      label: "Decameter"
    },
    {
      value: 'hm',
      label: "Hectometer"
    },
    {
      value: 'km',
      label: "Kilometer"
    }
  ];
  const hadleUnitsFrom = (e) => {
    setFromUnit(e.value);
  }
  const hadleUnitsTo = (e) => {
    setToUnit(e.value);
  }
  const handleConverter = (event) => {
    let number = event.target.value;
    console.log(number)
    console.log(fromUnit)
    console.log(toUnit)
    checkUnit(fromUnit,setConversion,toUnit,number)
  }
  return (
    <Fragment>
      <div className='App-container'>
        <div className='App-container__title'>
          <h1>Unit converter</h1>
        </div>
        <div className='App-container__conversor' >
          <label>Unit to convert:
            <input type="number" placeholder='example: 1400mm' className='inPut' onInput={e => handleConverter(e)}/>
          </label>
          <label>Result:
            <input className='outPut' value={conversion+toUnit} readOnly/>
          </label>
        </div>
        <div className='App-container__selector'> 
          <Select 
          placeholder={fromUnit}
          value={fromUnit}
          options={data}
          onChange={e=>hadleUnitsFrom(e)}
          >
          </Select>
          <Select  
          placeholder={toUnit}
          value={toUnit}
          options={data}
          onChange={e=>hadleUnitsTo(e)}
          >
          </Select>
        </div>
      </div>
    </Fragment>
  );
}
