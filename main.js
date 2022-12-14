//cashing a dom
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
//he uses _span or _div to diffrentiate between span variables and other variables
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board"); //.score-board - because its a class
const result_p = document.querySelector(".result > p"); //get the result in the paragraph tag
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");

const scissor_div = document.getElementById("s");

//cashing means storing something for future use
//this makes it easier to process instaed of writing the whole getelementbyid thingy
//thats why he used a const keyword

function getComputerChoice(){
    const choices = ['r', 'p', 's']
     // this method returns number btw 0.0 and 0.9, so to get btw 0 and 2 we multiply by 3
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function converToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice){
    //creating a variable to be more efficient
    const userChoice_div = document.getElementById(userChoice);
  userScore++;
  //getting into the span tag
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //const smallUserWord = "user".fontsize(3).sup();
//   result_p.innerHTML = converToWord(userChoice) + "beats" + converToWord(computerChoice) + "You Win!" 
//ES6
   result_p.innerHTML = `${converToWord(userChoice)}(user) beats ${converToWord(computerChoice)}(comp). You Win!`;
   userChoice_div.classList.add('green-glow');
   setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300)

// document.getElementById(userChoice).classList.add('green-glow') // gives all the classes on that specific element
// setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300)

}
//setTimeout function
//setTimeout(function() {console.log("hello")}, 1000)
//applying it to gree-glow class: fetches the class and removes it in millisecs

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)}(user) loses to ${converToWord(computerChoice)}(comp). You Lost:(`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
    //ES6: removing the function and replacing with arrow. As the function is a one line liner, remove the curly bracekts too

}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)}(user) equals ${converToWord(computerChoice)}(comp). its a draw :|`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 300)
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log("USER WINS.");
            win(userChoice, computerChoice)//function when the user wins
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log("USER LOSES.");
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log("its a draw.");
            draw(userChoice, computerChoice)
            break;

    }
}

game("c");

function main(){
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })

}    //it will throw an error, 

main();