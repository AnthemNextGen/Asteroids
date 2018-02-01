var x = 200;
function animate(){
  var ctx = requestContext(splashScreen);
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x,200, 30,0, Math.PI*2, false);
  ctx.strokeStyle = 'blue';
  ctx.stroke();
  x+=1;
}

function generateCircles(scene){
  var ctx = requestContext(splashScreen);
  requestAnimationFrame(generateCircles);
    //ctx.clearRect(0, 0, innerWidth, innerHeight);  Don't call this here: Romoves other components on screen
    var posX = Math.random()*innerWidth;
    var posY = Math.random()*innerHeight;
    ctx.arc(posX,posY,30,0, Math.PI*2, false);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    posX +=1;
}


function requestContext(scene){
  return scene.getContext('2d');
}

function setScene(scene){
  var ctx = requestContext(scene);
}

function play(music) {
  if(music){
    music.play();
    return true;
  }else{
    return false;
  }
}

function pause(music) {
  if(music){
    music.pause();
    return true;
  }else{
    return false;
  }
}
