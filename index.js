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
  if (!tutorials || !Array.isArray(tutorials)) {
    throw new Error("tutorials is not an array or is undefined");
  }
  
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        // Capitalize the first letter and make the rest lowercase
        return word.length > 1 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word;
      })
      .join(" ");
  });
}

console.log(titleCased(tutorials)); // Call the function with the tutorials array

