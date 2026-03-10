

//task 04 chunk an array 2

let arrayChunk:number[]= [1,2,3,4,5]
function chunkArray(arr: number[], size: number): number[][] {

  const result: number[][] = []

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }

  return result
}


console.log(chunkArray(arrayChunk,2))