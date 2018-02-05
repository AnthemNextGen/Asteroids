describe('Should test all', function () {
  it('Should always pass', function () {
    expect(true).toBe(true);
  });

  it('Draw shape on screen', function () {
    expect(drawShape()).toBe(true);
  });

  it('Play Music', function () {
    expect(playMusic(url)).toBeTruthy();
  });

  it('Pause Music', function () {
    expect(pauseMusic(url)).toBeTruthy();
  });

});

