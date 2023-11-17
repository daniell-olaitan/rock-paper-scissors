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

