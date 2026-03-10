
// task-18 Deep Clone Object
const user = {
  name:"Rahim",
  address:{ city:"Dhaka" }
}

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

const copy = deepClone(user)

console.log(copy)
