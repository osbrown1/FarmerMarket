# :herb: Avery's "Organics" :herb:

#### By Owen Brown, Jannon Sielaff, Mitchell Gantz, 

A client for users to view where and when they can buy some produce.

[Component Diagram](#component-diagram)
[Setup/Installation Guide](#setup/installation-guide)
[Bugs](#known-bugs)
[License](#license)


## Technologies Used

   * Javascript
   * React
   * HTML / CSS
   * Babel
   * Bootstrap
  
## User Stories
  * Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce and sells it at farmers markets throughout town. Since Avery's is at a different market almost every day, they've asked for a website to show customers which market they will be at on a given day.

  * Avery's also grows different crops in different seasons. They'd like to display what produce is available during which months on their site too.

## Lesson Prompt
* Using React and all other tools we've covered so far, create a website that depicts this information. The data you'll use is in the Cheat Sheet section of this lesson. Also, take time to construct your entire environment from scratch. It's important to practice these fundamentals before we increase the complexity of our projects later in this course section!

* Try using local state to toggle between different days. Note that we can use conditional rendering for as many conditions as we want — including all seven days of the week!

## Component Diagram
```
App.js
├── Header.js
├── SeasonalProduce.js
│   ├── Produce.js           
├── MarketSchedule.js
│   ├── DateControl.js       
```
## Mockup
![Mockup](./CAPTURE.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup and Installation

Clone this project to your local machine by using the following command:
```
git clone https://github.com/osbrown1/FarmerMarket.git
```

**Directions after cloning:**
1. Open the `farmermarket` directory within your CLI.
2. Install all Node packages and dependencies with the command `npm install`.
3. Package and open the project in your browser using `npm run start`.

## Known Bugs

## License

MIT License

Copyright (c) 2023 Owen Brown, Jannon Sielaff, Mitchell Gantz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.