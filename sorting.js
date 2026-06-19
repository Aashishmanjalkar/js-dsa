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


const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr
    }
    mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right) 
}
merge = (left, right) => {
    let result = []
    let i = 0;      
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){                     
            result.push(left[i])
            i++
        }               
        else{                   
            result.push(right[j])
            j++
        }           
    }
    return result
}

mergeSort([1,4,8,3,2,5])