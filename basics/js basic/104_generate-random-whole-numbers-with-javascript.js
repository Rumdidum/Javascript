function randomWholeNum(myMin, myMax) {
  
  // Only change code below this line
  for (var i = 0; i <= 100; i++) {
    var randNum = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    console.log(randNum)
    if (randNum == 0) {
      return console.log(randNum);
    } else if (randNum == 2) {
      return console.log(randNum)
    }
  }
}
randomWholeNum(0, 6);
/*
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
console.log(randomRange(20, 100))
*/

// Explanation Hint section:
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-generate-random-whole-numbers-within-a-range/18187/9
/*
pineapple
AhmedMJ
Jul '17

Given var myRandom = randomRange(2, 6);

Lets start with `Math.floor(Math.random() * (6 + 1))’ 
because we can agree that it returns 0-6.

However! If Math.random() returned 0 then Math.floor(0 * (6 + 1)) 
would return 0 which is outside of our given range 
of 2 through 6.

So the next logical step is to add two after all the multiplication has been executed. 
hich would look like: Math.floor(Math.random() * (myMax + 1)) + myMin

However! If Math.random() returned 6.99999 then 
Math.floor(6.99999 * (6 + 1)) + 2 would return 8! 
which is outside of our given range of 2 through 6. no good 

SOOO we have to subtract the min from our max then add one to 
guarantee that the floor of random * our ( 6 - 2) is no greater 
than 4 that way we can still add the min at the end incase Math.random generates a 0 .

Essentially what this does is gets a number between 0 and 4 and adds 2 to the number. 
Which is equal to the range 2 through 6.

In other words.

The range of 0 through 4 plus 2 is equal to the range 2 through 6.
*/



