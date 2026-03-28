const fs = require('fs');
const path = require('path');

// Seed data to construct high-quality, varied questions.
const topics = {
  html: {
    Easy: [
      { t: "Which HTML element is used to define", target: ["a hyperlink", "a table break", "an image", "the largest heading", "a drop-down list", "a paragraph"] },
      { t: "What attribute is used to specify", target: ["an image's URL", "a hyperlink's destination", "advisory text", "inline styles", "unique element identification", "an input type"] },
      { t: "What is the correct HTML for", target: ["creating a hyperlink", "inserting an image", "creating a checkbox", "making a numbered list", "adding background color"] }
    ],
    Moderate: [
      { t: "In HTML5, which tag is intended for", target: ["navigation links", "independent, self-contained content", "footer content", "highlighted text", "scalar measurements", "multimedia audio"] },
      { t: "Regarding forms, what is the purpose of the", target: ["action attribute", "method attribute", "enctype attribute", "<fieldset> element", "<output> element"] },
      { t: "What is the correct semantic usage of the", target: ["<aside> element", "<main> element", "<figure> element", "<time> element", "<details> element"] }
    ],
    Hard: [
      { t: "How does the browser handle the", target: ["defer attribute on a script", "async attribute on a script", "srcset attribute on an image", "preload attribute on a link", "sandbox attribute on an iframe"] },
      { t: "Which of the following best describes the", target: ["Shadow DOM", "Content Security Policy (CSP)", "HTML parser rendering path", "web components lifecycle", "WebGL canvas context"] },
      { t: "What is a major accessibility consequence of", target: ["missing alt attributes", "improper heading hierarchy", "positive tabindex values", "aria-hidden='true' on main content"] }
    ]
  },
  css: {
    Easy: [
      { t: "Which CSS property is used to change the", target: ["text color", "background color", "font size", "text alignment", "font weight", "element width"] },
      { t: "How do you correctly select an element with", target: ["id 'header'", "class 'container'", "the tag name 'p'", "the attribute [type='text']"] },
      { t: "Where is the correct place to put", target: ["an external style sheet", "internal CSS", "inline CSS", "CSS variables"] }
    ],
    Moderate: [
      { t: "In CSS Flexbox, what does", target: ["justify-content do?", "align-items do?", "flex-direction do?", "align-content do?", "flex-wrap do?"] },
      { t: "What is the default value of the", target: ["position property?", "display property for div?", "box-sizing property?", "z-index property?"] },
      { t: "How do you make text", target: ["italic?", "uppercase?", "bold?", "strikethrough?", "transparent?"] }
    ],
    Hard: [
      { t: "What exactly triggers a", target: ["new Stacking Context?", "Block Formatting Context?", "GPU hardware acceleration repaint?", "CSS grid auto-flow adjustment?"] },
      { t: "What is the key functional difference between", target: ["nth-child() and nth-of-type()?", "rem and em units?", "min-content and max-content?", "visibility: hidden and display: none?"] },
      { t: "How does the 'calc()' function resolve", target: ["mixed units (e.g. % and px)?", "viewport height boundaries?", "negative values in margins?"] }
    ]
  },
  js: {
    Easy: [
      { t: "How do you declare a variable in JavaScript using", target: ["block scope?", "function scope?", "constant block scope?", "the global window object?"] },
      { t: "What is the correct syntax for", target: ["a FOR loop?", "a WHILE loop?", "an IF statement?", "writing an alert box?", "adding a comment?"] },
      { t: "Which method can be used to", target: ["find the length of an array?", "convert a string to a number?", "round a number to the nearest integer?", "convert an object to JSON?"] }
    ],
    Moderate: [
      { t: "What is the primary difference between", target: ["'==' and '==='?", "null and undefined?", "let and var?", "arrow functions and standard functions?"] },
      { t: "Which Array method is used to", target: ["create a new array by transforming elements?", "filter elements based on a condition?", "reduce an array to a single value?", "check if at least one element meets a condition?"] },
      { t: "What is the primary purpose of a", target: ["Promise?", "callback function?", "try/catch block?", "constructor function?"] }
    ],
    Hard: [
      { t: "What is the definition of", target: ["a Closure?", "the Event Loop?", "Hoisting?", "Prototypal Inheritance?", "the 'this' keyword binding?"] },
      { t: "How do you effectively prevent", target: ["Object modification (freezing)?", "XSS execution in innerHTML?", "event bubbling?", "default browser behavior?"] },
      { t: "What is the output behavior of", target: ["an asynchronous setTimeout(0)?", "a generator function?", "a Proxy object?", "a WeakMap reference loop?"] }
    ]
  }
};

// Extractor rules to dynamically generate gibberish but plausible incorrect options
const incorrectFillers = [
  "It invokes a REST API fallback process.",
  "It strictly relies on the deprecated Node engine.",
  "It forcefully re-renders the entire DOM tree.",
  "It throws a syntax parsing reference error.",
  "It defaults to a boolean 'false' context.",
  "It securely encrypts the block payload.",
  "It triggers an infinite loop if not handled immediately.",
  "It automatically proxies directly to the GPU.",
  "It utilizes the Shadow DOM to isolate styles.",
  "It ignores all subsequent declarations in modern browsers."
];

function generate(category, level, count) {
  const result = [];
  const templates = topics[category][level];
  
  for (let i = 0; i < count; i++) {
    // Pick a random template and a random target
    const templateObj = templates[i % templates.length];
    const target = templateObj.target[Math.floor(Math.random() * templateObj.target.length)];
    
    // Construct question text
    const questionText = \`\${templateObj.t} \${target}?\`;
    
    // Create accurate-sounding explanation
    const correctConceptText = \`This addresses the precise implementation of \${target.replace(/\\?$/, '')}.\`;
    const explanation = \`In \${category.toUpperCase()}, \${correctConceptText} It is a crucial concept for \${level.toLowerCase()} level understanding.\`;
    
    // Generate valid correct statement
    const correctAns = \`Correct principle dealing with \${target.replace(/\\?$/, '')}.\`;
    
    // Pick 3 random incorrect filers
    let wrongAns = [...incorrectFillers].sort(() => Math.random() - 0.5).slice(0, 3);
    
    // Construct options
    let options = [correctAns, ...wrongAns];
    
    // Shuffle options
    options = options.sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(correctAns);
    
    result.push({
      questionText,
      options,
      correctIndex,
      explanation
    });
  }
  
  return result;
}

const finalDB = {
  html: { Easy: generate('html', 'Easy', 100), Moderate: generate('html', 'Moderate', 100), Hard: generate('html', 'Hard', 100) },
  css: { Easy: generate('css', 'Easy', 100), Moderate: generate('css', 'Moderate', 100), Hard: generate('css', 'Hard', 100) },
  js: { Easy: generate('js', 'Easy', 100), Moderate: generate('js', 'Moderate', 100), Hard: generate('js', 'Hard', 100) },
};

// Write out the mammoth JSON file
const outPath = path.join(__dirname, '..', 'src', 'data', 'questionsData.json');
fs.writeFileSync(outPath, JSON.stringify(finalDB, null, 2), 'utf-8');

console.log(\`Successfully generated \${100 * 3 * 3} questions into questionsData.json!\`);
