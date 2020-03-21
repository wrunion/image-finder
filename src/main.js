/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';

const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY;
const unsplashApiKey = process.env.UNSPLASH_API_KEY;
const nytApiKey = process.env.NYT_API_KEY;

$(document).ready(function() {
  $(".clickable-p").click(function() {
    $('.accordion-item').hide();
    $(this).siblings("div").show();
  });
  
  $("#weather-button").click(function() {
    const city = $("#weather-input").val();
    (async () => {
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}`);
        let jsonifiedResponse;
        if (response.ok && response.status === 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        $('#results').append(jsonifiedResponse.weather[0].description);
      } catch(e) {
        alert(e.message);
      }
    })();
  });
  
  $("#bike-button").click(function() {

    (async () => {
      try {
        let response = await fetch(`https://bikeindex.org/api/v3/bikes_search/stolen?per_page=10`);
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          $('#results').append(`Couldn't find bike given. Please check spelling and try again!`);
        }
        for (let bike of jsonifiedResponse.bikes) {
          $('#results').append(`${bike.serial}<br>`)
        }
        // $('#results').append(jsonifiedResponse.bikes[0].serial);
      } catch(e) {
        alert(e.message);
      }
    })();
  });

  $("#photo-button").click(function() {
    const city = $("#weather-input").val();
    (async () => {
      try {
        // let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OW_API_KEY}`);
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=129d36f95d0264a22fce62f61459dad0`);
        let jsonifiedResponse;
        if (response.ok && response.status === 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        $('#results').append(jsonifiedResponse.weather[0].description);
      } catch(e) {
        alert(e.message);
      }
    })();
  });

  $("#news-button").click(function() {
    const keyword = $("#news-input").val();
    (async () => {
      try {
        // let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OW_API_KEY}`);
        let response = await fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}fq=headline.search:("${keyword}")&api-key=${nytApiKey}`);

        let jsonifiedResponse;
        if (response.ok && response.status === 200) {
          jsonifiedResponse = await response.json();
          console.log(jsonifiedResponse);
        } else {
          jsonifiedResponse = false;
        }
        $('#results').append(jsonifiedResponse.response.docs[5].headline.main);
      } catch(e) {
        alert(e.message);
      }
    })();
  });

  $("#poke-button").click(function() {
    $('#results').empty();
    const poke = $("#poke-input").val().toLowerCase();
    (async () => {
      try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        let jsonifiedResponse;
        if (response.ok && response.status === 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        let pokemon = jsonifiedResponse;
        let moves = pokemon.moves;
        if (moves) {
          for (let move of moves) {
            $('#results').append(`<div>${move.move.name}</div>`);
          }
        }
        else {
          $('#results').append(`Couldn't find a pokemon named '${poke}'. Please check spelling and try again!`);
        }
        
      } catch(e) {
        alert(e.message);
      }
    })();
  });

  $('input').bind('keypress',function(e) {
    let event = e || window.event;
    let keycode = event.keyCode || event.which;
    if(keycode == '13') $(this).siblings("button").click();
  });

});