describe('Basic tests ', function(){
    it('Should return 1 + 1 as 2', function(){
        expect(eval(1+1)).toBe(2);
    });

    it('Should Fail for 2+2 is not equal to 5', function(){
        expect(eval(2+2)).toBe(5);
    });
});
