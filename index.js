const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

function titleCased() {
  const smallWords = [
    'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet', 'with'
  ];

  return tutorials.map(title => {
    return title.split(' ').map((word, index) => {
      // Capitalize the first word and any word not in smallWords
      if (index === 0 || !smallWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // For small words, leave them in lowercase (unless it's the first word)
      return word.toLowerCase();
    }).join(' ');
  });
}

console.log(titleCased());
