let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "game was draw, Play Again ";
    msg.style.backgroundColor = "rgb(0, 0, 0)";


};
const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
};

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const playGame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compChoice = getCompChoice();
    console.log("comp choice=", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });

});