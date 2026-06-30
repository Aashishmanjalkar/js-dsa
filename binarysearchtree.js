class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value){
    const node = new Node(value);
    if(this.root == null){
        this.root = node
    } else {
        let currentNode = this.root;
        while(true){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = node
                    return this
                }
                currentNode = currentNode.left
            } else {
                if(!currentNode.right){
                    currentNode.right = node
                    return this
                }
                currentNode = currentNode.right
            }
        }

    }
    return this
  }

    lookup(value){
        if(this.root == null){
            return false
        }
        let currentNode = this.root
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else if(value > currentNode.right) {
                currentNode = currentNode.right
            } else if(value == currentNode.value){
                return currentNode
            }
        }
        return false
    }

    breadthFirstSearch() {
        let currentNode = this.root
        let list = []
        let queue = []
        queue.push(currentNode)
        while (queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return list
    }

    breadthFirstSearchRecursive(queue, list) {
        console.log(" ******************** ", queue, list)
        if (!queue.length) {
            return list
        }
        let currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
        return this.breadthFirstSearchRecursive(queue, list)
    }

    DFSInOrder() {
        return traverseInOrder(this.root, [])
    }

    DFSPreOrder() {
        return traversePreOrder(this.root, [])
    }

    DFSPostOrder() {
        return traversePostOrder(this.root, [])
    }  
  
}
// [10, 6, 15, 3, 8, 20, 1, 12, 2, 7 , 4]
//              10
//          6           15
//      3      8     12     29
//    1  4   7
//      2

function traverseInOrder(node, list) {  
    if (node.left) {
        traverseInOrder(node.left, list)
    }   
    list.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, list)
    }   
    return list
}

function traversePreOrder(node, list) {
    list.push(node.value)           
    if (node.left) {
        traversePreOrder(node.left, list)
    }           
    if (node.right) {
        traversePreOrder(node.right, list)
    }           
    return list
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list)
    }
    if (node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}   

class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}

const tree = new binarySearchTree();
tree.insert(5)
tree.insert(1)
tree.insert(3)
tree.insert(2)
tree.insert(4)
tree.insert(6)
tree.insert(7)
tree.insert(8) 
// tree.insert(9)
// tree.insert(10)
// tree.lookup(7)
// tree.breadthFirstSearch()
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.breadthFirstSearchRecursive([tree.root], []))
// console.log(JSON.stringify(tree.root))
console.log(tree.DFSInOrder())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())


function traverse(node){
    const tree = {value : node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}