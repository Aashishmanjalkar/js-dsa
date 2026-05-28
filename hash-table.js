class HashTable {
    // data = []
    constructor(size) {
        this.data = new Array(size)
    }            

    _hash(key){ // Developers standard that this is a private function can access but outside class
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key);  
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }
}

var hash = new HashTable(10);
hash.set('grapes', 10000)
console.log(hash.get('grapes'))


let arr = [2,1,3,3,4,5];

function findFirstRecurringCharacter(arr){
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if(newArr.includes(arr[i])){
    //         console.log("here", arr[i] );
    //     }else{
    //         newArr.push(arr[i])
    //         console.log(newArr);
    //     }   
    // }

    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]){
            return arr[i]
        }else{
            hash[arr[i]] = 1
        }
        console.log(hash)
    }

}
console.log(findFirstRecurringCharacter(arr));