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
    let left = 0
    let right = nums.length -1
    while(left <= right){ //Important Point Here to notice 
        let mid = Math.floor(left+ (right - left)/2)
        // console.log("Mid - ", mid, nums[mid] , nums[mid] < target)
        if(nums[mid] == target){
            return mid
        } else if( nums[mid] < target){
            left = mid + 1
        }  else if( nums[mid] > target){
            right = mid - 1
        }
    }
    return left // Second Important
};

console.log(searchInsert([1,3], 2))


var searchRotate = function(nums, target) {

    let left = 0
    let right = nums.length - 1
    while(left < right){
        let mid = Math.floor(left + (right - left)/2)
        if(nums[mid] === target){
            return mid
        }   else if( nums[mid] < target){
            left = mid + 1
        }  else if( nums[mid] > target){
            right = mid - 1
        }
    }  
    console.log(left, right)
    
    return -1
};

searchRotate([4,5,6,7,0,1,2], 0)
// console.log(searchRotate([1,3], 3))
// console.log(searchRotate([1], 0))


var searchRange = function(nums, target) {
    let leftIndex = binarySearch(nums, target, true);
    if(leftIndex < 0){
        return [-1,-1]
    }
    let rightIndex = binarySearch(nums, target, false);  
    return [leftIndex, rightIndex]
};

function binarySearch(nums, target, isLeft){
    let left = 0
    let right = nums.length - 1
    let targetIndex = -1
    while(left <= right){ //Important Point Here to notice
        let mid = Math.floor(left + (right - left)/2)
        if(nums[mid] === target){
            targetIndex = mid
            if(isLeft){ // Important Point Here to notice
                right = mid - 1 // Search for left index
            }else{
                left = mid + 1 // Search for right index
            }
        } else if (target > nums[mid]){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return targetIndex
}

searchRange([5,7,7,8,8,10], 8) //34. Find First and Last Position of Element in Sorted Array


var searchBST = function(root, val) {
    let queue = []
    queue.push(root)
    while(queue.length > 0){
        root = queue.shift()
        if(root.val == val){
            return root
        }
        if(root.left){
            queue.push(root.left)
        }
        if(root.right){
            queue.push(root.right)
        }
    }
    return null
};