/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {

  // $(".clickable-p").click(function(){
  //   const id = this.id;
  //   $(`#id-input-div`).show();
  //   console.log(id);
  // }); 

  // $(".clickable-p").click(function(e){
  //   const id = this.id;
  //   const divString = `${id}-input-div`;
  //   $(divString).show();
  // });

  // $(".clickable-p").click(function(e){
  //   console.log(e.target.id);
  //   const id = this.id;
  //   const divToShow = document.getElementById(id);
  //   const displayString = `${divToShow}-input-div`;
  //   $(`${displayString}`).show();
  // });

  /* HOW TO REFACTOR????? */
  $("#bike").click(function() {
    $("#bike-input-div").toggle();
  });
  $("#weather").click(function() {
    $("#weather-input-div").toggle();
  });
  // $(".clickable-p").click(function() {
  //   const id = `"#this.id-input-div"`;
  //   $(id).show();
  // });

});