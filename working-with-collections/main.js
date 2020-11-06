/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create deck of cards
var cardRank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var cardSuit = ['C', 'D', 'H', 'S'];
var cardDeck = [];

for (var i = 0; i <= cardSuit.length - 1; i++) {
  for (var x = 0; x <= cardRank.length - 1; x++) {
    var RankSuit = cardRank[x] + cardSuit[i];
    cardDeck.push(RankSuit);
  }
}

// create 4 player objects
function Player(name, hand) {
  this.name = name;
  this.hand = hand;
  this.points = 0;
}

var player1 = new Player('Batman', []);
var player2 = new Player('Superman', []);
var player3 = new Player('Wonder Woman', []);
var player4 = new Player('Flash', []);

var playerGroup = [];
playerGroup.push(player1);
playerGroup.push(player2);
playerGroup.push(player3);
playerGroup.push(player4);

// create function to shuffle deck
function shuffleDeck(deck) {
  for (var i = 0; i <= deck.length - 1; i++) {
    var randomNumber = Math.floor(Math.random() * Math.floor(deck.length - 1));
    var placeholder = '';
    placeholder = deck[i];
    deck[i] = deck[randomNumber];
    deck[randomNumber] = placeholder;
  }
}

function dealCards() {
  var playDeck = cardDeck;
  shuffleDeck(playDeck);
  for (var i = 0; i <= playerGroup.length - 1; i++) {
    playerGroup[i].hand[0] = playDeck.pop();
    playerGroup[i].hand[1] = playDeck.pop();
  }
  console.log(playerGroup);
}

function determineWinner(playerGroup) {

}
