// Array of tutorial names
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

// Function to title case the tutorial names
function titleCased(tutorials) {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        return word.length > 1 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word;
      })
      .join(" ");
  });
}

// Get the tutorial list element
const tutorialList = document.getElementById('tutorial-list');

// Add each tutorial to the list
titleCased(tutorials).forEach(tutorial => {
  const listItem = document.createElement('li');
  listItem.textContent = tutorial;
  tutorialList.appendChild(listItem);
});

