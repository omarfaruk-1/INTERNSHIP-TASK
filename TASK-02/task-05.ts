

// task-05 Sort Users by Age and Name
const users:{name:string,age:number}[] = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 20 },
  { name: "Anik", age: 25 },
  { name: "Babul", age: 20 }
]

users.sort((a,b)=>{

  if(a.age !== b.age){
    return a.age - b.age
  }

  return a.name.localeCompare(b.name)

})

console.log(users)