
# Flower Scouter
---
## **TABLE OF CONTENTS:**
1. Project Objective 
1. Elevator Pitch 
1. Deployed Link
1. Usage
1. Installation
1. Technologies used
1. Acknowledgement
1. Contact

## Project Objective

_Duration: Two week sprint_

Flower Scouter was my opportunity to build a full-stack CRUD application on my own at Prime Digital Academy. Born out of an analog idea to map the lilacs in my neighborhood, I wanted to explore: 
- GoogleMaps integration with React
- Geolocation
- Comment sections

## Elevator Pitch
Springtime (especially in Minnesota) is special, and one of the best parts is seeing flowers emerge and bloom after a long winter. But most flowers bloom for just a short time, and if you don't have your favorite flowers growing near you, it can be difficult to find and appreciate them. Flower Scouter lets users add flowers they see out in the world to a map and share them with their community.  

## Deployed link
Check out the deployed version of Flower Scouter here: Coming soon!

## Usage
Once registered and logged in, the user can see a map with all the spots that have been added by all of the users. The map is centered on the user's current location. Users can click on individual markers on the map to see more information. 

![alt text](/public/images/MainMap.gif)


In the Add a Spot page, the map loads on the user's current location. The user can click to add a spot to the map, as well as a flower category and a description to help other users see it. 
![alt text](/public/images/AddSpot.gif)

After submitting a spot, users can see it on the Home Page on the map, or in the List View. In the List View, users can view comments by other users on spots and add their own comments. Users can also like spots. 

![alt text](/public/images/ListView.gif)

Users can find all of their own spots on the User page on the map and in a list view. Here users can edit and delete their spots. 

![alt text](/public/images/UserPage.gif)

## Installation
1. Make an account on the [Google Maps Platform](https://developers.google.com/maps). Google requires a billing account, but offers free usage up to 28,500 maploads per month, which should be plenty for running this app. You will then need to enable the Google Maps API - a guide to this can be found [here](https://support.google.com/googleapi/answer/6158841?hl=en).
2. Create an API key on the Google Maps Platform. Instructions can be found [here](https://support.google.com/googleapi/answer/6158862?hl=en&ref_topic=7013279). Do not share this API key anywhere. 
3. Create a .env file in this repo and add REACT_APP_API_KEY= and then your API key. 
4. You will also need a Map ID. Follow the steps outlined [here](https://developers.google.com/maps/documentation/get-map-id). Add this in your .env file just like the API key - write MAP_ID= then your Map ID.
5. Create a database named `flower_scouter`.
6. The queries in the `database.sql` file are set up to create all the necessary tables. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
7. Open up your editor of choice and run an `npm install` to install the necessary dependencies.
8. Run `npm run server` in your terminal
9. Run `npm run client` in your terminal
10. The `npm run client` command will open up a new browser tab for you!

## What I Learned
- Finding and using documentation for newer tools and libraries. I looked into and tested out several options for integrating Google Maps API with React. Due to the React v.18 update, finding accurate, up-to-date, and appropriate documentation for these different packages was difficult. I found [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/) to be most usable and effective for my goal of creating and viewing markers and info windows. 

- Accessing location data from a click was critical to creating an easy to use user experience of simply clicking to add a marker to the map. I figured out the latitude and longitude location data was stored in a function that needed to be called in order to access the data. 

- Setting the map to center on the user's current location using geoloation and the useMemo and useEffect hooks. 

Goals for future work include image upload, sorting the map by type of flower, and a feature that notifies users when flowers are in bloom.

## Future Goals 
- Reverse geocaching to turn location data into estimate addresses
- Image upload
- Sorting the map by type of flower
- Notifications for when a flower is in bloom
- Add to documentation for @react-google-maps/api


## Technologies Used
* Javascript 
* HTML
* CSS
* React
* Redux
* Redux-Saga
* Express
* Passport 
* Node.js
* Postico 2
* PostgreSQL
* @react-google-maps/api
* Material UI 

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) for the support and guidance through the process of building this application.

## Contact
Please connect with me on [LinkedIn](https://www.linkedin.com/in/andrearlove/) and let me know what you think! 

