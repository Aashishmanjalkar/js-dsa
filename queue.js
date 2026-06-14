class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(value){
        let node = {
            value  : value,
            next : null
        }      
        if(this.length === 0){
            this.tail = node
            this.head = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    dequeue(){
        let pointer = this.head.next
        this.head = pointer
        this.length--
        return this
    }
}

let queue = new Queue()
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.dequeue())