
import styled from 'styled-components';
export const Wrapper = styled.div`
    max-width: 700px;
    background: #DD5E89;
    border-radius: 10px;
    border: 2px solid #F8F8FF;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 255);
    text-align: center;
    @media (max-width: 768px) {
      max-width: 368px;
}
`;

type ButtonWrapperProp = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProp>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: calc(10px + 2vmin);
    width:100%;
    height: 45px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #9eb25d, #b7d84a)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #A52A2A, #c52020)"
        : "linear-gradient(90deg, #56cff, #6eafb4)"};
    border: 3px solid
      ${({ correct, userClicked }) =>
        (correct ? "#9eb25d" : !correct && userClicked ? "#A52A2A" : "#F8F8FF")};
    border-radius: 5px;
    color: #272727;
    text-shadow: 0px 1px 0px rgba( 0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {

}
`;
