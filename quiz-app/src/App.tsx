//React toys
import { Fragment, MouseEvent, useState } from "react";
//Components
import { QuestionCard } from "./components/QuestionCards";
//Data Fetch
import { fetchQuestions } from "./API";
//Types
import { AnswerObject, QuestionState,Difficulty } from "./components/types";
//Styles
import { GlobalStyle, Wrapper } from "./App.styles";

const TOTAL_QUESTION = 10;
export function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTriviaEasy = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(TOTAL_QUESTION, Difficulty.EASY);
    console.log(newQuestion);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startTriviaMedium = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(TOTAL_QUESTION, Difficulty.MEDIUM);
    console.log(newQuestion);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startTriviaHard = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(TOTAL_QUESTION, Difficulty.HARD);
    console.log(newQuestion);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswers = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users answers
      const answer = e.currentTarget.value;
      //check answer againts the correct one;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      //save answer in the array for user answer.
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    //Move the next question if is not the last Question
    const nextQuestionNumber = number + 1;
    if (nextQuestionNumber === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextQuestionNumber);
    }
  };
  const restart = () =>{
    setGameOver(true)
  }
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <h1>React/TypeScript QUIZ</h1>
        {gameOver ? (
          <>
            <button className="start easy" onClick={startTriviaEasy}>
              EASY
            </button>
            <button className="start medium" onClick={startTriviaMedium}>
              MEDIUM
            </button>
            <button className="start hard" onClick={startTriviaHard}>
              HARD
            </button>
          </>
        ) : null}
        {!gameOver ? <p className="score">SCORE: {score}</p> : null}
        {loading && <p className="">Loading question...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestion={TOTAL_QUESTION}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswers}
          ></QuestionCard>
        )}
        <div className="gameSelectors">
          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTION - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
          {!gameOver && !loading && userAnswers.length === number ? (
            <button disabled className="next disabled" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
          {!gameOver && !loading ? (
            <button className="restart" onClick={restart}>
              RESTART
            </button>
          ) : null}
        </div>
      </Wrapper>
    </Fragment>
  );
}
