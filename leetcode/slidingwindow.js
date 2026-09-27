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


/**
 * @param {string} s1 // Constraints: 1 <= s1.length, s2.length <= 10^4 
 * @param {string} s2 // s1 and s2 consist of lowercase English letters.
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    // Create two arrays to count the frequency of each character in s1 and the current window in s2
    // as the constraints say that s1 and s2 consist of lowercase English letters, we can use an array of size 26 to store the counts for each character (a - z).
    let count1 = new Array(26).fill(0) 
    let count2 = new Array(26).fill(0)
    let charCodeA = 'a'.charCodeAt(0) // Get the character code of 'a' to use as an offset for indexing into the count arrays
    // the value of a is 97, so we can subtract 97 from the character code of each character to get an index between 0 and 25 for the count arrays.

    for(let i = 0; i < s1.length; i++){
        count1[s1.charCodeAt(i) - charCodeA]++ // for each character in s1, increment the corresponding count in count1 for ex if s1 = "ab", then count1[0] = 1, count1[1] = 1, and the rest of the elements in count1 are 0.
        count2[s2.charCodeAt(i) - charCodeA]++
    }

    const matches = () => {
        for(let i =0; i < 26; i++){
            if(count1[i] !== count2[i]) return false
        }
        return true
    }

    if(matches()) return true; // check if the first window matches 

    for(let i = s1.length; i < s2.length; i++){
        count2[s2.charCodeAt(i) - charCodeA]++; // add the new character to the current window
        count2[s2.charCodeAt(i - s1.length) - charCodeA]--; // remove the character that is no longer in the current window important to note that we are using the same count2 array to keep track of the counts for the current window in s2, so we need to decrement the count for the character that is no longer in the window.
        if(matches()) return true
    }

    return false
};

checkInclusion("ab", "eidbaooo") // 567 . Permutation in String
checkInclusion("adc", "dcda") // 567 . Permutation in String