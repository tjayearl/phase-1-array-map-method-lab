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
  return tutorials.map(tutorial =>
    tutorial
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );
}

function displayTutorials() {
  const list = document.getElementById("tutorial-list");
  const titleCasedTutorials = titleCased();
  
  titleCasedTutorials.forEach(tutorial => {
    const listItem = document.createElement("li");
    listItem.textContent = tutorial;
    list.appendChild(listItem);
  });
}

displayTutorials();

module.exports = { titleCased };
