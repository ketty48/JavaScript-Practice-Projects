const readline = require('readline');

// Define an array of quiz questions and their corresponding answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        answer: "William Shakespeare"
    }
];

// Initialize variables to track the score and questions
let correctAnswers = 0;
let incorrectAnswers = 0;
let questionsAnswered = 0;

// Function to display a random quiz question
function displayRandomQuizQuestion() {
    // If all questions have been answered, display the final marks and exit
    if (questionsAnswered === quizQuestions.length) {
        console.log("All questions have been answered.");
        console.log(`Final Score: Correct - ${correctAnswers}, Incorrect - ${incorrectAnswers}`);
        process.exit(); // Exit the program
    }

    // Generate a random index to select a question from the quizQuestions array
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);

    // Get the randomly selected question object from the quizQuestions array
    const randomQuestion = quizQuestions[randomIndex];

    // Display the question
    console.log(randomQuestion.question);

    // Display the multiple-choice options
    randomQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });

    // Create an interface for reading input from the console
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask for user input
    rl.question("Enter the number of your answer: ", (userAnswer) => {
        userAnswer = parseInt(userAnswer);

        // Check if the user's answer is valid
        if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= randomQuestion.options.length) {
            const userSelectedOption = randomQuestion.options[userAnswer - 1];
            if (userSelectedOption === randomQuestion.answer) {
                console.log("Correct answer!");
                correctAnswers += 2; // Increment by 2 for correct answer
            } else {
                console.log("Incorrect answer.");
                incorrectAnswers++;
            }
        } else {
            console.log("Invalid input. Please enter a number corresponding to one of the options.");
        }

        // Increment the number of questions answered
        questionsAnswered++;

        // Display the current score
        console.log(`Score: Correct - ${correctAnswers}, Incorrect - ${incorrectAnswers}`);

        // Close the interface
        rl.close();

        // Display the next question
        displayRandomQuizQuestion();
    });
}

// Example usage: Display a random quiz question
displayRandomQuizQuestion();
