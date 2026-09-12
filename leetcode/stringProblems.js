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


/**
 * @param {string} 
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().replace(/ +/g, ' ').split(' ').reverse().join(' ')
    // return s.trim('').split(' ').filter(word => isAlphanumericCode(word)).reverse().join(' ')
};

// function isAlphanumericCode(char) {
//   if (!char) return false;
  
//   const code = char.charCodeAt(0);
//   return (code > 47 && code < 58) ||  // Numeric (0-9)
//          (code > 64 && code < 91) ||  // Uppercase (A-Z)
//          (code > 96 && code < 123);   // Lowercase (a-z)
// }

var removeOccurrences = function(s, part) {
    return recurrsiveSlicing(s, part)
};

function recurrsiveSlicing(s, part){
    let i = 0
    while(i <= s.length - part.length){
        let str = s.slice(i, i+part.length)
        if(str === part){
            s = s.slice(0, i) +  s.slice(i + part.length, s.length)
            return recurrsiveSlicing(s, part)
        } 
        i++
   }
   return s
}

removeOccurrences("daabcbaabcbc", "abc") // Output: "dab"