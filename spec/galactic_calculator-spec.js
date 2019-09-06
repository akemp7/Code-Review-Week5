import {years} from './../src/scripts.js';
describe ('userInput', function(){
  it('should refuse non-numeric input', function(){
    const input = "4%%^";
    expect (years(input)).toEqual("Invalid Input");
  });
  // it('should only accept positive numbers', function(){
  //   const input = -3;
  //   expect(years(input)).toEqual("Invalid Input");
  // });
  // it('should only accept integers--no decimals', function(){
  //   const input = .5;
  //   expect(years(input)).toEqual("Invalid Input");
  // });
  // it('should only accept integers', function(){
  //   const input = 10;
  //   expect(years(input)).toEqual("10");
  // });
});
