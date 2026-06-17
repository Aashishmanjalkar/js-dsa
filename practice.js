class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}


class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        } else {
            let currentNode = this.root;
            console.log(currentNode)
            while (true) {
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
            if(currentNode.value > value){
                currentNode = currentNode.left
            } else if( currentNode.value < value){
                currentNode = currentNode.right
            } else if(currentNode.value == value){
                return currentNode
            }
        }
        
        return false
    }
}

const tree = new binarySearchTree()
// tree.insert(5) 
// tree.insert(7) 
// tree.insert(1) 
// tree.insert(8) 
// console.log(tree.lookup(1)) 
// traverse(tree.root) 

function traverse(node){
    console.log("Node - ", node)
    const tree = {value : node.value}
    console.log("tree created - ", tree)
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}


class linkedList{
    constructor(value){
        this.head = {
           value : value,
            next : null
        };   
        this.tail = this.head;     
        this.length = 1
    }

    prepend(value){
        let node = new LinkedNode(value)
        let pointer = this.head
        this.head = node
        this.head.next = pointer
        this.length++
        return this
    }

    append(value){
        let node = new LinkedNode(value)
        // let pointer = this.tail
        this.tail.next = node
        this.tail = node
        this.length++
        return this
    }

    insert(index, value){
        if(index > this.length){
            this.append(value)
        }
        let node = new LinkedNode(value)
        let leader = this.getPointer(index -1)
        let holdingPointer = leader.next
        leader.next = node
        node.next = holdingPointer
        this.length++
        // console.log("Holding pointer - ", holdingPointer)
    }

    getPointer(index){
        let currentNode = this.head
        let i = 1
        while(currentNode){
            if(i == index){
                return currentNode
            }
            currentNode = currentNode.next;
            i++
        }
    }

    printList(){
         let currentNode = this.head
        let i = []
        while(currentNode){
            i.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(i);
        return i
    }
}
class LinkedNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

const list = new linkedList(5);
list.prepend(1)
list.append(2)
list.append(3)
list.append(4)
list.append(7)
list.printList()
list.insert(4, 8)
list.printList()


function factorial(n){
    if(n == 1){
        return n
    }
    return n * factorial(n-1)
}

console.log(factorial(5))

function iteration(n){
    let t = 1
    for(i=n ; i > 0; i--){
        t = t * i
    }
    console.log(t)
}
iteration(5)

// 0,1,1,2,3,5,8,13,21, 34
function fibonacci(n){
    if(n < 2){
        return n
    }
    console.log("n - ",  (fibonacci(n-1) + fibonacci(n-2)))
    return fibonacci(n-1) + fibonacci(n-2)
} 
// 0(2^n)

console.log(fibonacci(5))

// 0,1,1,2,3,5,8,13,21, 34 
function fibonacciIterative(n){ //o(n)
    let arr = [0,1]
    for (let i = 2; i <= n; i++) {
        // console.log(i ,arr[i-2] , arr[i - 1])
        arr.push(arr[i-2] + arr[i - 1])
        // console.log(arr)
    }
    // console.log(arr[n])
}
fibonacciIterative(5)