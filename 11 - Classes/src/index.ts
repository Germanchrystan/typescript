class Player {
    #lives = 10;
    // We must specify types for properties before constructor
    // Both names can be readonly
    public readonly firstName: string;
    public readonly lastName: string;
    protected _score: number; // Private property
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._score = 0;
    }
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    
    get score() {
        return this._score;
    }
    
    set setScore(newScore: number) {
        if(newScore < 0) {
            throw new Error("Score cannot be negative")
        } else {
            this._score = newScore;
        }
    }
}

class SuperPlayer extends Player { 
    isAdmin: boolean = true;
    maxScore(){
        this._score = 999999999; // Now it can be accessed
    }
}