const { expect } = require("chai");
const titleCased = require("../index"); // Ensure index.js exports titleCased

describe("titleCased function", () => {
  it("should capitalize each word in the tutorials array", () => {
    const tutorials = [
      "what does the this keyword mean?",
      "what is the constructor oo pattern?",
    ];

    const expectedOutput = [
      "What Does The This Keyword Mean?",
      "What Is The Constructor Oo Pattern?",
    ];

    expect(titleCased(tutorials)).to.deep.equal(expectedOutput);
  });
});
