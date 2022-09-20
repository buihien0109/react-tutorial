import React from 'react'
import { questions } from './data';
import "./QuizApp.scss";

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);

    const checkAnswer = (answerText) => {
        // Lấy ra thông tin của câu trả lời
        let answer = questions[currentQuestion].answerOptions.find(
            (answer) => answer.answerText == answerText
        );

        // Kiểm tra câu trả lời có chính xác hay không
        // Nếu đúng thì tăng score lên
        if (answer.isCorrect) {
            setScore(score + 1);
        }

        // Tăng index của câu hỏi
        // Nếu là câu hỏi cuối => Show kết quả
        // Còn không thì hiển thị câu hỏi tiếp theo
        let nextQuestion = currentQuestion + 1;
        if (nextQuestion == questions.length) {
            setShowScore(true);
            return;
        }

        setCurrentQuestion(nextQuestion);
    };

    return (
        <div className="quiz-app">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/
                            {questions.length}
                        </div>
                        <div className="question-text">
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map(
                            (q, index) => (
                                <button
                                    onClick={() => checkAnswer(q.answerText)}
                                    key={index}
                                >
                                    {q.answerText}
                                </button>
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizApp