function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

function stringSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] !== str2[j]) {
        break;
      } else if (str1[i] === str2[j]) {
        if (j === str2.length - 1) {
          count++;
        }
      }
    }
  }
  return count;
}

function insertionSort(arr) {
  // Start by pickingthe second element in the array
  // Now compare the second element with the one before it and swap if necessary
  // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
  // Repeat until the array is sorted

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i !== arr1.length && j !== arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Push remaining elements of arr1 if any
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Push remaining elements of arr2 if any
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // Break up the array into halves until you have arrays that are empty or have one elements
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);

  // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  // ONce the array has been merged back together, return the merged and sorted array
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);
  //left
  quickSort(arr, left, pivotIndex - 1);
  //right
  quickSort(arr, pivotIndex + 1, right);
}

// function getDigit1(num, place) {
//   let str = num.toString();
//   return parseInt(str[str.length - 1 - place]);
// }

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 0));

function digitCount(num) {
  return num.toString().length;
}

console.log(digitCount(12345));

function maxDigits(arr) {
  let max = 0;
  for (let val of arr) {
    max = Math.max(max, digitCount(val));
  }
  return max;
}

console.log(maxDigits([1234, 56, 7]));

function radixSort(nums) {
  let maxDigitCount = maxDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // accept val
    // create new node using value
    let newNode = new Node(val);
    // if there is no head, set head and tail to be newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // otherwise, set next property on tail to be the new node and set the tail propety on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment length by one
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("goodbye");
console.log(list.push("hello"));
