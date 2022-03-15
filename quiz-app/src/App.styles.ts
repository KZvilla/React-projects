import styled, {createGlobalStyle} from 'styled-components';
import bgimage from './img/bgimage.jpg'

export const GlobalStyle = createGlobalStyle`
* {
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
html {
    height: 100vh;
    overflow: hidden;
}
body {
    background-image: url(${bgimage});
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    color: #272727;
}
span {
    color: #272727;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #f8f8ff;
  }

  .number {
    user-select: none;
    display: inline-block;
    border-radius: 5px;
    background-color: #f8f8ff;
    width: auto;
    padding: 0.875rem;
    color: #272727;
  }
  .question {
    position: relative;
    user-select: none;
    left: -22px;
    background-color: #f8f8ff;
    width: 700px;
    padding: 0.875rem;
    color: #272727;
    font-size: calc(10px + 2vmin);
  }
  .score {
    user-select: none;
    color: #f8f8ff;
    font-size: calc(10px + 2vmin);
    margin: 0;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #dd5e89;
    border-top: #f8f8ff 2px solid;
    border-left: #f8f8ff 2px solid;
    border-right: #f8f8ff 2px solid;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25 );
  }

  h1 {
    background: linear-gradient(
      to right,
      #dd5e89 0%,
      #f7bb97 51%,
      #dd5e89 100%
    );
    filter: drop-shadow(6px 6px 16px #272727);
    padding: 0 5px 0 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 255);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 255);
    font-family: "Anton", sans-serif;
    color: #f8f8ff;
    user-select: none;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
  }
  .start,
  .next,
  .restart {
    cursor: pointer;
    background: linear-gradient(
      to right,
      #dd5e89 0%,
      #f7bb97 51%,
      #dd5e89 100%
    );
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    border: #dd5e89;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #f8f8ff;
    transition: box-shadow 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: margin 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .start {
    position: absolute;
    max-width: 200px;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      margin: 8px 10px 12px;
      border: #f8f8ff solid 2px;
    }
    &.easy {
      position: fixed;
      top: 150px;
    }
    &.medium {
      position: fixed;
      top: 250px;
    }
    &.hard {
      position: fixed;
      top: 350px;
    }
  }
  .next {
    border-radius: 10px 0 0 10px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      margin: 8px 10px 12px;
      border: #f8f8ff solid 2px;
    }
    &.disabled {
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
      filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
      pointer-events: none;
    }
  }
  .restart {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    border-radius: 0 10px 10px 0px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.25);
      margin: 8px 10px 12px;
      border: #f8f8ff solid 2px;
    }
  }
  @media (max-width: 768px) {
    .question {
      position: relative;
      left: -22px;
      width: 368px;
    }
    h1 {
      display: inline-block;
      font-size: calc(35px + 2vmin);
      width: 100%;
    }
  }
`;