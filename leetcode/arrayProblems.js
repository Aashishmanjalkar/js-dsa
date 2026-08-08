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


var merge = function(nums1, m, nums2, n) {
    //Brute force
    // const sortedArr = [...nums1.slice(0, m) ,... nums2.slice(0, n)].sort((a,b) => a - b)
    // for(let i = 0; i < m+n ; i++){
    //     nums1[i] = sortedArr[i]
    // }

//Two pointers approach
    let i = m + n - 1
    p1 = m-1
    p2 = n-1
    while(p2 >= 0){
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1]
            p1--
        }else{
            nums1[i] = nums2[p2]
            p2--
        }
        i--
    }
};
//leet code 88 merge sorted array