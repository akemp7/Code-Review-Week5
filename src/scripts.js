export function years(input){
  if(isNaN(input)|| input<0){
    input = "Invalid Input";
  } else if(Math.ceil(input)-input !==0){
    input = "Invalid Input";
  }else {
    input = parseInt(input);
  } return input;
}
