
//Task-13 Search Filter

const users2:{name:string,username:string,email:string}[] = [
  { name: "Rahim", username: "rahim123", email: "rahim@mail.com" },
  { name: "Karim", username: "karim007", email: "karim@mail.com" },
  { name: "Anik", username: "anik_dev", email: "anik@mail.com" }
]

function searchUsers(users: { name: string; username: string; email: string }[],query: string) {

  const q = query.toLowerCase()

  return users.filter(user =>
    user.name.toLowerCase().includes(q) ||
    user.username.toLowerCase().includes(q) ||
    user.email.toLowerCase().includes(q)
  )

}

console.log(searchUsers(users2,"rahim"))