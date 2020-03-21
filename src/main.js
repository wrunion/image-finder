/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {

  /* How do I refactor this into a single function? */
  $("#bike").click(function() {
    $(".accordion-item").hide();
    $("#bike-input-div").toggle();
  });
  $("#weather").click(function() {
    $(".accordion-item").hide();
    $("#weather-input-div").toggle();
  });
  $("#photo").click(function() {
    $(".accordion-item").hide();
    $("#photo-input-div").toggle();
  });
  $("#news").click(function() {
    $(".accordion-item").hide();
    $("#news-input-div").toggle();
  });
  $("#cat").click(function() {
    $(".accordion-item").hide();
    $("#cat-input-div").toggle();
  });




});