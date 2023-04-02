
# Flower Scouter

## Description

_Duration: Two week sprint_

Flower Scouter is a social media mobile application that allows users to map flowers they see out in the world and share them with their community. Users can see spots that have been added by all registered users and add their own spots to the map too. The map centers on the user's current location, making it easy to simply click to add a marker to the map. Users can see what other people are saying about different spots, and like and comment on those spots as well. Users can also view their own spots on their User Page in a map or list view, and edit and delete their spots as well. 

For this project, I used the Google Maps API with a React package: @react-google-maps/api. I looked into many different options for integrating Google Maps, and found this package to be more usable and effective for my goal of creating and viewing markers and info windows. With the currently available documentation, this was still quite challenging to figure out due to the React v.18 update and I hope to add to documentation for this in the future. 

Goals for future work include image upload, sorting the map by type of flower, and a feature that notifies users when flowers are in bloom. 


---
## **TABLE OF CONTENTS:**
1. Deployed Link
1. Installation
1. Usage
1. Technologies used
1. Contact

## Deployed link
Check out the deployed version of Flower Scouter here: Coming soon!

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


## Usage
Registered users can log in to their account or create a new one by clicking the Register button. Once logged in, the Home Page shows all the spots on the map that have been added by all of the users. The map is centered on the user's current location. Users can click on individual markers on the map to see more information. 

![alt text](/public/images/MainMap.gif)


In the Add a Spot page, the map loads on the user's current location. The user can click to add a spot to the map, as well as a flower category and a description to help other users see it. 
![alt text](/public/images/AddSpot.gif)

After submitting a spot, users can see it on the Home Page on the map, or in the List View. In the List View, users can view comments by other users on spots and add their own comments. Users can also like spots. 

![alt text](/public/images/ListView.gif)

Users can find all of their own spots on the User page on the map and in a list view. Here users can edit and delete their spots. 

![alt text](/public/images/UserPage.gif)


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

## Contact
Please connect with me on [LinkedIn](https://www.linkedin.com/in/andrearlove/) and let me know what you think! 

