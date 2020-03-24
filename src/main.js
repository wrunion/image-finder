/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */ 
import './styles.css';
import $ from 'jquery';
import './../.env';

$(document).ready(function() {
  $('form').submit(function() {
    const symptom = $('#primary-symptom-input').val().toLowerCase();
    console.log(symptom);
  });
});