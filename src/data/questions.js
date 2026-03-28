const questionBank = {
  html: {
    Easy: [
      {
        questionText: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Tool Markup Language"
        ],
        correctIndex: 0,
        explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages."
      },
      {
        questionText: "Which HTML element is used to define the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        correctIndex: 2,
        explanation: "The <h1> element defines the most important heading, which defaults to the largest size."
      },
      {
        questionText: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<tr>"],
        correctIndex: 1,
        explanation: "The <br> tag inserts a single line break and is an empty element."
      },
      {
        questionText: "Choose the correct HTML element to define important text.",
        options: ["<important>", "<b>", "<strong>", "<i>"],
        correctIndex: 2,
        explanation: "The <strong> element is used to define text with strong importance, rendering typically in bold."
      },
      {
        questionText: "Which character is used to indicate an end tag?",
        options: ["*", "/", "<", "^"],
        correctIndex: 1,
        explanation: "The forward slash (/) is used before the tag name to indicate an end tag, like </div>."
      }
    ],
    Moderate: [
      {
        questionText: "Which HTML5 element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<footer>", "<section>", "<end>"],
        correctIndex: 1,
        explanation: "The <footer> element represents a footer for its nearest ancestor sectioning content."
      },
      {
        questionText: "Which attribute is used to provide an advisory text about an element or its content?",
        options: ["tooltip", "title", "alt", "info"],
        correctIndex: 1,
        explanation: "The 'title' attribute specifies extra information about an element, often shown as a tooltip."
      },
      {
        questionText: "In HTML5, which method is used to store data locally with no expiration date?",
        options: ["sessionStorage", "localStorage", "cookies", "globalStorage"],
        correctIndex: 1,
        explanation: "The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed."
      },
      {
        questionText: "Which HTML element is used to display a scalar measurement within a known range?",
        options: ["<measure>", "<range>", "<meter>", "<gauge>"],
        correctIndex: 2,
        explanation: "The <meter> element represents a scalar measurement within a known range, or a fractional value."
      },
      {
        questionText: "What is the correct HTML for making a checkbox?",
        options: ["<input type='check'>", "<check>", "<checkbox>", "<input type='checkbox'>"],
        correctIndex: 3,
        explanation: "An <input> element with type='checkbox' renders a checkbox."
      }
    ],
    Hard: [
      {
        questionText: "How does the `defer` attribute work when loading external scripts?",
        options: [
          "It loads the script asynchronously and executes it immediately.",
          "It defers the parsing of the HTML until the script is fully loaded.",
          "It downloads the script while parsing HTML, but waits to execute it until HTML parsing is complete.",
          "It prevents the script from loading on mobile devices."
        ],
        correctIndex: 2,
        explanation: "Scripts with 'defer' are downloaded asynchronously but executed only after the HTML document has been fully parsed."
      },
      {
        questionText: "What is the defining characteristic of the <canvas> element vs <svg>?",
        options: [
          "Canvas is resolution-independent, SVG is pixel-based.",
          "Canvas uses a JavaScript API to draw pixels, SVG uses XML to draw vectors.",
          "SVG is primarily for 3D graphics, Canvas is for 2D.",
          "Canvas handles text better than SVG."
        ],
        correctIndex: 1,
        explanation: "Canvas operates on a pixel matrix using JS calls, making it raster-based. SVG represents graphics as vector shapes using XML."
      },
      {
        questionText: "Which of the following is true about HTML5 web workers?",
        options: [
          "They have direct access to the DOM.",
          "They cannot make network requests.",
          "They run in the background without affecting UI performance.",
          "They share the exact same global scope as the main window."
        ],
        correctIndex: 2,
        explanation: "Web workers run JavaScript in the background, independent of other scripts, without affecting the performance of the page. They cannot access the DOM."
      },
      {
        questionText: "What is the main purpose of the <template> element?",
        options: [
          "To hold client-side content that is not to be rendered when a page is loaded.",
          "To define the main layout structure of a website.",
          "To substitute the <style> tag for dynamic CSS.",
          "To automatically duplicate its content 5 times."
        ],
        correctIndex: 0,
        explanation: "The <template> tag holds HTML content hidden from the user until instantiated using JavaScript."
      },
      {
        questionText: "How does the `srcset` attribute work in an <img> tag?",
        options: [
          "It specifies a fallback image if the primary one fails to load.",
          "It allows the browser to choose the most appropriate image source based on device resolution.",
          "It filters the image using CSS sets.",
          "It prevents the image from being dragged or downloaded."
        ],
        correctIndex: 1,
        explanation: "The 'srcset' attribute provides the browser with multiple image sources and their sizes, allowing the browser to select the optimal one based on pixel density and viewport width."
      }
    ]
  },
  css: {
    Easy: [
      {
        questionText: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctIndex: 0,
        explanation: "CSS stands for Cascading Style Sheets. It dictates how HTML elements are displayed."
      },
      {
        questionText: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["In the <body> section", "At the end of the document", "In the <head> section", "In the <css> section"],
        correctIndex: 2,
        explanation: "External CSS files should be referenced via the <link> tag inside the <head> section."
      },
      {
        questionText: "Which HTML attribute is used to define inline styles?",
        options: ["class", "font", "style", "styles"],
        correctIndex: 2,
        explanation: "The 'style' attribute is used to apply inline styles directly to an HTML element."
      },
      {
        questionText: "Which is the correct CSS syntax?",
        options: ["body {color: black;}", "{body:color=black;}", "body:color=black;", "{body;color:black;}"],
        correctIndex: 0,
        explanation: "CSS rules consist of a selector (body) and a declaration block encased in curly braces ({color: black;})."
      },
      {
        questionText: "How do you insert a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "<!-- this is a comment -->"],
        correctIndex: 1,
        explanation: "CSS comments begin with /* and end with */."
      }
    ],
    Moderate: [
      {
        questionText: "Which CSS property controls the text size?",
        options: ["text-style", "font-style", "text-size", "font-size"],
        correctIndex: 3,
        explanation: "The font-size property sets the size of the font."
      },
      {
        questionText: "How do you select an element with id 'demo'?",
        options: [".demo", "#demo", "demo", "*demo"],
        correctIndex: 1,
        explanation: "The # selector targets an element's unique ID."
      },
      {
        questionText: "What is the default value of the position property?",
        options: ["relative", "fixed", "absolute", "static"],
        correctIndex: 3,
        explanation: "HTML elements are positioned static by default, meaning they flow naturally on the page."
      },
      {
        questionText: "How do you make each word in a text start with a capital letter?",
        options: ["text-style: capitalize", "text-transform: capitalize", "transform: capitalize", "font-style: capitalize"],
        correctIndex: 1,
        explanation: "The text-transform property can be set to 'capitalize' to capitalize the first letter of each word."
      },
      {
        questionText: "Which property is used to change the background color?",
        options: ["color", "bg-color", "background-color", "background-image"],
        correctIndex: 2,
        explanation: "The background-color property is used to specify the background color of an element."
      }
    ],
    Hard: [
      {
        questionText: "Which CSS function allows you to perform calculations to determine CSS property values?",
        options: ["calc()", "compute()", "math()", "val()"],
        correctIndex: 0,
        explanation: "The calc() function allows mathematical expressions for CSS property values (e.g., width: calc(100% - 50px))."
      },
      {
        questionText: "What is the difference between nth-child() and nth-of-type()?",
        options: [
          "nth-child() is 1-indexed, nth-of-type() is 0-indexed.",
          "nth-child() selects based on element order among all siblings; nth-of-type() selects based on order among only siblings of the same element type.",
          "They are identical.",
          "nth-of-type() can only be used with custom elements."
        ],
        correctIndex: 1,
        explanation: "nth-child matches the element based on its position regardless of type. nth-of-type matches based on position only among elements of that specific HTML tag."
      },
      {
        questionText: "In CSS Grid, what does `grid-auto-flow: dense` do?",
        options: [
          "Compacts the grid by removing gutters.",
          "Attempts to fill in holes earlier in the grid if smaller items come up later.",
          "Forces all rows to have equal heights.",
          "Increases the DPI of background images."
        ],
        correctIndex: 1,
        explanation: "The 'dense' packing algorithm attempts to fill in blank spaces in the grid if smaller items appear later in the DOM."
      },
      {
        questionText: "How does z-index interact with stacking contexts?",
        options: [
          "z-index values are global across the entire document.",
          "Negative z-index completely hides an element.",
          "z-index only applies inside a localized stacking context; a higher z-index child cannot overlap an element above its parent's stacking context.",
          "z-index only works on block-level elements."
        ],
        correctIndex: 2,
        explanation: "Stacking contexts isolate child layers. A child with z-index: 999 is stuck inside its parent's stacking context if the parent has a stacking context configured."
      },
      {
        questionText: "Which of the following properties triggers GPU hardware acceleration?",
        options: ["margin", "transform", "padding", "box-shadow"],
        correctIndex: 1,
        explanation: "Properties like transform and opacity do not trigger layout or paint repaints on the CPU; they can be handled by the compositor thread on the GPU."
      }
    ]
  },
  js: {
    Easy: [
      {
        questionText: "What does JavaScript primarily add to a web page?",
        options: ["Styling and layout", "Interactivity and dynamic behavior", "Database storage", "Hardware control"],
        correctIndex: 1,
        explanation: "JavaScript is the programming language of the Web, primarily used to add interactivity, complex features, and dynamic behavior to HTML pages."
      },
      {
        questionText: "Inside which HTML element do we put JavaScript code?",
        options: ["<javascript>", "<js>", "<script>", "<scripting>"],
        correctIndex: 2,
        explanation: "The <script> tag is used to embed or reference an executable JavaScript script within an HTML document."
      },
      {
        questionText: "How do you write 'Hello World' in an alert box?",
        options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        correctIndex: 3,
        explanation: "The alert() method displays an alert box with a specified message and an OK button."
      },
      {
        questionText: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "create myFunction()"],
        correctIndex: 1,
        explanation: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()."
      },
      {
        questionText: "How can you add a comment in JavaScript?",
        options: ["<!-- This is a comment -->", "' This is a comment", "// This is a comment", "/* This is a comment"],
        correctIndex: 2,
        explanation: "Single-line comments start with //, whereas multi-line comments start with /* and end with */."
      }
    ],
    Moderate: [
      {
        questionText: "What is the primary difference between 'let' and 'var'?",
        options: [
          "'let' is globally scoped, 'var' is block scoped.",
          "'let' is block scoped, 'var' is function scoped.",
          "They are exactly the same.",
          "'var' can only be used with numbers."
        ],
        correctIndex: 1,
        explanation: "'var' declarations are globally scoped or function/locally scoped. 'let' and 'const' are block scoped (bounded by {})."
      },
      {
        questionText: "What is a Promise in JavaScript?",
        options: [
          "A method that pauses the entire thread.",
          "An object representing the eventual completion or failure of an asynchronous operation.",
          "A strict mode feature.",
          "A guarantee that an API will return JSON."
        ],
        correctIndex: 1,
        explanation: "A Promise is a proxy for a value not necessarily known when the promise is created, commonly used for asynchronous operations."
      },
      {
        questionText: "How do you find the maximum value of variables x and y?",
        options: ["Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)", "max(x, y)"],
        correctIndex: 2,
        explanation: "Math.max() returns the largest of zero or more numbers."
      },
      {
        questionText: "Which built-in method adds one or more elements to the end of an array?",
        options: ["last()", "put()", "push()", "pop()"],
        correctIndex: 2,
        explanation: "The push() method adds new items to the end of an array and returns the new length."
      },
      {
        questionText: "What does the '===' operator do in JavaScript?",
        options: [
          "Assigns a variable to another.",
          "Compares values without type conversion (strict equality).",
          "Compares values with type conversion (loose equality).",
          "Calculates remainder."
        ],
        correctIndex: 1,
        explanation: "The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result, without converting their types."
      }
    ],
    Hard: [
      {
        questionText: "What is a closure in JavaScript?",
        options: [
          "A function bundled together with references to its surrounding state (lexical environment).",
          "A statement that forcefully ends a loop.",
          "A garbage collection mechanism.",
          "An IIFE (Immediately Invoked Function Expression)."
        ],
        correctIndex: 0,
        explanation: "A closure gives you access to an outer function's scope from an inner function, even after the outer function has returned."
      },
      {
        questionText: "Explain the Javascript Event Loop.",
        options: [
          "It iterates over arrays faster.",
          "It's a mechanism that evaluates the Call Stack and Task Queue to execute operations asynchronously on a single thread.",
          "It listens for CSS transition end events.",
          "It forces code to run synchronously."
        ],
        correctIndex: 1,
        explanation: "The Event Loop continuously checks if the call stack is empty. If it is, it pushes the first task from the callback queue onto the call stack to be executed."
      },
      {
        questionText: "What does the \"use strict\" directive do?",
        options: [
          "Enforces safer, stricter parsing and error handling.",
          "Forces variables to be typed (like TypeScript).",
          "Disables the let keyword.",
          "Halts script execution immediately."
        ],
        correctIndex: 0,
        explanation: "\"use strict\" defines that JavaScript code should be executed in strict mode, which prevents certain actions from being taken and throws more exceptions."
      },
      {
        questionText: "What is the defining difference between Function.prototype.call() and apply()?",
        options: [
          "call() cannot change the 'this' context, apply() can.",
          "call() accepts an argument list, while apply() accepts a single array of arguments.",
          "apply() is much faster in Node.js environments.",
          "There is no difference."
        ],
        correctIndex: 1,
        explanation: "Both invoke a function with a given 'this' value, but call() accepts arguments as a comma-separated list, whereas apply() requires them as an array."
      },
      {
        questionText: "How does prototypal inheritance work in JavaScript?",
        options: [
          "Classes inherit directly from other classes via the 'extends' keyword under the hood.",
          "Objects inherit properties and methods directly from other objects via the prototype chain.",
          "JavaScript copies properties directly into child objects.",
          "JavaScript uses classical inheritance based on Java."
        ],
        correctIndex: 1,
        explanation: "JavaScript objects have a special hidden property [[Prototype]] that is either null or references another object. Properties not found in the object are looked up in its prototype."
      }
    ]
  }
};

export function getQuestions(category, level, count = 30) {
  let questionsPool = [];

  if (category === 'combined') {
    questionsPool = [
      ...questionBank.html[level],
      ...questionBank.css[level],
      ...questionBank.js[level]
    ];
  } else {
    // Return empty array if category or level is misspelled
    questionsPool = questionBank[category]?.[level] || [];
  }

  if (questionsPool.length === 0) return [];

  // Shuffle the initial pool
  let shuffledPool = [...questionsPool].sort(() => Math.random() - 0.5);
  let result = [];
  
  // Pad out to required count (30) to fulfill the test requirement exactly
  while (result.length < count) {
     for (let i = 0; i < shuffledPool.length && result.length < count; i++) {
        result.push({
           ...shuffledPool[i],
           id: `${category}-${level}-${result.length}`
        });
     }
     // Reshuffle for the next batch pass if we still need more questions
     shuffledPool = [...questionsPool].sort(() => Math.random() - 0.5);
  }
  
  return result;
}
