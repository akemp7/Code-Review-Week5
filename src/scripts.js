//userInput function used to pass specifications
export function userInput(input){
  if(isNaN(input)|| input<0){
    input = "Invalid Input";
  } else if(Math.ceil(input)-input !==0){
    input = "Invalid Input";
  }else {
    input = parseInt(input);
  } return input;
}
//to caclculate galactic years
export class ageYears{
  constructor (age, planet) {
    this.age = age;
    this.planet = planet;
  }
  mercuryAge(){
    this.planet = .24;
    const userAge = Math.round(this.age / this.planet);
    return userAge;
  }
  venusAge(){
    this.planet = .62;
    const userAge = Math.round(this.age / this.planet);
    return userAge;
  }
  marsAge(){
    this.planet = 1.88;
    const userAge = Math.round(this.age / this.planet);
    return userAge;
  }
  jupiterAge(){
    this.planet = 11.86;
    const userAge = Math.round(this.age / this.planet);
    return userAge;
  }
  lifeExpectancy(){
    if(this.age < 79){
      this.age = 79 - this.age;
    } else if(this.age > 79){
      this.age = this.age - 79;
    }return this.age;
  }
}

//to calculate Keith Richards age in dog years on Jupiter in 2073
export function keithAge(){
  const findYear = new Date();
  let year = findYear.getFullYear();
  let currentAge = year - 1943;
  let ageDifference = 2073-year;
  return (currentAge + ageDifference) * 7;
}
