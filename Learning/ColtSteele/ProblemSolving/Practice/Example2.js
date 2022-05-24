//=============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
//=============================================================================================

charCount("aa%aa$"); // {a:4} or {a:4, b:0, ...}
charCount("hello"); // {h:1, e:1, l:2, o:1}
// good questions should ask about casing, numbers, symbols, expected output
// depending on edgecases what should you do

// function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
    // if the char is number/letter AND a key in object, add one to count
    // if the char is number/letter AND is not in our object, add it and set value to 1
    // if the char is something else, i.e. $, don't do anything
  // return object at end
// }

// me before professor

function charCount(str) {
  let obj = {}; // make object to return at end
  let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z","1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // create acceptable inputs
  let newStr = str.toLowerCase(); // downcase the string
  for (let i = 0; i < newStr.length; i++) {// loop over string, for each character...
    if (arr.includes(newStr[i]) &&  obj[newStr[i]]) // if the char is number/letter AND a key in object, add one to count
      obj[newStr[i]] += 1;
    else if (arr.includes(newStr[i]) && !obj[newStr[i]])  // if the char is number/letter AND is not in our object, add it and set value to 1
      obj[newStr[i]] = 1;
    else {} // if the char is something else, i.e. $, don't do anything
  }
  console.log(obj)
  return obj;// return object at end
}

// professor

function charCountP(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is number/letter AND a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    // if the char is number/letter AND is not in our object, add it and set value to 1
    } else {
      result[char] = 1;
    }
    // if the char is something else, i.e. $, don't do anything
  }
  // return object at end
  return result;
}