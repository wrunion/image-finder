/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {



  $(".clickable-p").click(function() {
    $('.accordion-item').hide();
    $(this).siblings("div").show();
  });
  
  $("#weather-button").click(function() {
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
  
  // (async () => {
  //   try {
  //     let response = await fetch(`https://bikeindex.org/api/v3/bikes_search/stolen?per_page=10`);
  //     let jsonifiedResponse;
  //     if (response.ok && response.status == 200) {
  //       jsonifiedResponse = await response.json();
  //     } else {
  //       jsonifiedResponse = false;
  //     }
  //     for (let bike of jsonifiedResponse.bikes) {
  //       $('#results').append(`${bike.serial}<br>`)
  //     }
  //     // $('#results').append(jsonifiedResponse.bikes[0].serial);
  //   } catch(e) {
  //     alert(e.message);
  //   }
  // })();

});