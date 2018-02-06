var splashScreen = document.getElementById('splash');
var game = document.getElementById('main_game');
var game_over = document.getElementById('game_over');

var video = document.getElementById('video')

function setScene(scene) {
  var ctx = requestContext(scene);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.beginPath();
  ctx.font = "30px Arial";
  ctx.fillStyle = 'teal';
  // ctx.fillText("NEXTGEN ASTEROIDS",innerWidth/3,innerHeight/5);
  ctx.fillRect(innerWidth/6,400, 200,75);
  ctx.closePath();
  ctx.fillRect(850,400, 200,75);
  ctx.fill();
  ctx.stroke();
  ctx.textAlign = "center";
  drawText(splashScreen, "NEXTGEN ASTEROIDS", ctx.canvas.width/2, innerHeight / 5,"70px Lucida Console");
  drawText(splashScreen, "WELCOME!", ctx.canvas.width/2, innerHeight / 3,"50px Lucida Console");
  drawText(splashScreen, "Press SPACE to Start", ctx.canvas.width/2, innerHeight / 1.5,"16px Lucida Console");
  drawText(splashScreen, "copyright © 2018, NextGen Broker Team", ctx.canvas.width/2, innerHeight / 1.1,"12px Lucida Console");
  //generateCircles(splashScreen);
  //animate();
  ctx.fillStyle = 'teal';
  drawShip(splashScreen);   // Draw ship on Splash screen
}

window.onload = function () {
  hideScene(game);
  hideScene(game_over);
  setScene(splashScreen);
  initScene(splashScreen);
}

function initScene(scene) {
  playMusic(url);
  document.addEventListener('keyup', function (event) {
    if (event.keyCode == 32) {
      hideScene(scene);
      showScene(game);
      hideElement(video)
      StartGame(game);
      
    }

  });
}

function StartGame(scene) {
  var socket = io();
  var user = prompt('Enter Player Name');
  socket.emit('join', user);
  socket.on('join', function (user) {
    alert(user + "  Connected");
    //drawShip(main_game);
    pauseMusic(url); // pause music will be called after ship is drawn and game ready to start
  });
  scene.addEventListener('click', function () {
    alert('GAME OVER SCREEN');
    endGame();

  });
  var ctx = requestContext(main_game);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = 'teal';
  drawShip(main_game);
}

function endGame() {
  playMusic(url);
  hideScene(game);
  hideScene(splashScreen);
  showScene(game_over);
}

function hideVideo(){
  //alert("inside hide")
  //$("#video").hide()
  document.getElementById("video").style.display = "none"
}