function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function getPlayerChoice() {
    const choices = ["rock", "scissors", "paper"];
    
    while (true) {
        const choice = prompt("Enter your choice", "e.g. rock").toLowerCase();
        
        for (const c of choices) {
            if (c === choice) {
                return choice;
            }
        }
    }
}

function playRound(playerSelection, computerSelection) {
    const rule = {
        rock: {scissors: 1, paper: -1},
        scissors: {rock: -1, paper: 1},
        paper: {rock: 1, scissors: -1}
    }

    if (playerSelection === computerSelection) {
        return 0;
    }
    
    return (rule[playerSelection][computerSelection]);
}

function game() {
    let message;
    let winner;
    let result;
    let placeHolder1;
    let placeHolder2;
    let placeHolder3;
    let player = 0;
    let computer = 0;
    
    for (let i = 0; i < 5; i++) {
        while (true) {
            const computerSelection = getComputerChoice();
            const playerSelection = getPlayerChoice();

            result = playRound(playerSelection, computerSelection);
            if (result === 0) {
                console.log("Tie!");
                console.log(`You (${player}) Vs Computer (${computer})`);
                continue;
            } 
            
            if (result === 1) {
                player++;
                placeHolder1 = "Won";
                placeHolder2 = playerSelection;
                placeHolder3 = computerSelection;
            } else {
                computer++;
                placeHolder1 = "Lose";
                placeHolder2 = computerSelection;
                placeHolder3 = playerSelection;
            }

            message = `You ${placeHolder1}! ${placeHolder2} beats ${placeHolder3}`;
            console.log(message);
            console.log(`You (${player}) Vs Computer (${computer})`);
            break;
        }
    }

    console.log("Game Over!");
    winner = player > computer ? "You" : "Computer";
    console.log(`${winner} Won!`);
    console.log(`You (${player}) Vs Computer (${computer})`);
}

game();