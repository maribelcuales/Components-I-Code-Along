/////   Components I    /////
// Instructor: Christina Gorton 

// TK: https://learn.lambdaschool.com/web2/module/rec847sNXZX9CVDNl
// youtube: https://www.youtube.com/watch?v=AJjYtcq1Uf4&amp=&feature=youtu.be

// Notion Notes:
// https://www.notion.so/Components-I-96090141608b468f94b070a78f49bbce

// Code Along (codepen): 
// Components I Solution:
// https://codepen.io/maribelcuales/pen/ZEbyyxm
// Components I starter (Bel's): 
// https://codepen.io/maribelcuales/pen/mdewErP

// Components Breakout Solution:
// https://codepen.io/maribelcuales/pen/ExVXXEz

// Project: 
// https://github.com/LambdaSchool/Newsfeed-Components


/////   Components    /////
// - are reusable pieces of code that can be used to build elements sharing functionality and styling. 
//- Components are the heart of any dynamic web application and JavaScript framework.
// A component is made of several parts: HTML, CSS, or JavaScript brought together for reuse in a website or application.


// Components - HTML:
// When building HTML with a component mentality, you need to ask the question: “What am I trying to display from my data?”


// Components - CSS:
// - Components should be modular or stand-alone.
// - One way that can help you control your styles is to use a specificity chain that only matches up with your component. 
// - Use a specific class name to accomplish this
// - When using preprocessors (e.g less)

@import custom-btn.less
.custom-btn {
  // custom styles here
}

// Components: JavaScript:
// - JavaScript is used to consume the data and output the content into the DOM. 
// - We can use Javascript to consume the HTML and return a component version of it! 

// JavaScript is the core component in the repeatable nature of components. Using a function and createElement, we can create unique components and add those to the DOM.


/////   .forEach    /////
// - is a simple way to iterate over the array, create components, and add them instantly to the DOM.

const data = [
    "Button One",
    "Button Two",
    "Button Three",
    "Button Four"
  ]
  
  function buttonCreator(buttonText){
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.classList.add('button');
    button.addEventListener('click', (e) => {
      console.log('clicked!');
    });
    return button;
  }
  
  data.forEach((arrayItem) => {
    let newButton = buttonCreator(arrayItem);
    parent.appendChild(newButton);
  });
  
  // we created a new component for each item in the array and added it to the DOM.
  


  /////   .map    /////
// - returns a new array with the items transformed (by our callback) 
// - We can then do whatever we please with this array.

let newComponents = data.map((arrayItem) => {
    let newButton = buttonCreator(arrayItem);
  
    // Remember, we always need to return something when we use .map
    return newButton;
});


  


