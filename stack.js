class Node  {
    constructor(value){
       this.value = value;
       this.next = null;
    }
}


//Linked List Implementation of Stack -
// STACK - LIFO (Last In First Out)
class Stack {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    peek(){
        return this.head
    }

    push(value){
        let node = new Node(value)
        if(this.length === 0){
            this.head = node
            this.tail = node
        }else{
            let pointer = this.head
            this.head = node   
            this.head.next = pointer
        }
        this.length++
        return this
    }

    pop(){
        let pointer = this.head.next
        this.head = pointer
        this.length--
        return this
    }
}

let stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(4))
console.log(stack.push(7))
console.log(stack.pop()) 



class stackArray{
    constructor(){
        this.array = []
    }
    peek(){
        return this.array[this.array.length - 1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        return this.array.pop()
    }
}

let stackArr = new stackArray()
console.log(stackArr.push(1))
console.log(stackArr.push(4))
console.log(stackArr.push(7))
console.log(stackArr.pop())
