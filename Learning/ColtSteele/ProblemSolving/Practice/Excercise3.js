sameFrequency(142,124)

function sameFrequency(first, second){

  let num1 = first.toString();
  let num2 = second.toString();

  if (num1.length !== num2.length) return false;

  let lookup = {};

  for (let i = 0; i < num1.length; i++){
    let number = num1[i];
    lookup[number] ? lookup[number] += 1 : lookup[number] = 1;
  }

  for (let i = 0; i < num2.length; i++){
    let number = num2[i];
    if (!lookup[number]) {
      return false;
    } else {
      lookup[number] -= 1;
    }
  }
  return true;
}