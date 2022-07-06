areThereDuplicates('a','b','c','a');

function areThereDuplicates() {
  let lookup = {};
  for (let i = 0; i < arguments.length; i++) {
    let variable = arguments[i];
    if (!lookup[variable]) {
      lookup[variable] = 1;
    } else {
      return true;
    }
  }
  return false;
}