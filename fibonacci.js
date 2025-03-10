function fibs(runTime) {
  fibArray = [];
  let i = 0;
  let j = 1;
  fibArray.push(i);
  fibArray.push(j);
  while (runTime - 2 > 0) {
    newNum = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
    fibArray.push(newNum);
    runTime--;
  }
  return fibArray;
}

console.log(fibs(8));

//PSEUDOCODE
//create a funtion that takes a variable dictating how many times it will run (8 in this case).
//create an empty array
//create a starting number, which is zero
//add zero to the array
// create a second number, which is 1
//add 1 to the array
//add i and j, and make i equal the result.
//keep doing that until the array length is the same as the variable entered (8 in this case)
//return the array (or console.log)

function fibsRec(runTime) {
  if (runTime < 3) {
    return [0, 1];
  } else {
    let arrayFib = fibsRec(runTime - 1);
    arrayFib.push(
      arrayFib[arrayFib.length - 1] + arrayFib[arrayFib.length - 2]
    );
    return arrayFib;
  }
}

console.log(`Recursive: ${fibsRec(8)}`);

//PSEUDOCODE
//create a funtion that takes a variable dictating how many times it will run (8 in this case).
//create an empty array
//create a starting number, which is zero
//add zero to the array
// create a second number, which is 1
//add 1 to the array
//if runTime <2 return the array
//else take one away from runtile and then add the two last array elements together
