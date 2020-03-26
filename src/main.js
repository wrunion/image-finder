/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';
import './../.env';

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function generateRandomNumber(highestNum) {
  return Math.floor(Math.random()*highestNum);
}

/* REFERENCE: https://unsplash.com/developers */

$(document).ready(function() {

  $(".clickable-p").click(function() {
    $('.accordion-item').hide();
    $(this).siblings("div").show();
  });

  $("#keyword-button").click(function() {
    $('#results').empty();
    const keyword = $("#keyword-input").val().toLowerCase();
    const displayKeyword = capitalizeString(keyword);
    (async () => {
      try {
        let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${process.env.API_KEY}`);
        console.log(response);
        let parsedResponse;
        if (response.ok && response.status === 200) {
          parsedResponse = await response.json();
        } else {
          parsedResponse = false;
        }
        console.log(parsedResponse);
        showPhoto(parsedResponse);
      } catch(e) {
        showPhoto(false);
        $("#results").append(`There was an error processing your request.`);
        console.log(e.message);
      }
    })();

    const showPhoto = function(data) {
      if (data && data.results && data.results[0]) {
        /* Generate a random number, so that a user searching the same term multiple times can see a variety of outputs */
        console.log(data.results);
        const imageNum = generateRandomNumber(data.results.length);
        const image = data.results[imageNum];

        let htmlContent = `<figure>
          <img src="${image.urls.regular}" alt="${image.alt_description}" class="img-fluid">
          <figcaption>${displayKeyword} by ${image.user.name}</figcaption>
        </figure>`;
       
        $("#results").append(htmlContent);
      } else {
        $("#results").append(`No results found. Please check your inputs and try again!`);
      }
    }; 
  });


  // (async () => {
  //   try {
  //     let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}`);
  //     let jsonifiedResponse;
  //     if (response.ok && response.status === 200) {
  //       jsonifiedResponse = await response.json();
  //     } else {
  //       jsonifiedResponse = false;
  //     }
  //     let myResult = jsonifiedResponse;
  //     if (myResult) {
  //       console.log(myResult);
  //     }
  //     else {
  //       console.log('error this is else');
  //       // $('#results').append(`Couldn't find a pokemon named '${poke}'. Please check spelling and try again!`);
  //     }
        
  //   } catch(e) {
  //     alert(e.message);
  //   }
  // })();


  /* Lets the user press "enter" to press button */
  $('input').bind('keypress',function(e) {
    let event = e || window.event;
    let keycode = event.keyCode || event.which;
    if(keycode == '13') $(this).siblings("button").click();
  });
});