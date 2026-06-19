//Bubble sort 
const arr = [1,4,8,3,2,5]

const bubblesort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
           if(arr[j] > arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp 
           }
        }
    }
    console.log(arr);
}


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        let temp = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j
            }
        }
        arr[i] = arr[min]
        arr[min] = temp
    }
    console.log(arr);
}

// [1,4,8,3,2,5]
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j = i - 1;
        console.log(j, arr[j] , currentValue, arr[j] > currentValue, arr);
        while (j >= 0 && arr[j] > currentValue) {
            console.log("while loop ", arr[j+1], arr[j] );
            arr[j + 1] = arr[j];
            j--;
            console.log("j ", j);
        }
        console.log("after while loop ", arr, "------------------", arr[j+1], currentValue);
        arr[j + 1] = currentValue;
        console.log("after insertion ", arr, "------------------");
        
    }
}

// bubblesort(arr)
// selectionSort(arr)
insertionSort(arr)


// Helper function to merge two already sorted arrays
function merge(left, right) {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and push the smaller one
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++; 
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements left over in either array
  return sortedArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Main recursive function to split and sort the array
function mergeSort(arr) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index to split the array
  const middle = Math.floor(arr.length / 2);
  
  // Split into left and right halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively split and merge
  return merge(mergeSort(left), mergeSort(right));
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(unsortedArray));