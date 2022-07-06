class Cards {
    constructor(suit, numFace, value) {
        this.suit = suit;
        this.numFace = numFace;
        this.value = value;
    }
}

let currentDeck = []

// let value = 0

function fillDeck() {
    let suit = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
    let numFace = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
    let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    for (let i = 0; i < suit.length; i++) {
        for (let y = 0; y < numFace.length; y++) {
            
            currentDeck.push(new Cards(suit[i], numFace[y], value[y]))
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
        this.player1Score = 0;
        this.player2Score = 0;
    }
            //compare index0 from player arrays
    
    startGame() {
        for(let i = 0; i < 26; i++) {
            if(player1Deck[0].value > player2Deck[0].value) {
                this.player1Score++;
                console.log(`Player1 played ${player1Deck[0]}, player2 played ${player2Deck[0]} Player1 wins the hand. Current score player1= ${player1Score} Player2= ${player2Score}`);
                player1Deck.shift();
                player2Deck.shift();
            } else if (player2Deck[0].value > player1Deck[0].value) {
                this.player2Score++;
                console.log(`Player1 played ${player1Deck[0]}, player2 played ${player2Deck[0]} Player2 wins the hand. Current score player1= ${player1Score} Player2= ${player2Score}`);
                player1Deck.shift();
                player2Deck.shift();
            } else {
                console.log(`Player1 played ${player1Deck[0]}, player2 played ${player2Deck[0]}. Tie!  Current score remains player1= ${player1Score}, player2= ${player2Score}`);
                player1Deck.shift();
                player2Deck.shift();
            }
        }
    }

}
let warGame = new playGame();
warGame.startGame();



