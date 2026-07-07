// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
//Using Floyd's Cycle Detection Algorithm or Tortoise and Hare Algorithm 
var hasCycle = function(head) {
   let slow = head
   let fast = head
   while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
   }
   return false
  
};


class linkedListL1{
    constructor(value){
        this.head = {
            val : value,
            next : null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
       let node = {
            val : value,
            next : null
        }
        this.tail.next = node
        this.tail =  node
        this.length++
    }
    prepend(value){
        let node = {
            val : value,
            next : null
        }
        node.next = this.head
        this.head = node
        this.length++
    }
    printList(){
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.val)
            curr = curr.next
        }
        console.log(arr)
    }
}
console.log("Merge linked list");
const list1 = new linkedListL1(5)
list1.append(7)
list1.prepend(2)
list1.printList()

const list2 = new linkedListL1(4)
list2.append(8)
list2.prepend(1)
list2.printList()


function mergeTwoSorted(list1, list2){
     const arr = []
    while(list1 !== null){
        arr.push(list1.val)
        list1 = list1.next
    }
    while(list2 !== null){
        arr.push(list2.val)
        list2 = list2.next
    }
    arr.sort((x,y) => x - y)
    const dummy = new ListNode(0);
    let curr = dummy
    for(let value of arr){
        let node = new ListNode(value)
        curr.next = node // This is the key step where we link the current node to the new node
        // console.log("Node - ", dummy) 
        curr = node // Move the current pointer to the new node
        // console.log("curr - ", curr) 
    }
    return dummy.next

}

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
mergeTwoSorted(list1.head, list2.head)