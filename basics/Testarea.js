/*function multiply(arr, n) {
   var product = 1;
   // console.log(product)
   for (var i = 0; i < n; i++) {
     console.log("i: ", i)
     console.log("product1: ", product)
     product *= arr[i];
     console.log("product gerechnet: ", product)
   }
   return console.log(product);
}
multiply([5, 6, 10], 3)
*/

function multiply(arr, n) {
  if (n <= 0) {
    console.log("if: ", n)
    return 1;
  } else {
    console.log(n)
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
console.log(multiply([5, 6, 10], 3));