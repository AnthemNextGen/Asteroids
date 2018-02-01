var splashScreen = document.getElementById('splash');
var game = document.getElementById('main_game');
var game_over = document.getElementById('game_over');
var music = document.getElementById('music');


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
  ctx.font = "30px Arial";
  ctx.fillStyle = 'teal';
  ctx.fillText("ASTEROID NEXTGEN",innerWidth/3,innerHeight/5);
  ctx.fillRect(innerWidth/6,300, 200,75);
  ctx.fillRect(850,300, 200,75);
  ctx.fill();
  ctx.stroke();
  generateCircles(ctx);
}

function generateCircles(ctx){
    var posX = Math.random()*innerWidth;
    var posY = Math.random()*innerHeight;
    ctx.arc(posX++,posY++,30,0, Math.PI*2, false);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

window.onload = function(){
    music.play();
    hideScene(game)
    hideScene(game_over);
    setScene(splashScreen);
    initScene(splashScreen);
}

function initScene(scene){
  scene.addEventListener('click', function(){
      alert('GAME SCREEN');
      music.pause();
      hideScene(scene);
      showScene(game);
      StartGame(game);

  });
}

function StartGame(scene){
  var socket = io();
  music.play();
  var user = prompt('Enter Player Name');
  socket.emit('join', user);
  socket.on('join', function(user){
    alert(user + "  Connected");
    music.pause();
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
  generateCircles(ctx);
}

function endGame(){
  music.play();
  hideScene(game);
  hideScene(splashScreen);
  showScene(game_over);
}

