<div align="center">

# QuizApp

Lightweight quiz application built with React and Redux Toolkit. Includes a modern dark UI, progress bar, and results summary.

</div>

## Features

- Interactive multiple-choice questions
- Progress bar showing current question out of total
- Score tracking with result summary and restart
- Clean dark theme with responsive card layout

## Tech Stack

- React 19
- Redux Toolkit + React Redux
- Create React App tooling

## Getting Started

### Prerequisites

- Node.js >= 18 and npm

### Installation

```bash
git clone <your-fork-or-repo-url>
cd quizapp
npm install
```

### Development

```bash
npm start
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
```

Outputs optimized assets to the `build/` directory.

## Project Structure

```
quizapp/
  public/
  src/
    components/
      Question.js      # Question view with progress bar and options
      Result.js        # Results view with score and restart
    redux/
      quizSlice.js     # State: currentQuestion, score, showResult
      store.js         # Redux store configuration
    App.js             # Routes between Question and Result
    index.css          # Theme and UI styles (dark mode)
    index.js           # App bootstrap
  package.json
```

## How It Works

- `quizSlice.js` manages quiz state. `answerQuestion` updates score and advances question until the result screen is shown. `resetQuiz` restarts the quiz.
- `Question.js` dispatches `answerQuestion({ isCorrect, totalQuestions })` and renders a progress bar.
- `Result.js` shows score and percent with an option to restart.

## Customization

- Add questions in `App.js` by extending the `questions` array.
- Tweak UI in `src/index.css` (`.card`, `.btn`, `.progress`, etc.).

## Scripts

- `npm start` - run in development
- `npm run build` - production build
- `npm test` - CRA tests (none customized yet)

## License

MIT
