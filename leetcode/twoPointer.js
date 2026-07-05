//Container With Most Water

var maxArea = function(height) {
    let left = max = 0
    let right = width = height.length - 1
    while(left < right){
        let minHeight = Math.min(height[left] , height[right])
        let area = minHeight * width
        if(area > max){
            max = area
        }
        width--
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return max
};

//Brute force solution
var removeDuplicatesBruteForce = function(nums) {
    let k = 0
    let hash = {}
    for(let i = 0; i < nums.length; i++){
       if (hash[nums[i]] !== undefined) {
            hash[nums[i]] += 1;
        } else {
            hash[nums[i]] = 1;
            nums[k] = nums[i]
            k++;
        }
    }
    return k
};

//Two pointer solution
var removeDuplicates = function(nums) {
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k-1]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

//Brute force solution solved by me using recursion
var isHappyBruteForce = function(n) {
    let arr = String(n).split('')
    if(arr.length === 1 && arr[0] == 1){
        return true
    }else if(arr.length === 1 && arr[0] != 1){
        return false
    }else{
        while(n > 9){
            let squareSum = 0
            for(let num of arr){
               squareSum += Math.pow(num , 2)
            }
            return isHappyBruteForce(squareSum)
        }
    }
};

var isHappy = function(n) {
    var getNext = function(n) {
        let totalSum = 0;
        while (n > 0) {
            let d = n % 10;  // Get the last digit i.e reminder when divided by 10 - 19/10 -> 9
            n = Math.floor(n / 10); // Remove the last digit from n - 19/10 -> 1
            totalSum += d * d;
        } 
        return totalSum;  
    }

    let slow = n
    let fast = getNext(n)
    while(fast !== 1 && slow !== fast){
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }
    return fast === 1;
}