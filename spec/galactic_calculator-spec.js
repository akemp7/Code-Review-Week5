import {userInput, ageYears} from './../src/scripts.js';
describe ('userInput', function(){
  it('should refuse non-numeric input', function(){
    const input = "4%%^";
    expect (userInput(input)).toEqual("Invalid Input");
  });
  it('should only accept positive numbers', function(){
    const input = -3;
    expect(userInput(input)).toEqual("Invalid Input");
  });
  it('should only accept integers--no decimals', function(){
    const input = .5;
    expect(userInput(input)).toEqual("Invalid Input");
  });
  it('should only accept integers', function(){
    const input = 10;
    expect(userInput(input)).toEqual(10);
  });
});

describe('ageYears', function(){
  it('should divide user age by .24 and round if need be to determine age on Mercury', function(){
    let year = new ageYears(30);
    expect(year.mercuryAge()).toEqual(125);
  });

});
