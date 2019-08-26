const Letter = require(`./Letter`)
console.log(Letter)

class Word {
    constructor(wordToGuess) {
        let currentWord = [];
        this.currentWord = currentWord;
        for (let letter of wordToGuess) {
            currentWord.push(new Letter(letter))
        }
    }


    showWord() {
        let currentWordDisplay = []
        for (let aLetter of this.currentWord) {
            currentWordDisplay.push(aLetter.displayLetter())
        }
        return (currentWordDisplay)

    }

    guessLetter(guessedChar) {
        for (let aLetter of this.currentWord) {
            aLetter.checkLetter(guessedChar)
        }
    }


}

module.exports = Word;