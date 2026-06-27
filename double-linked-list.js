class doubleLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null ,           
            prev: null,
        }
        this.tail = this.head
        this.lenght = 1
    }

      insert(index, value){
        if(index <= 0){
            return this.prepend(value)
        }
        if(index >= this.length){
            return this.append(value)
        }
        const node = new Node(value);
        let leader = this.traverse(index-1)
        let holdingPointer = leader.next
        node.prev = leader
        node.next = holdingPointer
        leader.next = node
        holdingPointer.prev = node
         this.length++
    }

    append(value){
        const newNode = {
            value : value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.lenght++
    }

    prepend (value){
        const newNode = {
            previous:null,
            value : value,
            next: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.lenght++ 
    }

    printList(){
        let counter = 0
        let arr = []
        let node = this.head
        while(node !== null){
            arr.push(node.value);
            node = node.next
        }
        console.log(arr)
    }

    removeByIndex(index){
        if(index <= 0){
            let pointer = this.head.next
            pointer.prev = null
            this.head = pointer
            this.length--
            return
        }
        if(index >= this.length){
            let pointer = this.traverse(this.length - 2)
            pointer.next = null
            this.tail = pointer
            this.length--
            return
        }

        let leader = this.traverse(index-1)
        let nodeToDelete = leader.next
        let follower = nodeToDelete.next
        leader.next = follower          // leader skips over deleted node
        follower.prev = leader   
        this.length--
        return
    }

    reverse(){ //Practice pending
        let current = this.head
        while(current){
            // just swap next and prev
            let temp = current.next
            current.next = current.prev
            current.prev = temp
            current = temp  // move forward
        }
        // swap head and tail
        let temp = this.head
        this.head = this.tail
        this.tail = temp
    }

}

const doubly = new doubleLinkedList(5)
doubly.append(10)
doubly.append(14)
doubly.prepend(34)
doubly.prepend(44)
console.log(doubly) 
doubly.printList()