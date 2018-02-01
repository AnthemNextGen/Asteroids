describe('Should test all', function(){
  it('Should always pass', function(){
      expect(true).toBe(true);
  });

  it('Draw shape on screen', function(){
    expect(drawShape()).toBe(true);
  });
});
