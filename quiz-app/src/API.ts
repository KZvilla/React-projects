//Types
import { Question, Difficulty } from "./components/types";
//Function that shuffle the array
import { shuffleArray } from "./utils";

export const fetchQuestions =async (amount:number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
};