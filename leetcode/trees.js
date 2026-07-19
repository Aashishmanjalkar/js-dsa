class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(arr) {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    // left child
    if (i < arr.length) {
      if (arr[i] !== null) {
        node.left = new TreeNode(arr[i]);
        queue.push(node.left);
      }
      i++;
    }

    // right child
    if (i < arr.length) {
      if (arr[i] !== null) {
        node.right = new TreeNode(arr[i]);
        queue.push(node.right);
      }
      i++;
    }
  }

  return root;
}

// usage
const root = buildTree([1,2,3,4,5,null,8,null,null,6,7,9]);

// Iterative approach to do it but it is little bit complex to understand
var inorderTraversal = function(root) {
    let result = []
    let stack = []
    while(root || stack.length){
        while(root){
            stack.push(root)
            root = root.left
            // console.log("Inside while")
        }
        // console.log("1 - root: ", root, "stack: ", stack)
        root = stack.pop()
        // console.log("2 - root: ", root, "stack: ", stack)
        result.push(root.val);  // visit it 
        root = root.right;      // then explore its right subtre
        // console.log("3 - root: ", root, "result: ", result)
    }
    return result
}

inorderTraversal(root)

// Recursive approach easy method to do it
var inOrderTraversalRecursive = function(root) {
    let result = []             
    function traverse(node){
        if(!node) return
        traverse(node.left)     
        result.push(node.val)
        traverse(node.right)    
    }           
    traverse(root)
    return result
}