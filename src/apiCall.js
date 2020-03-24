/* eslint-disable no-console */
import './../.env';

export async function makeApiCall(searchTerm) {
  console.log(searchTerm);
  try {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_KEY}
    `);
    console.log(response.status);
    let parsedResponse;
    if (response.ok && response.status === 200) {
      parsedResponse = await response.json();
      showResults(parsedResponse);
    } else if (response.status === 401 || response.status === 1000) { 
      parsedResponse = false;
      return `There has been a site error. Please try again later.`;
    } else if (response.status === 400 || response.status === 404 || response.status === 405) {
      parsedResponse = false;
      return `No results found. Please check your search terms and try again`;
    } else {
      return `There has been a server error. Please wait a moment, and try your search again`;
    }
  } catch(e) {
    console.log(e.message);
  }
}
const showResults = function(results) {
  if (results && results.data && results.data[0]) {
    let firstResult = results.data[0];
    console.log(firstResult);
    console.log(results);
    // console.log(results.results);
    return results;
  } else {
    console.log(`There are no doctors that meet that criteria. Please try again.`);
  }
};

//   const showPhoto = function(data) {
//     if (data && data.results && data.results[0]) {
//       const firstImage = data.results[0];
//       const url = firstImage.urls.regular;
//       const author = firstImage.user.name;
//       const alt_description = firstImage.alt_description;

//       let htmlContent = `<figure>
//         <img src="${firstImage.urls.regular}" alt="${firstImage.alt_description}" class="img-fluid">
//         <figcaption>${displayKeyword} by ${firstImage.user.name}</figcaption>
//       </figure>`;
//       $("#results").append(htmlContent);
//     } else {
//       $("#results").append(`There was an error handling your request. Please check your inputs and try again!`);
//     }
//   }; 
//   console.log(searchTerm);
// }


/* ENDPOINTS */
/* List of specialties (see sample-specialties.json): 
https://api.betterdoctor.com/2016-03-01/specialties?user_key=f820b6b9b53355ead49a199b427f18ad */

/* List of conditions (see sample-conditions.json): 
https://api.betterdoctor.com/2016-03-01/conditions?user_key=f820b6b9b53355ead49a199b427f18ad */

/* List of providers: 
 var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=f820b6b9b53355ead49a199b427f18ad */

 /* PROVIDERS WHOOOOOOOO */
 /* https://api.betterdoctor.com/2016-03-01/doctors?last_name=Smith&query=toothache&skip=0&limit=10&user_key=f820b6b9b53355ead49a199b427f18ad 
 Can search by:
 -name (partial accepted)
 -first_name
 -last_name
 -query (ie "toothache") - searches all fields by a keyword query
 -specialty_uid
 -location
 -user_location
 -gender
 -skip (how many items to skip ahead)
 -limit (maximum num of items to receive)

 Sample Query:
 https://api.betterdoctor.com/2016-03-01/doctors?last_name=Smith&query=toothache&skip=0&limit=10&user_key=f820b6b9b53355ead49a199b427f18ad

 Sample Query 2:
 https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=f820b6b9b53355ead49a199b427f18ad
 */

/* GET A SPECIFIC DOCTOR BY UID /*

/* https://api.betterdoctor.com/2016-03-01/doctors/12345?user_key=f820b6b9b53355ead49a199b427f18ad */
