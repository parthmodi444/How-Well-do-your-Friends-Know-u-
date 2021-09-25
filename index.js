
var readLineSync = require("readline-sync");
var score = 0;
function play(question, answer) {

  var userAnswer = readLineSync.question(question);
  if (userAnswer == answer) {
    console.log("You are right");
    score = score + 1;
  }
  else {
    console.log("You are wrong");

  }
  console.log("currentscore= ", score);
  console.log("*********************")

}
function Welcome() {
  var username = readLineSync.question("What is your name");
  console.log("Welcome " + username + " DO YOU KNOW PARTH MODI")
}
var highScores = [
  {
    name: "parth",
    score: 10
  },
  {
    name: "himanshu",
    score: 9
  }
];
var questions = [
  {
    question: "Where do i live ",
    answer: "Dombivli"
  },
  {
    question: "My fav superhero would be ",
    answer: "Shaktimaan"
  },
  {
    question: "Where do i work ",
    answer: "Jio"
  },
  {
    question:"My Fav actor ",
    answer:"Ranbir Kapoor"
  },
  {
    question:"My Favourite food",
    answer:"Pav Bhaji"
  }

];
Welcome();
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("Yay my  Score is = ", score);
console.log("These are the top scores, if you have more than these, please send me a screenshot!!");
for (var i = 0; i < highScores.length; i = i + 1) {
  var currentScore = highScores[i]
  console.log("Name=", currentScore.name, "\tScore=", currentScore.score)

}
