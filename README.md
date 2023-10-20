# Can I wear short pants today?
## Deployment link: 
https://caniwearshortpants.netlify.app/

## A simple react application that displays whether or not it is time to wear long or short pants. 
Do you know the struggle of getting up in the morning, trying to pick out clothes for the day, and not being quite sure how to dress appropriately for the weather? Obviously, you could just go outside to check what temperature it is, but let’s face it - we live in the 21st century, we do not go outside to check the weather. No, we go on the internet and try to find a website that tells us what to wear. 
So, this is exactly what we created! CanIWearShortPants is a React-based frontend application that uses the Visual Crossing weather API to retrieve data about the temperature, weather, and humidity and a time and place specified by the user, and based on this information displays a response to the question “Can I wear Short pants?”. 

## Update the Proxy Server

By default, the proxy server is set up to point at port 8000, if you need to do so update in `setupProxy.js` where commented.

## Using NPM

`npm run start` or `npm run dev`  to run the development server

`npm run build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Timeframe 
This project was created within 3 days of work by two people. 
Collaborator: Nadjaob

## Technologies Used
- React
- Node.js
- Netlify for deployment 
- Visual crossing weather API: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/

## Planning 
Initial Wireframe for the project (created with excalidraw)

We made sure to structure our wireframe in such a way that we could work relatively independently on different components, and to reduce merge conflicts to a minimum. 
![3Y2TZaV6d_ajNeN6Bk_FFGoxHtrbS7rWJtxACROC9cjQUKm75uoFtDnhnSlMiGi3AwA4FEzqYW_CYlJsNajybU14YKUNvg13XxzEPCBdy_ai3dhgENEsz6_j9UQs](https://github.com/NLie2/weather-app/assets/99728936/46bb3009-2149-4337-a2eb-e37997acb298)

#### Nathalie
- Stubbing up basic layout (Nathalie)
- API request  (Nathalie)
- save relevant data to object
- Implement components
- temperature
- region
- date
- weather 
- Humidity
- find sunny place function (button)
- add more places
- double check if place is hot right now
- Make sure that the place in search input changes when button is clicked. 
- Allow searching for different dates 
- Implement change temperature function so that user can see temperature in both Fahrenheit and celsius 
- Display a different icon next to weather report depending on weather. 

#### Nadja
- Search function (input)
- Get a nice images for 
- answer is yes
- answer is no
- Add bootstrap (Nadja)
- Design (Aufbau mit containern)
- favicon
- mobile version
- title and favicon
- Allow changing date without having to type in place again

## Challenges
This was the first time for both of us working with forks on GitHub so we initially had some problems with pushing and pulling 
Sometimes sharing variables with different components proved to be quite difficult. For instance, the “take me to a sunnier place’ button is supposed to access a random city, and check if the temperature there is hotter than at the place currently displayed, and then display the new place if it is hotter. However, the display functionality cannot easily be accessed by the button component, which is why we solved it by passing a boolean down to the button, that if it was set to true, would lead to the App.js component checking the temperature of the new place. 

## Key takeaways
A big takeaway for me during this project was to only refactor code that another team mate has written AFTER talking to them about it, and to always comment my own code as much as possible to make the reasons for my choices as apparent to my team mate as possible. There was one instance during this project in which I refactored my teammates code only to retrace her steps later. 


## Future imporovements
- a more elaborate algorithm to determine the final answer (right now it is based on a simple temperature cutoff)
- Find sunnier places in immediate proximity (right now a random place out of the top hottest places on earth is chosen)

