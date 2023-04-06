
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// cb fn converts each string element to UC
function convertStringsToUC(stringItem) {
  // split each stringItem into an array of strings 
  // whenever a blank space is encountered
  const arr = stringItem.split(" ");
  //loop through each element of the array  and capitalize the first letter.
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  // Join all the elements of the sliced string back into a 
  // combined string  using a blankspace as a separator 
  const str2 = arr.join(" ");
  return str2
}

// create mew array with converted strings
const newArray = tutorials.map(convertStringsToUC)

// return new array
const titleCased = () => {
  return newArray
}

titleCased()

