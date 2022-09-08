const Quiz = () => {
    const questions = [
        {
            questionText: "Thủ đô của Việt Nam là?",
            answerOptions: [
                { answerText: "Thành phố Hồ Chí Minh", isCorrect: false },
                { answerText: "Hải Phòng", isCorrect: false },
                { answerText: "Hà Nội", isCorrect: true },
                { answerText: "Đà Nẵng", isCorrect: false },
            ],
        },
        {
            questionText: "Quốc khánh nước cộng hòa XHCN Việt Nam là ngày nào?",
            answerOptions: [
                { answerText: "30/08", isCorrect: false },
                { answerText: "02/09", isCorrect: true },
                { answerText: "10/03", isCorrect: false },
                { answerText: "30/04", isCorrect: false },
            ],
        },
        {
            questionText: "Tỉnh có nhiều thành phố trực thuộc nhất là tỉnh nào",
            answerOptions: [
                { answerText: "Quảng Ninh", isCorrect: true },
                { answerText: "Đà Nẵng", isCorrect: false },
                { answerText: "Thừa Thiên Huế", isCorrect: false },
                { answerText: "Cần Thơ", isCorrect: false },
            ],
        },
        {
            questionText: "Quốc hoa của Việt Nam là gì?",
            answerOptions: [
                { answerText: "Hoa huệ", isCorrect: false },
                { answerText: "Hoa súng", isCorrect: false },
                { answerText: "Hoa mai", isCorrect: false },
                { answerText: "Hoa sen", isCorrect: true },
            ],
        },
    ];

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
        <div className="app">
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
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Quiz />);
