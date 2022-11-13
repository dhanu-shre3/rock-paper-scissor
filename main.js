//cashing a dom
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
//he uses _span or _div to diffrentiate between span variables and other variables
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board"); //.score-board - because its a class
const result_div = document.querySelector(".result");
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

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS.");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES.");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("its a draw.");
            break;
                                        
    }
}

game("c");

function main(){
    rock_div.addEventListener('click', function(){
    game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })

}    //it will throw an error, 

main();