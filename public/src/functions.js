
function hideScene(mode){
  mode.style.display = 'none';
}

function showScene(scene){
  scene.style.display = 'block';

}

var x = 200;
function animate() {
  var ctx = requestContext(splashScreen);
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, 200, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'blue';
  ctx.stroke();
  x += 1;
}

function generateCircles(scene) {
  var ctx = requestContext(splashScreen);
  requestAnimationFrame(generateCircles);
  //ctx.clearRect(0, 0, innerWidth, innerHeight);  Don't call this here: Romoves other components on screen
  var posX = Math.random() * innerWidth;
  var posY = Math.random() * innerHeight;
  ctx.arc(posX, posY, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'red';
  ctx.stroke();
  posX += 1;
}


function requestContext(scene) {
  if (scene.getContext)
    return scene.getContext('2d');
  return false;
}

// Test function. DO NOT USE
function createCircle(scene, x, y, radius) {
  var ctx = requestContext(scene);
  return {
    draw: function () {
      ctx.beginPath();
      ctx.arc(x, y, radius, Math.PI * 2, false);
      ctx.strokeStyle = "green";
      ctx.stroke();
    },
    update() {

    }
  }
}

// For Unit testing only
function drawShape() {
  return true;
}

// Utility functions for Primitive shapes

function drawShip(scene, n) {
  if (scene.getContext) {
    var ctx = requestContext(scene);
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 100);
    ctx.lineTo(100, 50);
    ctx.fill();
    return n;
  }

}

function drawHeart(scene, n) {
  if (scene.getContext) {
    var ctx = requestContext(scene);
    ctx.beginPath();
    ctx.moveTo(350, 400);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}

function drawMessage(scene) {
  if (scene.getContext) {
    var ctx = requestContext(scene);
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.fillStyle = 'teal';
    ctx.fill();
    //ctx.stroke();
    return true;
  }
}

function drawSpace(scene) {
  if (scene.getContext) {
    var ctx = requestContext(scene);
    var lingrad = ctx.createLinearGradient(0, 0, 0, innerHeight);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(0.8, '#fff');
    ctx.fillStyle = lingrad;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    return scene;
  }
}



// Debug this later
function drawPlanet(scene) {
  if (scene.getContext) {
    var ctx = requestContext(scene);
    var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, 'orange');
    radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');
    ctx.fillStyle = radgrad3;
    //ctx.fillRect(450, 150, 150, 150);
    ctx.fillStyle = radgrad2;
    return true;
  }

}

function drawBackground(scene) {
  if (scene.getContext) {
    var ctx = requestContext(scene);
    var img = new Image();
    img.src = 'path to image in assets folder';
    img.onload = function () {
      var ptrn = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = ptrn;
      ctx.fillRect(0, 0, 150, 150);

    }
  }
}

/*
    Draws Triangular ship at position specified at posX, posY.
    posX and posY should always be fractions of window.innerWidth
    amd window.innerHeight respectively to allow for responsiveness.
*/

function drawText(scene, text, posX, posY) {
<<<<<<< HEAD
  if(scene.getContext){
      var ctx = requestContext(scene);
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

      ctx.font = '40px Times New Roman';
      ctx.fillStyle = 'Black';
      ctx.strokeText(text, posX, posY);
      return text;
=======
  if (scene.getContext) {
    var ctx = requestContext(scene);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    ctx.font = '40px Times New Roman';
    ctx.fillStyle = 'Black';
    ctx.strokeText(text, posX, posY);
  }
}

//Music play and pause functions

var url = "./assets/videogame2.wav";
var audio = document.createElement('audio');
audio.src = url;

function playMusic(url) {
  if (url) {
    audio.loop = true;
    audio.play();
    return true;
  } else {
    return false;
>>>>>>> master
  }
}

function pauseMusic(url) {
  if (url) {
    audio.pause();
    return true;
  } else {
    return false;
  }
}