

const choices = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0
let humanChoice = ''

function updateScore() {
        const score = document.getElementById('score')
        score.textContent = `Score: ${humanScore} - ${computerScore}`
}

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
        const result = document.getElementById('result')
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore += 1
}

function win(humanChoice, computerChoice) {
        const result = document.getElementById('result')
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore += 1
}

function draw(){
        const result = document.getElementById('result')
        result.textContent = 'Draw!'
}

function reset(){
        humanScore = 0
        computerScore = 0
        updateScore()
        const gameOver = document.querySelector('#game-over > button')
        gameOver.remove()
        const gameOverText = document.getElementById('game-over-text')
        gameOverText.textContent = ''
        const result = document.getElementById('result')
        result.textContent = ''
}

function gameOver() {
        const gameOverText = document.getElementById('game-over-text')
        if (humanScore == 5){
                gameOverText.textContent = `Congratulations! You've won!`

        }
        if (computerScore == 5){
                gameOverText.textContent = `Sadly, you've lost :(`
        }
        const gameOver = document.getElementById('game-over')
        const newGameBtn = document.createElement('button')
        newGameBtn.textContent = 'New Game'
        newGameBtn.addEventListener('click', reset)
        gameOver.appendChild(newGameBtn)

}


function playRound(humanChoice, computerChoice) {
        if (humanScore < 5 && computerScore < 5){
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
                updateScore()
                if (humanScore == 5 || computerScore == 5){
                        gameOver()
                }
        }
}

updateScore()

for (let i = 0; i < choices.length; i++) {
        let button = document.getElementById(choices[i])
        button.addEventListener('click', () => {
                humanChoice = choices[i];
                playRound(humanChoice, getComputerChoice())
        })
}

//for (let i = 0; i < 5; i++){
       //playRound(getHumanChoice(), getComputerChoice())
        //console.log(`Current score: ${humanScore} - ${computerScore}`)
//}


