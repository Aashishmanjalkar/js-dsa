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

    prepand(value){
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

}

const doubly = new doubleLinkedList(5)
doubly.append(10)
doubly.append(14)
doubly.prepand(34)
doubly.prepand(44)
console.log(doubly) 
doubly.printList()