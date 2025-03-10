const recursiveMergeSort = (unsortedArray) => {
  //find the middle point of the array, and allow for rounding down
  const mid = Math.floor(unsortedArray.length / 2);

  //create a 'left' array from index 0 of unsortedArray until the mid point
  const left = unsortedArray.slice(0, mid);
  //create a 'right' array from index 0 of unsortedArray until the mid point
  const right = unsortedArray.slice(mid);

  console.log(`left ${left}`);
  console.log(`right ${right}`);
  //base - if there is only one element left
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  } else {
    //this line continuously excecutes until the base case is met for both params
    return merge(recursiveMergeSort(left), recursiveMergeSort(right));
  }
};

const merge = (left, right) => {
  //create a result array and two counters
  let resultArray = [];
  let i = 0;
  let j = 0;

  //while loop that will check if the sub-array is bigger than the counter (for both)
  while (left.length > i && right.length > j) {
    //compare the two numbers at the different array elements and push the smaller one to the results array
    if (left[i] <= right[j]) {
      resultArray.push(left[i]);
      i++;
    } else {
      resultArray.push(right[j]);
      j++;
    }
  }
  //add the final two values (at indexes i and j in both arrays) and then return the result
  return resultArray.concat(left.slice(i)).concat(right.slice(j));
};

const array = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(recursiveMergeSort(array));
