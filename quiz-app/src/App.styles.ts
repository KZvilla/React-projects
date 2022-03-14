import styled, {createGlobalStyle} from 'styled-components';
import bgimage from './img/bgimage.jpg'

export const GlobalStyle = createGlobalStyle`
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
*{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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
  }
  .score {
    user-select: none;
    color: #f8f8ff;
    font-size: calc(10px + 2vmin);
    margin: 0;
  }

  h1 {
    font-family: "Anton", sans-serif;
    color: #dd5e89;
    user-select: none;
    filter: drop-shadow(2px 2px #f8f8ff);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
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
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0, 255);
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
    }
  }
  .easy {
    position: fixed;
    top: 150px;
  }
  .medium {
    position: fixed;
    top: 250px;
  }
  .hard {
    position: fixed;
    top: 350px;
  }
  .next {
    border-radius: 10px 0 0 10px;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      margin: 8px 10px 12px;
      border: #f8f8ff solid 2px;
    }
  }
  .disabled {
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
    pointer-events: none;
  }
  .restart {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    border-radius: 0 10px 10px 0px;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      margin: 8px 10px 12px;
      border: #f8f8ff solid 2px;
    }
  }
`;