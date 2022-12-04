# DEVELOPMENT OF NATIVE APPLICATIONS
## FINAL PROJECT
### ```NAME:``` FeedEveryone
### ```Purpose:``` To serve as an informative web application, for the purpose of Food donation to the people in Need
### ```Author:``` Mineshkumar Dayalbhai Tandel
### ```Student-ID:``` 2110050

<hr>

# ```APP TECHNICALITY```

## ```FRONTEND```

1. `Create react app using redux template`
    - Commands to create React app
		- ```npx create-react-app@latest directory --template redux``` (here directory = frontend)
		- ```cd AppName``` (change directory location)
		- ```npm start```
            - Runs the app in the development mode.
            - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
            - The page will reload when you make changes. You may also see any lint errors in the console.
    <hr>

2. `Components and Pages`
    ## Pages
    
    - ```Register``` --- Register form for the users

    - ```Login``` --- Login form for the users

    - ```Dashboard``` --- Dashboard contains DonationForm, DonationCard and DonationItem components


    ## Components

    - ```Header``` --- Header contains the logo and two navigating buttons

    - ```DonationForm``` --- The component is a form which collects donation details and store it to the database

    - ```DonationCard``` --- To show the donation posted by all the users on Dashbord page

    - ```DonationItem``` --- It shows all the donations to the user of the application posted by him/her.

    - ```Footer``` --- The component has mailing link, social media link and a link to WHO hunger related facts web-page

## ```BACKEND```

1. `Create backend using node.js`
    - Create a directory ```backend```
    - Create a file ```server.js```
    - Commands to create React app
		- ```npm init```
        - upon Questionaire enter endpoint: ```server.js```
		- ```cd backend``` (change directory location)
		- ```node backend/server.js```
            - Runs the app in the development mode.
    <hr>

2. `Endpoints`
    ## Donation Endpoints
    
    - ```/donations/get_all_donations/``` --- Sends all the donation as a response from the connected database to the frontend

    - ```/donations/``` 
        - Method: POST - Stores the donation from frontend to the database
        - Method: GET - Send only the donation as a response from the connected database to the frontend related to the user possesion

    - ```/donations/:id```
        - Method: PUT - Finds and Update the existing donation if any changes occurs
        - Method: DELETE - Deletes the donation using its ID

    ## User Endpoints

    - ```/users/register/```
        - Method: POST - The controller attached to hte endpoint check for the user, if the user does not exists, it stores the data sent to the backend to the database

    - ```/users/login/```
        - Method: POST - The associated controller check for the user credentials, authenticate it and if it is authorized it sends the user data to to frontend from the database.

## ```TOOLS```

-  ```axios``` 
    - http client library
    - To send and get data from the backend to frontend

-  ```concurrently``` 
    - ```npm i concurrently```
    - To run backend and frontend concurrently

- ```Redux template```
    - To overcome difficulties of props management
    - Redux uses single store of an application state, that can be used anywhere in an application without traversing it from parent to child element

# ```FOLLOW THE STEP TO RUN THE APP ON LOCALHOST```
- ```npm i```
- ```cd frontend```
- ```npm i```
- ```cd ..```
- ```npm run dev```

