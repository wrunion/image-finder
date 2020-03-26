/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';
import './../.env';

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
    (async () => {
      try {
        let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${process.env.API_KEY}&per_page=30`);
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
      /* Check if there is at least one result */
      if (data && data.results && data.results[0]) {

        /* Generate a random number, so that a user searching the same term multiple times can see a variety of outputs */

        console.log(data.results);
        const imageNum = generateRandomNumber(data.results.length);
        const image = data.results[imageNum];

        let htmlContent = `<figure>
          <img src="${image.urls.regular}" alt="${image.alt_description}" class="img-fluid">
          <figcaption>Photo by <a href="${image.user.links.html}?utm_source=API Practice Student Project&utm_medium=referral" target="_blank">${image.user.name}</a> on <a href="https://unsplash.com/?utm_source=API Practice Student Project&utm_medium=referral" target="_blank">Unsplash</a></figcaption>
        </figure>`;

        $("#results").append(htmlContent);
      } else {
        $("#results").append(`No results found. Please check your inputs and try again!`);
      }
    }; 
  });
});