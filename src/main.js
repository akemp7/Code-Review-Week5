import {userInput, ageYears} from './scripts.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function(){
  $("#userAge").submit(function(event){
    debugger;
    const userAge = parseInt($("#yourAge").val());
    const newAge = new ageYears(userAge);
    if(Math.ceil(userAge)-userAge !==0 || userAge<0){
      alert("Invalid Input");
    } else {
      $("#mercuryYears").text(newAge.mercuryAge());
      $("#venusYears").text(newAge.venusAge());
      $("#marsYears").text(newAge.marsAge());
      $("#jupiterYears").text(newAge.jupiterAge());
    }

    if (userAge < 79){
       $("#young").text(newAge.lifeExpectancy(userAge));
    }else{
      return $("#old").text(newAge.lifeExpectancy(userAge));
    }
  });
});
