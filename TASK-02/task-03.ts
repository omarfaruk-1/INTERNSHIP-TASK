
// task-3 missing value
const arr1:number[] = [1,2,3,5,6];

function findMissing(arr:number[]):number{

  for(let i=0;i<arr.length-1;i++){

    if(arr[i]+1 !== arr[i+1]){
    return arr[i]+1
    }

  }

  return -1
}
console.log(findMissing(arr1))