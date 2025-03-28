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

function titleCased(tutorials) {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        if (['API', 'JSONP'].includes(word)) {
          return word.toUpperCase();
        }
        return word.length > 1 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word;
      })
      .join(" ");
  });
}

// Get the list element from the HTML
const listElement = document.getElementById('tutorial-list');

// Display the titleCased tutorials in the list
titleCased(tutorials).forEach(tutorial => {
  const listItem = document.createElement('li');
  listItem.textContent = tutorial;
  listElement.appendChild(listItem); // Add each tutorial as a list item
});
