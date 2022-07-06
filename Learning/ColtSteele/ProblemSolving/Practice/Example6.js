let array = [1,1,1,1,1,2];
countUniqueValues(array)
// my solution
function countUniqueValues(array1){
  let arr = [...array1];
  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer2 <= arr.length){
    if (arr[pointer1] === arr[pointer2]) {
      pointer2++;
    } else {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  return pointer1;
}
// professor solution
function countUniqueValuesP(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}