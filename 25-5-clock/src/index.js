import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

const GlobalSetting = createGlobalStyle`
 *{
   margin: 0; 
  border: 0; 
  padding: 0; 
  outline: none; 
  box-sizing: border-box;
  background-color: #272727;
 }
body {
  margin:auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:calc(8px + 2vmin);
  font-family: 'Roboto', sans-serif;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalSetting />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
