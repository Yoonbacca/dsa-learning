function bubbleSort(arr) {
  // Start looping from with a variable called i at the end of the array towards the beginning
  // Start an inner loop with variable called j from the beginning until i-1
  // If arr [j] > arr [j+1] swap those two values!
  // Return sorted array
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// console.log(bubbleSort([9, 456, 2, 2, 5, 7, 75, 5, 34, 3456, 6]));

function selectionSort(arr) {
  // Store the first element as the smallest value you've seen so far
  // Compare this item to the next item in the array until you find a smaller number
  // If a smaller number is found, designate that smaller nubmer to be the new mn and continue until the end of the array
  // if the min is not the value index you initally began with swap the two values
  // Repeat this wit hthe next eelement until the array is sorted
  let minValue;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      minValue = Math.min(arr[i], arr[j]);
      if (arr[j] === minValue) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(selectionSort([9, 456, 2, 2, 5, 7, 75, 5, 34, 3456, 6]));

function insertionSort(arr) {
    // Start by picking the second element in the array
    // Now comapre second element with one before and swap if necessary
    // Continue to next eleemtn and if it is in the incorrect order, iterate through the sorted portion (ie the left side) to place the element in the correct place
    // Repeat until the array is sorted 
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
    