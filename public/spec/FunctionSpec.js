<<<<<<< HEAD
describe('Should test all', function () {
  it('Should always pass', function () {
    expect(true).toBe(true);
  });

  it('Draw shape on screen', function () {
=======
describe('Should test all Splash screen components', function(){

  it('Should always pass', function(){
      expect(true).toBe(true);
  });

  it(' Draw Game title on canvas', function(){
    expect(drawText(splashScreen, 'ASTROID', 50,50)).toBe('ASTROID');
  });

  it('Draw shape on screen', function(){
>>>>>>> master
    expect(drawShape()).toBe(true);
  });

  it('Play Music', function () {
    expect(playMusic(url)).toBeTruthy();
  });

  it('Pause Music', function () {
    expect(pauseMusic(url)).toBeTruthy();
  });

});

