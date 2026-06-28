//Two sum 1 problem

var twoSum = function(numbers, target) {
    let map = new Map()
    for(let i =0; i < numbers.length; i++){
        let findNumber = target - numbers[i]
        if(map.has(numbers[i])){
            return [map.get(numbers[i]) + 1, i + 1];
        }  
        map.set(findNumber, i )
    }
};

twoSum([2,11,7,15], 9); //Unsorted array using map to find the two sum in O(n) time complexity and o(n) space complexity

//Two sum 2 problem
var twoSum2 = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1; 

    while(left < right){
        let sum = numbers[left] + numbers[right]        
        if(sum === target){
            return [left + 1, right + 1]
        }
        if(sum < target){
            left++
        }       
        if(sum > target){
            right--
        }   
    }
}

twoSum2([2,7,11,15], 9); //Sorted array using two pointer approach to find the two sum in O(n) time complexity and O(1) space complexity