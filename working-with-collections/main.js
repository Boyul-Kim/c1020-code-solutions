/* global _ */
/* eslint-disable no-console */

// Note: Decided to try challenge without the use of Lodash - Will come back in future to try again utilizing Lodash

console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create deck of cards
function createDeck() {
  var cardRank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var cardSuit = ['C', 'D', 'H', 'S'];
  var cardDeck = [];

  for (var i = 0; i <= cardSuit.length - 1; i++) {
    for (var x = 0; x <= cardRank.length - 1; x++) {
      var RankSuit = cardRank[x] + cardSuit[i];
      cardDeck.push(RankSuit);
    }
  }
  return cardDeck;
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

var playerGroupFull = [];
playerGroupFull.push(player1);
playerGroupFull.push(player2);
playerGroupFull.push(player3);
playerGroupFull.push(player4);

var playerGroupTie = [];
var tieGame = false;

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

function dealCards(playerGroup) {
  var playDeck = createDeck();
  shuffleDeck(playDeck);
  for (var i = 0; i <= playerGroup.length - 1; i++) {
    playerGroup[i].hand[0] = playDeck.pop(); // hard set index so that the hand will only be 2 cards max each round
    playerGroup[i].hand[1] = playDeck.pop();
  }
  console.log(playerGroup);
}

function determineWinner(playerGroup) {
  var winner = '';
  var winnerPoints = 0;
  var tie = 0;
  // allocates points based on the 2 cards each player has
  for (var i = 0; i <= playerGroup.length - 1; i++) {
    for (var x = 0; x <= playerGroup[i].hand.length - 1; x++) {
      if (playerGroup[i].hand[x].includes('A')) {
        playerGroup[i].points += 11;
      } else if (playerGroup[i].hand[x].includes('K') || playerGroup[i].hand[x].includes('Q') || playerGroup[i].hand[x].includes('J')) {
        playerGroup[i].points += 10;
      } else if (playerGroup[i].hand[x].includes('10')) {
        playerGroup[i].points += 10;
      } else if (playerGroup[i].hand[x].includes('9')) {
        playerGroup[i].points += 9;
      } else if (playerGroup[i].hand[x].includes('8')) {
        playerGroup[i].points += 8;
      } else if (playerGroup[i].hand[x].includes('7')) {
        playerGroup[i].points += 7;
      } else if (playerGroup[i].hand[x].includes('6')) {
        playerGroup[i].points += 6;
      } else if (playerGroup[i].hand[x].includes('5')) {
        playerGroup[i].points += 5;
      } else if (playerGroup[i].hand[x].includes('4')) {
        playerGroup[i].points += 4;
      } else if (playerGroup[i].hand[x].includes('3')) {
        playerGroup[i].points += 3;
      } else if (playerGroup[i].hand[x].includes('2')) {
        playerGroup[i].points += 2;
      }
    }
  }
  // determines winners based on points
  for (var y = 0; y <= playerGroup.length - 1; y++) {
    if (playerGroup[y].points >= winnerPoints) {
      winnerPoints = playerGroup[y].points;
      winner = playerGroup[y].name;
    }
  }

  for (var a = 0; a <= playerGroup.length - 1; a++) {
    if (playerGroup[a].points === winnerPoints) {
      tie++;
      playerGroupTie.push(new Player(playerGroup[a].name, []));
    }
  }

  if (tie < 2) {
    console.log(winner, 'won!');
  } else {
    console.log('tie!');
    tieGame = true;
  }
}

// all points go back to zero for next round
function resetPoints(playerGroup) {
  for (var i = 0; i <= playerGroup.length - 1; i++) {
    playerGroup[i].points = 0;
  }
}

// simulates actual game
function playGame(group) {
  resetPoints(group);
  dealCards(group);
  determineWinner(group);
}

playGame(playerGroupFull);

if (tieGame === true) {
  console.log('enter tie game');
  playGame(playerGroupTie);
}
console.log('game ended');
