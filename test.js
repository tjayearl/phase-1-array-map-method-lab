// test/test.js

const chai = require('chai');
const expect = chai.expect;
const { titleCased } = require('../index'); // Make sure the path to index.js is correct

describe('titleCased function', function() {
  it('should capitalize the first letter of each word in a string', function() {
    const tutorials = [
      "What Does The This Keyword Mean?",
      "What Is The Constructor OO Pattern?",
      "Implementing Blockchain Web API"
    ];
    
    const result = titleCased(tutorials);
    const expected = [
      "What Does The This Keyword Mean?",
      "What Is The Constructor Oo Pattern?",
      "Implementing Blockchain Web Api"
    ];
    
    expect(result).to.deep.equal(expected);
  });
});
