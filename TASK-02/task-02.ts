
// task-02 group of user
const data2:{id:number,name:string,role:string}[]=[
  { id:1, name:"A", role:"admin"},
  { id:2, name:"B", role:"user"},
  { id:3, name:"C", role:"admin"}
]

function groupUsers(users:any[]){

  return {
    admin: users.filter(user => user.role === "admin"),
    user: users.filter(user => user.role === "user")
  }

}

console.log(groupUsers(data2))