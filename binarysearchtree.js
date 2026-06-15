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
        console.log(currentNode)
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
tree.insert(9)
tree.insert(10)
tree.lookup(7)
// console.log(JSON.stringify(traverse(tree.root)))

function traverse(node){
    const tree = {value : node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}