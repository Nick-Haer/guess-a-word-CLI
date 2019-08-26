const inquirer = require(`inquirer`)

const Word = require(`./Word`)

console.log(Word)

let words = [`star`, `quasar`, `moon`, `earth`, `satellite`, `neptune`, `mercury`, `jupiter`];

let guesses = 12;


function pickWord() {
    let randomNum = Math.floor(Math.random() * 8)
    let chosenWord = words[randomNum]
    return chosenWord;

}

let chooseWord = pickWord()
let theWord = new Word(chooseWord)
console.log(theWord)


function wordGuessGame() {

    inquirer.prompt({
        name: `guessALetter`,
        message: `Go ahead, guess a letter!`,
        type: `input`
    }).then((response) => {
        let pickedLetter = response.guessALetter
        console.log(pickedLetter)
        theWord.guessLetter(pickedLetter)
        let displayWord = theWord.showWord()
        if (displayWord.includes.pickedLetter) {
            console.log("Great, you guessed the right letter!")
        } else {
            console.log("Not this time!")
            guesses--;

            if (guesses === 0) {
                console.log("Oh no! You lose!")
                return 1;
            } else {
                console.log(`You have ${guesses} guesses left`)
            }
        }
        console.log(displayWord)
        if (!(displayWord.includes(`_`))) {
            console.log(`You Win! On to the next one!`)
            guesses = 12;
            chooseWord = pickWord()
            theWord = new Word(chooseWord)
            wordGuessGame()
        } else {
            wordGuessGame()
        }
    })


}

wordGuessGame()