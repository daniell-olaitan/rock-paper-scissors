function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    const rule = {
        rock: { scissors: 1, paper: -1 },
        scissors: { rock: -1, paper: 1 },
        paper: { rock: 1, scissors: -1 }
    }

    if (playerSelection === computerSelection) {
        return 0;
    }

    return rule[playerSelection][computerSelection];
}

function game() {
    const round = document.querySelector('#round');
    const compScore = document.querySelector('#comp-score');
    const playerScore = document.querySelector('#player-score');
    const gameArea = document.querySelector('#game-area');
    const result = document.querySelector('#result');
    const computerAvatar = document.querySelector('#cmp-avatar');
    const playerAvatar = document.querySelector('#ply-avatar');
    const instruction = document.querySelector('#instn');
    const gameControl = document.querySelector('#ctrl');

    let gameStart = true;
    let pScore = 0;
    let cScore = 0;
    let roundDigit = 1;
    let activeLoser;
    let activeWinner;

    gameArea.addEventListener('click', (event) => {
        const computerSelection = getComputerChoice();
        const computerChoice = document.querySelector('#' + computerSelection + '-cmp');

        let playerSelection;
        let roundResult;

        if (['rock-ply', 'scissors-ply', 'paper-ply'].includes(event.target.id)) {
            switch (event.target.id) {
                case 'rock-ply':
                    playerSelection = 'rock';
                    break;

                case 'scissors-ply':
                    playerSelection = 'scissors';
                    break;

                case 'paper-ply':
                    playerSelection = 'paper';
            }

            roundResult = playRound(playerSelection, computerSelection);
            if (roundResult === 0) {
                result.textContent = "It's a Tie!";
                activeLoser && activeLoser.classList.remove('active-lose');
                activeWinner && activeWinner.classList.remove('active-win');
            } else {
                if (roundResult === 1) {
                    result.textContent = "You Win!";
                    activeLoser && activeLoser.classList.remove('active-lose');
                    activeWinner && activeWinner.classList.remove('active-win');
                    activeWinner = event.target.parentNode;
                    activeLoser = computerChoice;
                    pScore++;
                    playerScore.textContent = `${pScore}`;
                } else {
                    result.textContent = "You Lose!";
                    activeLoser && activeLoser.classList.remove('active-lose');
                    activeWinner && activeWinner.classList.remove('active-win');
                    activeWinner = computerChoice;
                    activeLoser = event.target.parentNode;
                    cScore++;
                    compScore.textContent = `${cScore}`;
                }

                activeWinner.classList.add('active-win');
                activeLoser.classList.add('active-lose');
            }

            if (cScore + pScore < 5) {
                roundDigit++;
                round.textContent = 'Round ' + roundDigit;
            }

            if (cScore + pScore === 5) {
                const gameOverMessage = document.createElement('h1');
                const playButton = document.createElement('button');
                gameOverMessage.textContent = cScore > pScore ? 'You Lose!' : 'You Win';
                playButton.textContent = "Play Again";
                playButton.classList.add('play-again-btn');
                activeLoser && activeLoser.classList.remove('active-lose');
                activeWinner && activeWinner.classList.remove('active-win');
                gameArea.innerHTML = '';
                gameArea.classList.add('game-over');
                gameArea.append(gameOverMessage, playButton);
                instruction.textContent = '';
                round.textContent = roundDigit + ' rounds played';


                playButton.addEventListener('click', () => {
                    cScore = 0;
                    pScore = 0;
                    compScore.textContent = `${cScore}`;
                    playerScore.textContent = `${pScore}`;
                    roundDigit = 1;
                    round.textContent = 'Round ' + roundDigit;
                    result.textContent = "Start!";
                    gameArea.innerHTML = '';
                    gameArea.append(computerAvatar, result, playerAvatar);
                    instruction.textContent = 'Choose your weapon';
                });
            }
        }
    });
}

game();