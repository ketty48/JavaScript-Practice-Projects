const readline = require('readline');

const quizGame = [
    {
        question: "What is the correct way to call the random method on the Math global object?",
        options: ['Math.random()', 'Math(random)', 'random.Math()', 'math.random()'],
        answer: "Math.random()"
    },
    {
        question: "Which of the following is an example of a single line comment?",
        options: ['Is this a comment?', '// Is this a comment?', "console.log('Is this a comment?');", 'console.log()'],
        answer: '// Is this a comment?'
    },
    {
        question: "What is string interpolation?",
        options: ['Using template literals to embed variables into strings.', 'Printing a string to the console.', 'Joining multiple strings together using operators like +', 'Changing the value of a variable.'],
        answer: "Using template literals to embed variables into strings."
    },
    {
        question: "What is the correct way to declare a new variable that you can change?",
        options: ["let myName = 'Sloan';", "let myName: 'Sloan';", "myName = 'Sloan';"],
        answer: "let myName = 'Sloan';"
    }
];

let correctAnswer = 0;
let incorrectAnswer = 0;
let questionsAnswered = 0;
let displayedQuestions = [];

function displayQuestion() {
    // If all questions have been answered, display the final score and exit
    if (questionsAnswered === quizGame.length) {
        const totalPossibleScore = quizGame.length * 2; // Each question is worth 2 marks
        console.log(`All questions have been answered.`);
        console.log(`Final Score: ${correctAnswer} / ${totalPossibleScore}`);
        process.exit(); // Exit the program
    }

    // Choose a random question index that has not been displayed yet
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizGame.length);
    } while (displayedQuestions.includes(randomIndex));

    const randomQuestion = quizGame[randomIndex];

    console.log(randomQuestion.question);
    randomQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the number of your answer: ", (userAnswer) => {
        userAnswer = parseInt(userAnswer);

        // Check if the user's answer is valid
        if (userAnswer >= 1 && userAnswer <= randomQuestion.options.length) {
            const userOption = randomQuestion.options[userAnswer - 1];
            if (userOption === randomQuestion.answer) {
                console.log("Correct!");
                correctAnswer += 2;
            } else {
                console.log(`Incorrect! Correct answer is: ${randomQuestion.answer}`);
                incorrectAnswer++;
            }
        } else {
            console.log("Invalid input. Please enter a number corresponding to one of the options.");
        }

        questionsAnswered++;

        // Add the displayed question to the displayedQuestions array
        displayedQuestions.push(randomIndex);

        rl.close();

        // Continue to the next question
        displayQuestion();
    });
}

displayQuestion();
