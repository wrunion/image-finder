/* eslint-disable no-console */
import './styles.css';
import $ from 'jquery';
import './../.env';
import { generateRandomNumber } from './randomNum';
import { apiCall } from './apiCall';

$(document).ready(function() {
  $("#keyword-button").click(function() {
    $("#results").empty();
    /* Get user input */
    const keyword = $("#keyword-input").val().toLowerCase();

    /* Use that input to query the Unsplash API */
    apiCall(keyword, showPhoto);

    /* Display the photo and photo metadata */
    function showPhoto(data) {
      /* Check that there is at least one result */
      if (data && data.results && data.results[0]) {
        console.log(data.results);
        
        /* Generate a random number within the range of results. Then pick that image to work with. */
        const imageNum = generateRandomNumber(data.results.length);
        const image = data.results[imageNum];

        /* Generate HTML for the image and image credit, with links back to Unsplash, as per their requirements */
        let htmlContent = `<figure>
          <img src="${image.urls.regular}" alt="${image.alt_description}" class="img-fluid">
          <figcaption class="photo-text">Photo by <a href="${image.user.links.html}?utm_source=API Practice Student Project&utm_medium=referral" target="_blank">${image.user.name}</a> on <a href="https://unsplash.com/?utm_source=API Practice Student Project&utm_medium=referral" target="_blank">Unsplash</a></figcaption>
        </figure>`;

        $("#results").append(htmlContent);
      } else {
        $("#results").append(`No results found. Please check your inputs and try again!`);
      }
    }
  });
});