// Task-11  Merge Two Arrays by ID

const users1:{id:number,name:string}[] = [
 {id:1,name:"A"},
 {id:2,name:"B"}
]

const profiles:{userId:number,age:number}[] = [
 {userId:1,age:25},
 {userId:2,age:30}
]
function mergeData(users: { id:number; name:string }[],profiles: { userId:number; age:number }[]){

  return users.map(user => {

    const profile = profiles.find(p => p.userId === user.id)

    return {
    ...user,
    age: profile?.age
    }

  })

}
console.log(mergeData(users1,profiles))