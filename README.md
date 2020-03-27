# Image Finder 

#### Enter a keyword to see a beautiful image with metadata and links. Epicodus independent project, 3/24/2020

#### By **Winter A. Runion**

### Description
A single-page JavaScript app built with Webpack, to show images and image metada to the user, via Unsplash API.

### Instructions for Mac
##### To run this project locally, you need: NPM, Node.js, and an API key from [Unsplash.com](https://unsplash.com/developers). All of these are free.

* To run this project, you need NPM and Node.js installed on your machine. 
    1. Check is NPM is already installed: type `npm -v` in your CLI. If it returns a version number, you're good to go!
    2. If you don't have NPM, download it [here](https://www.npmjs.com/get-npm)
    3. You also need Node.js. Follow the instructions above to make sure you have it installed. If not, download it [here](https://www.npmjs.com/get-npm). (Note: this is the same link as above - NPM and Node.js usually come as a pair.)
* Next, you need your own API key: 
    1. Go to [unsplash.com/developers](https://unsplash.com/developers) and register as a new user.
    2. Confirm your account and create a new project. (Save the project name for later.)
    3. Unsplash will give you an "Access Key" and a "Secret Key." Save the "Access Key" somewhere - you'll need it in a minute.
* Installing the project: 
    1. In a terminal (bash recommended) clone this repo: 
`git clone https://github.com/wrunion/image-finder`
    2. Navitage into the directory: `cd image-finder`

  3. In a terminal (bash recommended) run `npm install`
* Personalizing the code:
  1. Open the project files in your code editor of choice.
  2. Add your unique API key (the "Access Key" you got earlier from Unsplash). This is crucial for the code to work.
  3. Rename ".env-sample" to simply ".env" 
  4. Open .env
  5. Replace `YOUR_UNSPLASH_ACCESS_KEY` with your actual Unsplash Access Key. (Note: wrap it in quotes.)
* Time to build! Run these two commands, and then you'll be in business:
      `npm run build`
      `npm run start`
* Enjoy your new photo app! This code is licensed under the MIT license, so feel free to use as you see fit. See license specs for more details.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Spec Description**  | User Input: Keyword | An image related to user keyword. |
| **Spec Description**  | User Input: Keyword | Figcaption with photographer name and website (Unsplash.) |
| **Spec Description**  | User Input: Keyword | Photographer name is linked to their Unsplash profile. |
| **Spec Description**  | User Input: Keyword | The website name in caption is linked to Unsplash.com |

### Technologies Used
* Node.js
* Webpack
* Babel
* Bootstrap

### Known Bugs
* None

### Contact

Contact me if you have questions or comments at winterrunion@gmail.com

### License
_This software is licensed under the MIT license._

_Copyright (c) 2020 **Winter A. Runion**_