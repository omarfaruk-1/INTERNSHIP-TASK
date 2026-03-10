
// task-07 Check Anagram 
function isAnagram(a: string, b: string): boolean {

  if(a.length!==b.length){
    return false;
  }
  const str1 = a.split("").sort().join("")
  const str2 = b.split("").sort().join("")

  return str1 === str2
}

console.log(isAnagram("listen","silent"))
