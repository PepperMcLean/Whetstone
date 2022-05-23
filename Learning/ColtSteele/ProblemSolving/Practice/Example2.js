//=============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
//=============================================================================================

charCount("aaaa$"); // {a:4} or {a:4, b:0, ...}
charCount("hello"); // {h:1, e:1, l:2, o:1}
// good questions should ask about casing, numbers, symbols, expected output
// depending on edgecases what should you do

function charCount(str) {
  let banned = ['$','0']
  let arr = str.toLowerCase().split('');
  let obj = {}
  arr.forEach(element => {
    if (obj[element] = true) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
    if (banned.includes(element)) { 
      obj = "error invalid char"
      return;
    }
  });
  console.log(obj)
}