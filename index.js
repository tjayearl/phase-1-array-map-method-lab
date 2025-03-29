// Original tutorials array
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

// Function to convert titles to title case
function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ") // Split title into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
      .join(" "); // Join words back into a sentence
  });
}

// Function to display the list in HTML
function displayTutorials() {
  const listContainer = document.getElementById("tutorials-list"); // Find the HTML element
  if (!listContainer) {
    console.error("Element with ID 'tutorials-list' not found.");
    return;
  }

  const formattedTitles = titleCased(); // Get the formatted titles
  listContainer.innerHTML = formattedTitles
    .map(tutorial => `<li>${tutorial}</li>`)
    .join(""); // Convert array into list items and add to HTML
}

// Run the function after the page loads
document.addEventListener("DOMContentLoaded", displayTutorials);
