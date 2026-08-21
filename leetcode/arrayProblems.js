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

// Boyer–Moore Voting Algorithm
var majorityElement = function(nums) {
    let candidate = 0, count = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        console.log(count,num, candidate)
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};

// Brute force approach using hashmap
var majorityElement2 = function(nums) {
    const map = new Map();
    const majorityCount = Math.floor(nums.length / 2); // Calculate the majority count
    //  if an element appears more than n/2 times, it is the majority element 
    // for example if the length of the array is 5, then the majority count is 2.5,
    //  so if an element appears more than 2.5 times, it is the majority element.

    for (let num of nums) {
        let count = (map.get(num) || 0) + 1;
        map.set(num, count);

        if (count > majorityCount) {
            return num;
        }
    }
};

majorityElement([3,2,3]); //Leet code 169 majority element problem using Boyer–Moore Voting Algorithm with O(n) time complexity and O(1) space complexity
majorityElement2([3,2,3]); //Leet code 169 majority element problem using brute force approach with O(n) time complexity and O(n) space complexity



var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    for(let i = 1; i < prices.length; i++){
        // if(min > prices[i]){
        //     min =  prices[i]
        // } 
        // let sub =  prices[i] - min
        min = Math.min(min, prices[i])
        max = Math.max(prices[i] - min, max)
    }
    return max
};

maxProfit([7,1,5,3,6,4]); //Leet code 121 best time to buy and sell stock problem with O(n)
// time complexity and O(1) space complexity


var maxSubArray = function(nums) {
    // Brute force O(n^2) time complexity and O(1) space complexity
    // let max = nums[0]
    // for(let i =0; i < nums.length;i++){
    //     let n = 0
    //     for(let j=i; j < nums.length;j++){
    //         n += nums[j]
    //         max = Math.max(n, max)
    //     }
    // }
    // return max

    //Kadane's algorithm O(n) time complexity and O(1) space complexity
    let result = nums[0]
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        max = Math.max(max + nums[i], nums[i])
        result = Math.max(max, result)
    }
    return result
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); //Leet code 53 maximum subarray problem with O(n) time complexity and O(1) space complexity


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0){
        x = 1/x
        n = Math.abs(n)
    }
    //Brute force approach O(n) time complexity and O(1) space complexity
    // while(n > 0){
    //     x *= x
    //     n--
    // }

   return binaryExponentiation(x, n)
};

function binaryExponentiation(x, n){
    let result = 1
    while(n > 0){
        if(n %2 === 1){
            result *= x // If n is odd, multiply the result by x for example if x = 2 and n = 5, then 2^5 = 2 * 2^4, so we multiply the result by x when n is odd
        }
        x *= x
        n = Math.floor(n/2)
    }
    return result
}

myPow(2, 10) //Leet code 50 pow(x, n) problem with O(log n) time complexity and O(1) space complexity


var sortColors = function(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1
    while(mid <= high){
        if(nums[mid] === 0){
            [nums[low], nums[mid]] =  [nums[mid], nums[low]]
            low++
            mid++
        } else if(nums[mid] === 1){
            mid++
        }else{
            [nums[mid], nums[high]] =  [nums[high], nums[mid]]
            high--
        }
        // console.log("Nums ", nums)
    }
};
sortColors([2,0,2,1,1,0]) //Leet code 75 sort colors problem with O(n) time complexity and O(1) space complexity
//Dutch national flag problem 
// 0s move left: When we find a 0, we push it to the low region
// 2s move right: When we find a 2, we push it to the high region
// 1s stay in middle: They're left untouched, naturally ending up in the center