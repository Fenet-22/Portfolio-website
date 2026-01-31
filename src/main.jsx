// src/main.jsx

// This is like the GRAND OPENING CEREMONY of our website!
// It's the VERY FIRST FILE that runs when someone visits our website

// ========== IMPORTING OUR TOOLS ==========
// Think of these like getting all our construction equipment ready:

// React is our main building material (like LEGO bricks)
import React from 'react'

// ReactDOM is our construction crane that puts our website onto the page
// DOM = Document Object Model (that's the fancy name for "the webpage")
import ReactDOM from 'react-dom/client'

// App is our complete building - it's the whole website!
// This comes from our App.jsx file (the construction manager)
import App from './App.jsx'

// globals.css is our paint and decorations for the building
import './styles/globals.css'

// ========== THE MAGIC STARTING POINT ==========
// This is where the magic happens - like saying "1, 2, 3, ACTION!"

// ReactDOM.createRoot() is like finding the SPOT where we'll build our website
// document.getElementById('root') means:
// "Go find the HTML element with id='root' in the index.html file"
// 
// In your index.html file, there's a line like this:
// <div id="root"></div>
// That's the EMPTY CONTAINER where our React app will live!

// .render() is like our CONSTRUCTION CREW that actually builds everything
// It takes our App component and puts it INSIDE that #root div

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> is like having a SAFETY INSPECTOR
  // It helps find problems and makes sure we're building things correctly
  // It doesn't show up on the screen - it's just for development help
  <React.StrictMode>
    
    {/* <App /> is our ENTIRE WEBSITE - it's the App component from App.jsx */}
    {/* This is like saying: "Build the whole App inside the #root container!" */}
    <App />
    
  </React.StrictMode>
)

// ========== WHAT THIS ALL MEANS (FOR A 4-YEAR-OLD) ==========

/*
IMAGINE OUR WEBSITE IS A DOLLHOUSE:

1. **index.html** is like the EMPTY BOX the dollhouse comes in
   - It has a label that says "Put dollhouse here" (that's the <div id="root">)

2. **main.jsx** is like the PERSON who opens the box and starts building
   - They find the "Put dollhouse here" spot
   - They take out all the dollhouse pieces (our React components)
   - They follow the instructions to build it

3. **ReactDOM.createRoot()** is like finding the "Put dollhouse here" spot
   - "Hey, I found where the dollhouse should go!"

4. **.render()** is like actually BUILDING the dollhouse
   - Taking all the pieces and putting them together

5. **<App />** is the COMPLETE DOLLHOUSE with all rooms
   - Living room (Home page)
   - Bedroom (About page)
   - Playroom (Projects page)
   - Kitchen (Skills page)
   - Front porch (Contact page)

6. **<React.StrictMode>** is like having a PARENT watch you build
   - "Make sure you don't put the roof on backwards!"
   - "Check if all the pieces fit together right!"

WHEN SOMEONE VISITS OUR WEBSITE:

1. Their browser finds index.html
2. index.html says "Go get main.jsx"
3. main.jsx says "Go get all the React tools"
4. main.jsx says "Find the #root spot"
5. main.jsx says "Build the App there!"
6. VOILA! Our website appears! 

IT'S LIKE MAGIC, BUT IT'S REALLY JUST CLEVER PROGRAMMING! 
*/

// ========== EXTRA NOTE FOR GROWNUPS ==========
/*
In modern React (version 18+), we use:
- ReactDOM.createRoot() instead of ReactDOM.render()
- This allows for cool features like concurrent rendering

The process is:
1. Create a "root" container where React will manage everything
2. Tell React to render our App component into that root
3. React takes over and handles all updates automatically

This file is the ENTRY POINT - the first JavaScript file that runs.
Everything else in our app is loaded from here!
*/