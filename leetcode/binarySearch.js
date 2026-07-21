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

//226, Invert Binary Tree - Done using BFS neccessary to use BFS because
//  we need to swap the left and right child of each node, and BFS allows us to process nodes level by level, ensuring that we visit all nodes in the tree.
var invertTree = function(root) {
    if(!root){
        return null
    }
    let queue = []
    queue.push(root)
    while(queue.length > 0){
        currentNode = queue.shift()
        if(currentNode?.left || currentNode?.right){
            [currentNode.left, currentNode.right ] = [currentNode?.right ?? null, currentNode?.left ?? null]
            queue.push(currentNode.left)
            queue.push(currentNode.right)
        }
    }
    return root
};

var invertTreeRecursive = function(root) {
    if(!root){
        return null
    }   
    var left = invertTreeRecursive(root.left)
    var right = invertTreeRecursive(root.right)
    let temp = left
    root.left = right
    root.right = temp
    return root
}
// Here is the step-by-step execution of how your recursive approach inverts the binary tree `[4, 2, 7, 1, 3, 6, 9]`.

// ---

// ### Tree Structure Before Inversion

// First, let's visualize how the array `[4, 2, 7, 1, 3, 6, 9]` maps to a binary tree:

// ```text
//         4
//       /   \
//      2     7
//     / \   / \
//    1   3 6   9

// ```

// ---

// ### Your Code Logic

// ```javascript
// if (!root) return null;

// var left = invertTree(root.left);
// var right = invertTree(root.right);

// let temp = left;
// root.left = right;
// root.right = temp;

// return root;

// ```

// Because recursion uses a **Call Stack** (Depth-First Search), it traverses all the way down to the leaf nodes on the left first before bubbling up and swapping.

// ---

// ### Step-by-Step Execution Walkthrough

// #### 1. Processing Root Node `4`

// * Calls `invertTree(node 4)`.
// * `node 4` is not null. It calls `invertTree(node 2)` to solve `left`.

// ---

// #### 2. Processing Left Subtree under Node `2`

// * Calls `invertTree(node 2)`.
// * `node 2` calls `invertTree(node 1)` to solve its `left`.
// * Calls `invertTree(node 1)`.
// * `node 1` calls `invertTree(null)` for its left $\rightarrow$ returns `null`.
// * `node 1` calls `invertTree(null)` for its right $\rightarrow$ returns `null`.
// * Swaps left (`null`) and right (`null`) $\rightarrow$ tree at `1` remains unchanged.
// * **Returns `node 1**`.


// * Back to `node 2`: `left` resolved to `node 1`. Now calls `invertTree(node 3)` to solve its `right`.
// * Calls `invertTree(node 3)`.
// * `node 3` left and right are `null` $\rightarrow$ both return `null`.
// * Swaps left (`null`) and right (`null`).
// * **Returns `node 3**`.


// * Back to `node 2`:
// * `left = node 1`, `right = node 3`.
// * **Swap executed:** `node 2.left` becomes `node 3`, `node 2.right` becomes `node 1`.
// * **Returns updated `node 2**` (which now looks like `[2, 3, 1]`).



// ---

// #### 3. Processing Right Subtree under Node `7`

// * Back to Root `4`: `left` resolved to `node 2`. Now calls `invertTree(node 7)` to solve its `right`.
// * Calls `invertTree(node 7)`.
// * `node 7` calls `invertTree(node 6)` for its `left`.
// * `node 6` left and right are `null` $\rightarrow$ returns `null`.
// * **Returns `node 6**`.


// * `node 7` calls `invertTree(node 9)` for its `right`.
// * `node 9` left and right are `null` $\rightarrow$ returns `null`.
// * **Returns `node 9**`.


// * Back to `node 7`:
// * `left = node 6`, `right = node 9`.
// * **Swap executed:** `node 7.left` becomes `node 9`, `node 7.right` becomes `node 6`.
// * **Returns updated `node 7**` (which now looks like `[7, 9, 6]`).



// ---

// #### 4. Final Swap at Root Node `4`

// * Back to Root `4`:
// * `left` = inverted subtree from `node 2` (`[2, 3, 1]`).
// * `right` = inverted subtree from `node 7` (`[7, 9, 6]`).


// * **Swap executed:**
// * `root.left = node 7`
// * `root.right = node 2`


// * **Returns root `4**`.

// ---

// ### Tree Structure After Inversion

// ```text
//         4
//       /   \
//      7     2
//     / \   / \
//    9   6 3   1

// ```

// **Final Output Array:** `[4, 7, 2, 9, 6, 3, 1]`

invertTreeRecursive([4,2,7,1,3,6,9])
