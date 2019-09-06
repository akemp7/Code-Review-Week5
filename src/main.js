import {userInput, ageYears} from './scripts.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function(){
  $("#userAge").submit(function(event){
    const userAge = $("#yourAge").val();

    const newAge = new ageYears(userAge);
    $("#mercuryYears").text(newAge.mercuryAge());
    $("#venusYears").text(newAge.venusAge());
    $("#marsYears").text(newAge.marsAge());
    $("#jupiterYears").text(newAge.jupiterAge());
  });
});
