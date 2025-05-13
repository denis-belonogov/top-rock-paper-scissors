

const choices = ['Rock', 'Paper', 'Scissors']
let humanScore = 0
let computerScore = 0


function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
        return prompt('Enter your choice: ')
}

function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
}

function lose(humanChoice, computerChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
}

function win(humanChoice, computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
}

function draw(){
        console.log('Draw!')
}

function playRound(humanChoice, computerChoice) {
        humanChoice = capitalizeFirstLetter(humanChoice.toLowerCase())
        computerChoice = capitalizeFirstLetter(computerChoice.toLowerCase())
        if (humanChoice == computerChoice) {
                draw()
        }
        else if (humanChoice == 'Rock') {
                if (computerChoice == 'Paper') {
                        lose(humanChoice, computerChoice)
                }
                else {
                        win(humanChoice, computerChoice)
                }
        }
        else if (humanChoice == 'Scissors') {
                if (computerChoice == 'Scissors') {
                        lose(humanChoice, computerChoice)
                }
                else {
                        win(humanChoice, computerChoice)
                }
        }
        else if (humanChoice == 'Paper') {
                if (computerChoice == 'Rock') {
                        lose(humanChoice, computerChoice)
                }
                else {
                        win(humanChoice, computerChoice)
                }
        }

}

for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Current score: ${humanScore} - ${computerScore}`)
}
