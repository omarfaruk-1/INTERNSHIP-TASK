
// task-15 
const array: (number | number[])[] = [1,[2,3],[4,[5]]]

const result1 = array.flat(Infinity) as number[]

console.log(result1)