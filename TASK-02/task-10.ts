
// task-10 Palindrome Checker
function isPalindrome(text: string) {

 const clean = text.toLowerCase().replace(/ /g, "")
 const reverse = clean.split("").reverse().join("")

 return clean === reverse
}

console.log(isPalindrome("A man a plan a canal Panama"))