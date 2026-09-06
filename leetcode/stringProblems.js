var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseString = string.split('').reverse().join('')
    return string === reverseString
};
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))


var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || strs[0] == "") return ""
    let sortedArr = strs.sort()
    let str = ''
    for(let i = 0; i < sortedArr[0].length; i++){
        if(sortedArr[0][i] ==  sortedArr[strs.length - 1][i]){
            str += sortedArr[0][i]
        }else{
           break
        }
    }
    return str
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // Output: "fl" space complexity O(nlogn) for sorting and O(m) for comparing the first and last strings, where n is the number of strings and m is the length of the shortest string.   





/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let count = {}

    for(let word of s){
        count[word] = (count[word] || 0) + 1
    }

    for (const char of t) {
        // console.log(count[char], char)
        if (!count[char]) return false;
        // console.log("first ", count)
        count[char]--;
        // console.log(count)
    }

    return true;
};

isAnagram("anagram", "nagaram") // Output: true