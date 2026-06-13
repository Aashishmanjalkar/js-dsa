class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let node = {
            value: value,
            next: null
        }
        this.tail.next = node
        this.tail = node
        this.length++
    }

    prepend(value) {
        //    let node = new Node(value);
        let node = {
            value: value,
            next: null
        }
        let headR = this.head
        this.head = node
        this.head.next = headR
        this.length++

    }
    print() {
        let arr = []
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(arr);
    }

    insert(index, value) {
        if(index >= this.length){
            this.append(value)
        }
        const node = {
            value: value,
            next: null
        }
        const leader = this.traverseIndex(index-1)
        const nextPointer = leader.next
        leader.next = node
        node.next = nextPointer
        this.length++
    }

    remove(index){
        const leader =  this.traverseIndex(index-1)
        const removingNode = this.traverseIndex(index)
        const nextPointer = removingNode.next
        leader.next = nextPointer
        this.length--

        //Optimal solution
        // const leader = this.traverseIndex(index-1)
        // const unwantedNode = leader.next
        // leader.next = unwantedNode.next
        // this.length--
    }
    traverseIndex(index){
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++            
        }
        return currentNode;
    }
    // Node(value){
    //     return {
    //         value : value,
    //         next : null
    //     }
    // }

    reverse(){
        let first = this.head
        console.log("Firt - ", first)
        this.tail = this.head
        console.log("Tail - ", this.tail)
        let second = first.next
        console.log("second - ", second);
        while(second){
            let temp = second.next
            console.log("temp ", temp);
            second.next = first
            console.log("second next " , second) ;
            first = second
            console.log("first new " , first) ;
            second = temp
            console.log("second new " , second) ;
        }
        this.head.next = null;
        this.head = first
        // console.log(this)
        return this
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

//PRactice
// const linkedList = new LinkedList(10);
// linkedList.prepend(5);
// linkedList.prepend(8);
// linkedList.prepend(9);
// linkedList.append(4);
// linkedList.insert(2, 11);
// // linkedList.print();
// linkedList.remove(2);
// linkedList.print();
// linkedList.reverse();
// // console.log(linkedList.append(4));
// // console.log(linkedList.append(7));
// // console.log(linkedList);


// class linkedList{
//    constructor(value){
//         this.head = {
//             value : value,
//             next : null
//         }
//         this.tail = this.head
//         this.length = 1
//    }
   
//    prepend(value){
//         const node = {
//             value : value,
//             next : null
//         }
//         const pointer = this.head
//         this.head = node
//         this.head.next = pointer
//         this.length++
//    }
//     append(value){
//         const node = {
//             value : value,
//             next : null
//         }
//         const pointer = this.tail
//         this.tail.next = node
//         this.tail = node
//         this.length++
//     }

//     printlist(){
//         let currentNode = this.head
//        let arr = []
//         while (currentNode !== null) {
//             arr.push(currentNode.value);
//             currentNode = currentNode.next
//        }
//        console.log(arr)
//     }

//     insert(index, value){
//         if(index > this.length){
//             this.append(value)
//         }
//         let node = {
//             value: value,
//             next: null
//         }
//         let leader = this.getPointer(index - 1);
//         let holdingPointer = leader.next
//         leader.next = node
//         node.next = holdingPointer
//         this.length++
//     }

//     getPointer(index){
//         let currentNode = this.head;
//         let i = 0;
//         while (currentNode !== null) {
//             if(i == index){
//                 return currentNode;
//             }   
//             i++ 
//             currentNode = currentNode.next;
//         }
//     }

//     remove(index){
//           let leader = this.getPointer(index-1);
//           let nextLeader = leader.next
//           leader.next = nextLeader.next
//           this.length--
//     }

//     reverse(){
//         this.head = this.tail
//     }
// }

// let list = new linkedList(2);
// list.prepend(1);
// list.prepend(0);
// list.append(3);
// list.append(4);
// list.append(5);
// list.insert(4,7);
// list.insert(3,8);
// list.append(10);
// list.remove(2);
// list.printlist();

