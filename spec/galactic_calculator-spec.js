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
  it('should divide user age by .62 and round if need be to determine age on Venus', function(){
    let year = new ageYears(30);
    expect(year.venusAge()).toEqual(48);
  });
  it('should divide user age by 1.88 and round if need be to determine age on Mars', function(){
    let year = new ageYears(30);
    expect(year.marsAge()).toEqual(16);
  });
  it('should divide user age by 11.86 and round if need be to determine age on Jupiter', function(){
    let year = new ageYears(30);
    expect(year.jupiterAge()).toEqual(3);
  });
  it('should give back remaining number of years left if age is less than life expectancy', function(){
    let year = new ageYears(30);
    expect(year.lifeExpectancy()).toEqual(49);
  });
  it('should give back the number of years surpassed from life expectancy if age is greater than 79', function(){
    let year = new ageYears(89);
    expect(year.lifeExpectancy()).toEqual(10);
  });
});
