// Defuse the Bomb
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length
    const result =  new Array(n).fill(0);

    if(k === 0) return result

    let start = 1
    let end = k 

    if(k < 0){
        start = n + k
        end = n - 1
    }

    let currentsum = 0
    for(let i = start; i <= end; i++){
        currentsum += code[i  % n]
    }
    
    for (let  i = 0; i < n; i++) {
        result[i] = currentsum
        currentsum -= code[start % n]
        currentsum += code[(end + 1) % n]

        start++;
        end++;
    }
    return result
};

// [1,2,3,4] 