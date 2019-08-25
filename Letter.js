const inquirer = require(`inquirer`)

class Letter {
    constructor (aLetter) {
        this.hiddenLetter = aLetter
        this.guessed = false;
    }

    displayLetter () {
        if (this.guessed === true) {
            return this.hiddenLetter
        } else {
            return `_`
        }
    }

    checkLetter (guess) {
        if (guess === this.hiddenLetter) {
            this.guessed = true;
        }
    }
}

exports = Letter

