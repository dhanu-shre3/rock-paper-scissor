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