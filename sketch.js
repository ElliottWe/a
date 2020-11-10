var canvas;
var playerCount;
var database;
var gameState = 0;
var form, player, game, allPlayers;
function setup(){
   canvas = createCanvas(400,400);
    database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
   
}

