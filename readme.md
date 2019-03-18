# WDI-project-2

# General Assembly Project 2 : Reacathon

## Goal: **build a React application** that consumes a **public API**
### Timeframe
2 days

## Technologies used

* React
* Axios
* Bulma
* Skiddle API
* Mapbox-gl
* Webpack
* Babel
* Dotenv
* GitHub

## App name: EventBored

### App Overview
Using the Skiddle API, the app presents the user with events taking place in London. The user may  filter the events based on the type they are interested in, such as Concerts or Exhibitions.

Once a type is selected, the app displays an index of events, their location, venue and date.

After selecting an event, the user may read its description while details of the venue are presented on a map using the Mapbox-gl API.

## Process
We started by testing the Skiddle API in insomnia to form a general idea of which data we wanted to pull and how we could present it.

We then drew a general wireframe for each page, laying down some general concepts of how we wanted the app's functionality to operate.

We then followed a step-by-step process of implementing basic functionality:
- A homepage with a navigation bar
- An index of unfiltered events
- A page displaying details of the chosen event
  - Within the event display page, a map illustrating the venue details and location.

We then expanded on the features to include a filter by event type, and the homepage was styled to clearly illustrate the navigation options.

## Future features

* On the homepage: Instead of a solid colour background on the button tile, pull an image from the first event in the category to use as a background for the button.
* On the specific index pages: Enable an option to filter events by date.
* On the event display page: Add a list of 3 other events in that category at the bottom of the page.
