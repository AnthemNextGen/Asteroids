var splashScreen = document.getElementById('splash');
var game = document.getElementById('main_game');
var game_over = document.getElementById('game_over');
var music = document.getElementById('music');


function hideScene(mode) {
  mode.style.display = 'none';
}

function showScene(scene) {
  scene.style.display = 'block';

}
function setScene(scene) {
  var ctx = scene.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.beginPath();
  ctx.font = "30px Arial";
  ctx.fillStyle = 'teal';
  ctx.fillText("ASTEROID NEXTGEN", innerWidth / 3, innerHeight / 5);
  ctx.fillRect(innerWidth / 6, 300, 200, 75);
  ctx.fillRect(850, 300, 200, 75);
  ctx.fill();
  ctx.stroke();
  //generateCircles(splashScreen);
  //animate();
}

window.onload = function () {
  play(music);
  hideScene(game)
  hideScene(game_over);
  setScene(splashScreen);
  initScene(splashScreen);
}

function initScene(scene) {
  scene.addEventListener('click', function () {
    alert('GAME SCREEN');
    pause(music);
    hideScene(scene);
    showScene(game);
    StartGame(game);

  });
}

function StartGame(scene) {
  var socket = io();
  play(music);
  var user = prompt('Enter Player Name');
  socket.emit('join', user);
  socket.on('join', function (user) {
    alert(user + "  Connected");
    pause(music);
  });
  scene.addEventListener('click', function () {
    alert('GAME OVER SCREEN');
    endGame();

  });
  var ctx = requestContext(scene);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = 'aqua';
  ctx.fillRect(20, 20, 150, 100);
  generateCircles(ctx);
}

function endGame() {
  play(music);
  hideScene(game);
  hideScene(splashScreen);
  showScene(game_over);
}

