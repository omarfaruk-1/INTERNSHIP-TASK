
//Task-19 Top K Frequent Numbers 
function topK(nums: number[], k: number) {

 const count: Record<string, number> = {}

 for (const n of nums) {
  count[n] = (count[n] || 0) + 1
 }

 return Object.keys(count)
  .sort((a,b) => count[b] - count[a])
  .slice(0,k)
  .map(Number)

}

console.log(topK([1,1,1,2,2,3],2))
