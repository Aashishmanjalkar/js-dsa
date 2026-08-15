var singleNumber = function(nums) {
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1 )
        }else{
            map.set(num, 1)
        }
    }
    for (let [key, value] of map){
        if(value == 1){
            return key
        }
    }
};

singleNumber([4,1,2,1,2]) // Output: 4 leet code 136 single number 