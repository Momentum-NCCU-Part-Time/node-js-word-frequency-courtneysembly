const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]

const STOP_WORDS = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    }
    // TODO: write code to count the words in the file
    console.log('Initial data read from file: ', data)
    callback('Your word count results should be passed in to this callback')
  })
}

printWordFreq(filePath, (wordCount) => {
  console.log('"a" , "and" , "an" , "are" , "as" , "at", wordCount)
})
// add words here.
function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
  

console.log(wordFreq("I am the big the big bull."));
Object {}
// add words here.