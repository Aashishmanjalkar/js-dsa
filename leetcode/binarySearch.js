var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        // Point to rember calcuation done is 0 + 5/2 = 2.5 => 2 //BODMAS 
        // 3 + (5 - 3)/2 = 3 + 1 = 4 => 4
        let mid = Math.floor(low + (high - low) / 2); // This is equivalent to Math.floor((low + high) / 2) but avoids overflow for large values of low and high
        //  this can cause overflow for large values of low and high although in JS it is not
        //  a problem but in other languages like C++ or Java it can cause overflow
        // let mid = Math.floor((low + high) / 2);     
        if (nums[mid] === target) {
            return mid; // Found it!
        } else if (nums[mid] < target) {
            low = mid + 1; // Target is in the right half, discard left half
        } else {
            high = mid - 1; // Target is in the left half, discard right half
        }
    }
    return - 1
};

console.log(search([-1,0,3,5,9,12], 9))

var searchInsert = function(nums, target) {
    if(nums.length === 1){
        if(target > nums[0]){
            return 1
        }
        return 0
    }
    let left = 0
    let right = nums.length -1
    while(left <= right){
        let mid = Math.floor(left+ (right - left)/2)
        console.log("Mid - ", mid, nums[mid] , nums[mid] < target)
        if(nums[mid] == target){
            return mid
        } else if( nums[mid] < target){
            left = mid + 1
        }  else if( nums[mid] > target){
            right = mid - 1
        }
    }
    return left
};

console.log(searchInsert([1,3], 2))