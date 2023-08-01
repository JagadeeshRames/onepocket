const fs = require('fs');

const fileName = 'data.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file ${fileName}: ${err.message}`);
  } else {
    const wordCount = countWords(data);
    console.log(`Number of words in ${fileName}: ${wordCount}`);
  }
});

function countWords(text) {
  // Split the text by whitespace characters to get an array of words
  const words = text.split(/\s+/);
  // Filter out any empty strings
  const filteredWords = words.filter((word) => word.trim() !== '');
  return filteredWords.length;
}
