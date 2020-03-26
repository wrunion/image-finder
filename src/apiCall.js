/* eslint-disable no-console */
import './../.env';

export async function makeApiCall(keyword, callbackFunction) {
  try {
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${process.env.API_KEY}`);
    let parsedResponse;
    if (response.ok && response.status === 200) {
      parsedResponse = await response.json();
    } else {
      parsedResponse = false;
    }
    callbackFunction(parsedResponse);
  } catch(e) {
    callbackFunction(false);
    console.log(e.message);
  }
}