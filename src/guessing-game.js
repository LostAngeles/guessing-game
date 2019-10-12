class GuessingGame {
    constructor() {
        this.middle = 0;
        this.first = 0;
        this.second = 0;
    }

    setRange(min, max) {
        this.first = min;
        this.second = max;
    }

    guess() {
        this.middle = Math.ceil((this.first+this.second)/2);
        return this.middle; 
    }

    lower() {
        this.second = this.middle;
        return this.second;       
    }

    greater() {
        this.first = this.middle;
        return this.first;
    }
}

module.exports = GuessingGame;
