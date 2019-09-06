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
}
