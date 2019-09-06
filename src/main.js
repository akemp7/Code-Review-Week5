import {userInput, ageYears} from './scripts.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function(){
  $("#userAge").submit(function(event){
    $(".life").hide();
    const userAge = parseInt($("#yourAge").val());
    if(Math.ceil(userAge)-input !==0 || userAge<0){
      alert("Invalid Input");
    } else {
      const newAge = new ageYears(userAge);
      $("#mercuryYears").text(newAge.mercuryAge());
      $("#venusYears").text(newAge.venusAge());
      $("#marsYears").text(newAge.marsAge());
      $("#jupiterYears").text(newAge.jupiterAge());
    }

    if (userAge < 79){
      $("#yearsLeft").text(newAge.lifeExpectancy());
    }else{
      $("#yearsPassed").text(newAge.lifeExpectancy());
    }
  });
});
