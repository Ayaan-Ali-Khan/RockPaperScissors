let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

function genCompChoice(){
    const options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random()*3)];
    return compChoice;
};
function draw(){
    console.log("Game was draw")
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}
function showWinner(userWin,userChoice,compChoice){
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`You Win! ${userChoice} beats ${compChoice}`);
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log(`You lose ${compChoice} beats ${userChoice}`);
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
function playGame(userChoice){
    console.log(`User choice = ${userChoice}`);
    let compChoice = genCompChoice();
    console.log(`Comp choice = ${compChoice}`);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false : true;
        }
        else if(userChoice==="scissors"){
            userWin = compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});