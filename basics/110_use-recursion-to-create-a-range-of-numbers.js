function rangeOfNumbers(startNum, endNum) {
  
  if (endNum == startNum) {
    return [endNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum)
    return countArray;
  }
};

console.log(rangeOfNumbers(1, 9));