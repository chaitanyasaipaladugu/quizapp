import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestion: 0,
  score: 0,
  showResult: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { isCorrect, totalQuestions } = action.payload;
      if (isCorrect) {
        state.score += 1;
      }
      if (state.currentQuestion + 1 < totalQuestions) {
        state.currentQuestion += 1;
      } else {
        state.showResult = true;
      }
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.score = 0;
      state.showResult = false;
    },
  },
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
