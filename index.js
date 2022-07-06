class Cards {
    constructor(suit, numFace) {
        this.suit = suit;
        this.numFace = numFace;
    }
}

let currentDeck = []

function fillDeck() {
    let suit = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
    let numFace = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
    for (let i = 0; i < suit.length; i++) {
        for (let y = 0; y < numFace.length; y++) {
            currentDeck.push(new Cards(suit[i], numFace[y]))
        }
    }
}
fillDeck();

function shuffle() {
    for(let i = currentDeck.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = currentDeck[j];
        currentDeck[j] = currentDeck[i];
        currentDeck[i] = temp;
    }
}
shuffle();

let player1Deck = [];
let player2Deck = [];
let draw = 0;

while(currentDeck.length > 0) {
    draw = Math.random() * currentDeck.length;
    player1Deck.push(currentDeck.splice(draw, 1)[0]);

    draw = Math.random() * currentDeck.length;
    player2Deck.push(currentDeck.splice(draw,1)[0]);
}

class playGame {
    constructor() {
        this.player1Score = player1Score
        this.player2Score = player2Score
    }
    
}