"use strict";
var _lives;
class Player {
    constructor(firstName, lastName) {
        _lives.set(this, 10);
        this.firstName = firstName;
        this.lastName = lastName;
        this._score = 0;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get score() {
        return this._score;
    }
    set setScore(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        else {
            this._score = newScore;
        }
    }
}
_lives = new WeakMap();
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999999; // Now it can be accessed
    }
}
