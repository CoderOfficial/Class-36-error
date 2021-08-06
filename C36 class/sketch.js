var database,position;
var form, player, gameState;
var game;
var playerCount = 0;
function setup(){
    database = firebase.database();
    createCanvas(1000,500);
    game = new Game()
    game.getGameState();
    game.startGame();
}

function draw(){

}

