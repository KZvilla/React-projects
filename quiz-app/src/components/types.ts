//React toys
import { MouseEvent } from "react";
//Main App Types
export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };
//Components(props) Types
 export type TypesProps = {
    question: string;
    answers: string[];
    callback: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestion: number;
}
//Data Fetch Types
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
    answers: string[]
}
//Styles Types
export type ButtonWrapperProp = {
    correct: boolean;
    userClicked: boolean;
}

//Set constants
export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}