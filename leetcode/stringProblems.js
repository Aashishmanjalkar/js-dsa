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

longestCommonPrefix(["flower","flow","flight"])