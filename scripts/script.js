function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function playerSelection() {
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

