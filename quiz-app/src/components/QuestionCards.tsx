//React toys
import {FC} from "react";
//types 
import {TypesProps} from "./types";
//Styles
import { ButtonWrapper,Wrapper } from "./QuestionCard.styled";

export const QuestionCard: FC<TypesProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer===answer}
          userClicked={userAnswer?.answer===answer}
          >
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};