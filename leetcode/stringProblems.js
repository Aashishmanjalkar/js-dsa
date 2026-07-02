var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseString = string.split('').reverse().join('')
    return string === reverseString
};
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))