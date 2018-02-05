var splashScreen = document.getElementById('splash');
var game = document.getElementById('main_game');
var game_over = document.getElementById('game_over');


function setScene(scene){
  var ctx = requestContext(scene);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.beginPath();
  ctx.font = "30px Arial";
  ctx.fillStyle = 'teal';
  //ctx.fillText("ASTEROID NEXTGEN",innerWidth/3,innerHeight/5);
  ctx.fillRect(innerWidth/6,400, 200,75);
  ctx.closePath();
  ctx.fillRect(850,400, 200,75);
  ctx.fill();
  ctx.stroke();
  drawText(splashScreen, "ASTROID NEXTGEN", innerWidth/3, innerHeight/5);
  drawText(splashScreen, "PRESS SPACE KEY TO START GAME", innerWidth/5,innerHeight/2);
  //generateCircles(splashScreen);
  //animate();
  ctx.fillStyle = 'teal';
  drawShip(splashScreen);   // Draw ship on Splash screen
}

window.onload = function(){
    hideScene(game);
    hideScene(game_over);
    setScene(splashScreen);
    initScene(splashScreen);
}

function initScene(scene){
  document.addEventListener('keyup', function(event){
      if(event.keyCode == 32){
        hideScene(scene);
        showScene(game);
        StartGame(game);
    }

  });
}

function StartGame(scene){
  var socket = io();
  var user = prompt('Enter Player Name');
  socket.emit('join', user);
  socket.on('join', function(user){
    alert(user + "  Connected");
    //drawShip(main_game);
  });
  scene.addEventListener('click', function(){
      alert('GAME OVER SCREEN');
      endGame();

  });
  var ctx = requestContext(main_game);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = 'teal';
  drawShip(main_game);
}

function endGame(){
  hideScene(game);
  hideScene(splashScreen);
  showScene(game_over);
}
