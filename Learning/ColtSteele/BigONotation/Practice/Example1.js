
function addUpToV1(n) { // O(n)
  let total = 0;
  for (let i = 1; i<= n; i++) {
    total += i;
  }
  return total;
}

function addUpToV2(n) { // O(1)
  return n * (n + 1) / 2;
}

function logAtLeast5(n) { // O(n)
  for (let i = 1; i<= Math.max(5, n); i++) {
    console.log(i);
  } 
}

function logAtMost5(n) { // O(1)
  for (let i = 1; i<= Math.min(5, n); i++) {
    console.log(i);
  } 
}

function testTime(func) {
  let n = 1000000000;
  let t1 = performance.now();
  console.log(func(n))
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
}

testTime(addUpToV2);