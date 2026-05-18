let arr = [1, 2, 3, 4, 5];

// ** Accessing elements
// ** JavaScript arrays are dynamic, so their time complexity depends on the operation.
// ** Access by index is O(1), while adding/removing at the end (push, pop) is O(1) (amortized), but operations at the start or middle (shift, unshift, splice) are O(n).
// ** Searching (includes, indexOf) is O(n) because it scans the array.

// ! how js arrays work under hood

class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index]
    }

    push(value){
        this.data[this.length] = value;
        this.length++
    }

    pop(){
       const lastItem = this.data[this.length -1 ];
       delete  this.data[this.length -1 ];
       this.length--
    }

    delete(index){
        const item = this.data[index]
        this.shiftIndex(index)
    }

    shiftIndex(index){
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new myArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
// newArray.pop();
newArray.delete(1)
console.log(newArray);


function reverseString(str){
    const reverseArr = str.split(' ').reverse()
    let wordArr = [];
    reverseArr.forEach(element => {
        let word = ''
        for (let i = element.length-1; i >= 0; i--) {
            word += element[i]
        }
        wordArr.push(word)
    });
    console.log(wordArr.join(' '));
}

function reverseString2(str){
    if(!str || str.length < 2 || typeof str !== "string"){
        console.log(); 'not a string';
    }

    let backward = [];
    for(let i = str.length - 1; i >= 0; i--){
        backward.push(str[i])
    }
    console.log(backward.join(''));
}

function reverseString3(str){
    console.log(str.split('').reverse().join(''))
}
// reverseString("This is my aray")

function mergeSortedArrays(arr1, arr2){
    const singleArr = [];
    arr1.forEach(element => {
        singleArr.push(element);
    });
    arr2.forEach(element => {
        singleArr.push(element);
    });
    // console.log([...arr1, ...arr2].sort((a,b) => a-b));

    for (let i = 0; i < singleArr.length; i++) {
        for (let j = 1; j < singleArr.length; j++) {
            if(singleArr[j] > singleArr[j+1]){
                let temp = singleArr[j]
                singleArr[j] = singleArr[j+1]
                singleArr[j+1] = temp
            }
            console.log(singleArr[i], singleArr[j])
        }
    }
        console.log(singleArr)
}


mergeSortedArrays([0,3,4,31],[4,6,30])
