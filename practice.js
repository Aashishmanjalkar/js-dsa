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
            ////console.log(currentNode)
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
tree.insert(5) 
tree.insert(7) 
tree.insert(1) 
tree.insert(8) 
// //console.log(tree.lookup(1)) 
traverse(tree.root) 

function traverse(node){
    ////console.log("Node - ", node)
    const tree = {value : node.value}
    ////console.log("tree created - ", tree)
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
        // //console.log("Holding pointer - ", holdingPointer)
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

    remove(index){
        if(index <= 0){
            let pointer = this.head
            this.head = pointer.next
            this.length--
            return
        }
        if(index >= this.length){
            let pointer = this.getPointer(this.length -1)
            pointer.next = null
            this.tail = pointer
            this.length--
            return
        }
        let leader = this.getPointer(index -1)
        let holdingPointer = leader.next
        leader.next = holdingPointer.next
        this.length--
        return
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
// list.printList()
list.insert(4, 8)
list.printList()
list.remove(9)
list.printList()


function factorial(n){
    if(n == 1){
        return n
    }
    return n * factorial(n-1)
}

//console.log(factorial(5))

function iteration(n){
    let t = 1
    for(i=n ; i > 0; i--){
        t = t * i
    }
    ////console.log(t)
}
iteration(5)

// 0,1,1,2,3,5,8,13,21, 34
function fibonacci(n){
    if(n < 2){
        return n
    }
    ////console.log("n - ",  (fibonacci(n-1) + fibonacci(n-2)))
    return fibonacci(n-1) + fibonacci(n-2)
} 
// 0(2^n)

//console.log(fibonacci(5))

// 0,1,1,2,3,5,8,13,21, 34 
function fibonacciIterative(n){ //o(n)
    let arr = [0,1]
    for (let i = 2; i <= n; i++) {
        // //console.log(i ,arr[i-2] , arr[i - 1])
        arr.push(arr[i-2] + arr[i - 1])
        // //console.log(arr)
    }
    // //console.log(arr[n])
}
// fibonacciIterative(5)


//console.log("--------- Selection Sort --------------");
function insertionSort(array) {
     ////console.log(array);
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        let j = i -1
        ////console.log("current - ", current, "j: ", j, "array j " , array[j] ,"array: ", array);
        while(j >= 0 && array[j] > current){ //Checks with the next element 
            ////console.log(array[j+1] , array[j], "j: ", j);
            array[j+1] = array[j]
            ////console.log("after swap - ", array);
            j--
            ////console.log("after decrement - ", array, "j: ", j);
        }
        ////console.log(array , "j ", j);
        array[j+1] = current
        ////console.log("Final array -", array);

    }
}
// insertionSort([29,10,16,37,14])


// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let min = i
//         let temp = array[i]
        
//     }
// }

// insertionSort([4,1,3,9,8,7]);


function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <  array.length - 1 ; j++) {
            ////console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]){
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
                ////console.log(array);
            }
        }
    }
    ////console.log(array)
}
//console.log("Bubble sort");
//  bubbleSort([4,1,3,9,8,7]);

const insertionSort2 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j = i-1
        while (i >= 0 &&  arr[j] > currentValue) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currentValue
    }
    ////console.log("Insertion sort ", arr);
}

// insertionSort2([4,1,7,3]);


const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),  mergeSort(right))
}

const merge = (left, right) => {
    let leftIndex = 0
    let rightIndex = 0
    let sortedArr = []
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            sortedArr.push(left[leftIndex])
            leftIndex++
        }else{
            sortedArr.push(right[rightIndex])
            rightIndex++
        }
    }
    return  sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

//console.log("************** MERGE SORT ******************")
//console.log(mergeSort([4,1,7,3])    )

function dd(...args) {
    ////console.log(...args);
    process.exit(1); // Stops the entire Node process
}


// //console.log("********** QUICK SORT ******************")

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    
    for (let i = 0; i < arr.length -1; i++) {
       if(arr[i] < pivot){
            left.push(arr[i])
       }else{
            right.push(arr[i])
       }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}
// //console.log(quickSort([4,1,7,3]))

class Tree {
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        } else {
            let currentNode = this.root
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

    lookup(value) {
        if (this.root == null) {
            return null
        }
        let currentNode = this.root
        while (currentNode) {
            if (value < currentNode.value) {
               currentNode = currentNode.left 
            } else if(value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value){
                return currentNode
            }
        }
        return null
    }

}
// //console.log('*************** TREE **************')

let tree2 = new Tree()
tree2.insert(5)
tree2.insert(2)
tree2.insert(4)
tree2.insert(1)
tree2.insert(7)
tree2.insert(8)

// //console.log(JSON.stringify(tree2))
// //console.log(JSON.stringify(traverse22(tree2.root)))

function traverse22(node){
    const tree = {value : node.value}
    tree.left = node.left === null ? null : traverse22(node.left)
    tree.right = node.right === null ? null : traverse22(node.right)
    return tree
}