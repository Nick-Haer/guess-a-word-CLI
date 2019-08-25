const inquirer = require(`inquirer`)

let words = [`star`, `quasar`, `moon`, `earth`, `satellite`, `neptune`, `mercury`, `jupiter`];


function wordGuessGame () {
    inquirer.prompt({
        name: `guessALetter`,
        message: `Go ahead, guess a letter!`,
        type: `input`
    }).then((letter) => {
        console.log(letter)
    })
}

wordGuessGame()