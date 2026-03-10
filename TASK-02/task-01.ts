// task-01 duplicate user
const data:{id:number,name:string}[] = [
  { id:1, name:"A"},
  { id:2, name:"B"},
  { id:1, name:"A"}
]
const result:{id:number,name:string}[] = []

for (let i = 0; i < data.length; i++) {

  let exists = false

  for (let j = 0; j < result.length; j++) {
    if (data[i].id === result[j].id) {
      exists = true
      break
    }
  }

  if (!exists) {
    result.push(data[i])
  }

}

console.log(result)