export function userInput(input){
  if(isNaN(input)|| input<0){
    input = "Invalid Input";
  } else if(Math.ceil(input)-input !==0){
    input = "Invalid Input";
  }else {
    input = parseInt(input);
  } return input;
}

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
