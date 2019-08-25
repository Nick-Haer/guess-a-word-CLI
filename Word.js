const Letter = require(`./index`)

class Word {
    constructor (wordToGuess) {
        let currentWord = [];
        this.currentWord = currentWord;
        for (let letter of wordToGuess) {
           currentWord.push(new Letter(letter))
        }
    }


    showWord () {
        for (let aLetter of this.currentWord) {
            let currentWordDisplay = []
            currentWordDisplay.push(aLetter.displayLetter())
            this.currentWord.length = 0;
            this.currentWord = [...currentWordDisplay];
        }
    }

    guessLetter (guessedChar) {
        for (let aLetter of this.currentWord) {
                aLetter.checkLetter(guessedChar)
        }
    }


}