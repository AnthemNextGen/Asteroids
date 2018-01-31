var splashScreen = document.getElementById('splash');
var game = document.getElementById('main_game');
var game_over = document.getElementById('game_over');


function hideScene(mode){
  mode.style.display = 'none';
}

function showScene(scene){
  scene.style.display = 'block';
}

function setScene(scene){

  var ctx = scene.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI)
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
}


window.onload = function(){
    hideScene(game);
    hideScene(game_over);
    setScene(splashScreen);
    initScene(splashScreen);
}

function initScene(scene){
  scene.addEventListener('click', function(){
      alert('GAME SCREEN');
      hideScene(scene);
      showScene(game);
      StartGame(game);

  });
}

function StartGame(scene){
  var socket = io();
  var user = prompt('Enter Player Name');
  socket.emit('join', user);
  socket.on('join', function(user){
    alert(user + "  Connected");
  });
  scene.addEventListener('click', function(){
      alert('GAME OVER SCREEN');
      endGame();

  });
  var ctx = scene.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = 'aqua';
  ctx.fillRect(20, 20, 150, 100);
}

function endGame(){
  hideScene(game);
  hideScene(splashScreen);
  showScene(game_over);
}
