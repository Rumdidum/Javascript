/*function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
    console.log(result)
  }
  return result;
}*/




function pow(x, n) {
  if (n == 1) {
    console.log(`if (n == 1): n: ${n} x: ${x}`)
    return x;
  } else {
    console.log(n)
    return x * pow(x, n - 1);
  }
}


console.log(pow(2, 3)); // 8

// recursive steps
// 1. pow(2, 3) = 2 * pow(2, 2) 2 *
// 2. pow(2, 2) = 2 * pow(2, 1) 2 * 
// 3. pow(2, 1) = 2             2
// result 2 * 2 * 2 * 2 = 8