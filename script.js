choice = ['rock', 'paper', 'scissor']
let ps = 0, cs = 0;
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase()
    let c = computerSelection;
    if (p === "rock") {
        if (c === "scissor") {
            ps++
            return (`You win! ${p} beats ${c}`)

        }
        else if (c === "paper") {
            cs++
            return (`You lose! ${c} beats ${p}`)

        }
    }
    if (p === "paper") {
        if (c === "rock") {
            ps++
            return (`You win! ${p} beats ${c}`)
        }
        else if (c === "scissor") {
            cs++
            return (`You lose! ${c} beats ${p}`)
        }
    }
    if (p === "scissor") {
        if (c === "paper") {
            ps++
            return (`You win! ${p} beats ${c}`)

        }
        else if (c === "rock") {
            cs++
            return (`You lose! ${c} beats ${p}`)

        }
    }
    if (p === c) {
        return ("It's a tie!")
    }
}
function game() {
    const playerSelection = prompt("Enter your choice :")
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    let score = `Player - ${ps}, Computer - ${cs}`;
    alert(result)
    console.log(result)
    alert(score)
    console.log(score)
}
for (let i = 0; i < 5; i++) {
    game()
}

if (ps > cs) {
    alert(`You won by ${ps} - ${cs}`)
    console.log(`You won by ${ps} - ${cs}`)
}

else if (cs > ps) {
    alert(`You lost by ${cs} - ${ps}`)
    console.log(`You lost by ${cs} - ${ps}`)
}
else {
    alert(`It's a tie ${ps} - ${cs}`)
    console.log(`It's a tie ${ps} - ${cs}`)
}