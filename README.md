# Star Wars Tracker
**Detailed information on your favorite people, planets, and vehicles from the Star Wars series.**

Check it out: https://star-wars-tracker.herokuapp.com/


![App-Gif](https://s3.us-east-2.amazonaws.com/fcc-weather-app/star-wars-tracker/ster-werz.gif)

# MVP List

- [X] Display people, planets, and vehicle data from the Star Wars API
- [X] Persist favorites using the browser's Local Storage API
- [X] Separate routes for people, planets, vehicles, and favorites
- [X] Mobile responsive
- [X] Subtle hover and transition animations on clicks 

# V2

- [ ] Add route that displays the rolling screen at the beginning of every Star Wars movie
- [ ] Add tranlation to "Shwookie", the official Wookie language, because... that's important these days

## Purpose

* Practice building out modular React components 
* Learn how to handle nested asynchronous requests using axios and async/await (*spoiler:* it's challenging but rewarding!)

## Technologies

* React 
* Star Wars API (SWApi)
* CSS3 (Animations, Flexbox, Media Queries, etc.)
* Styled Components

## Wireframes and Components
- Home
  - Components:
    - `OptionsContainer` + `Option`
      - Route: `/`

![Home](https://s3.us-east-2.amazonaws.com/fcc-weather-app/star-wars-tracker/Capture2222.JPG)

## Results
###
- ResultsContainer
  - Routes:
    - `/people`
    - `/places`
    - `/vehicles`
  - Components
    - `ResultsContainer`      
      - State:
        - People: `name`, `homeworld`, `species`, `language`, `homeworldPopulation`
        - Planets: `name`, `terrain`, `population`, `climate`, `residents`
        - Vehicles: `name`, `model`, `class`, `numOfPassengers`

![ResultsContainer](https://s3.us-east-2.amazonaws.com/fcc-weather-app/star-wars-tracker/Capture2.JPG)

- ResultsCard
  - Components
    - `ResultCard` + `ResultData` + `ResultHeading` + `ResultFavoriteBtn`      
      - State: `favorited`

![ResultsContainer](https://s3.us-east-2.amazonaws.com/fcc-weather-app/star-wars-tracker/helloJPG.JPG)
