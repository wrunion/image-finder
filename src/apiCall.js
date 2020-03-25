/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';
import './../.env';

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
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
        let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${unsplashAccessKey}`);
        let parsedResponse;
        if (response.ok && response.status === 200) {
          parsedResponse = await response.json();
        } else {
          parsedResponse = false;
        }
        showPhoto(parsedResponse);
      } catch(e) {
        showPhoto(false);
        console.log(e.message);
      }
    })();

    const showPhoto = function(data) {
      if (data && data.results && data.results[0]) {
        const firstImage = data.results[0];

        let htmlContent = `<figure>
          <img src="${firstImage.urls.regular}" alt="${firstImage.alt_description}" class="img-fluid">
          <figcaption>${displayKeyword} by ${firstImage.user.name}</figcaption>
        </figure>`;
       
        $("#results").append(htmlContent);
      } else {
        $("#results").append(`There was an error handling your request. Please check your inputs and try again!`);
      }
    }; 
  });
