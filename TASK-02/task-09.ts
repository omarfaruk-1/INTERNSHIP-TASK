
// task-09 Longest Unique Substring
function longestUniqueSubstring(str: string) {

  let longest = ""

  for (let i = 0; i < str.length; i++) {

    let temp = ""

    for (let j = i; j < str.length && !temp.includes(str[j]); j++) {
    temp += str[j]
    }

    if (temp.length > longest.length) longest = temp

  }

  return longest
}

console.log(longestUniqueSubstring("abcabcbb"))