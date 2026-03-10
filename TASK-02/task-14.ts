
//Task-14 Pagination Function 

const users3:{id:number,name:string}[] = [
  { id:1, name:"A" },
  { id:2, name:"B" },
  { id:3, name:"C" },
  { id:4, name:"D" },
  { id:5, name:"E" }
]

function paginate<T>(items: T[], page: number, limit: number) {

  const start = (page - 1) * limit
  const end = start + limit

  const data = items.slice(start, end)

  const totalPages = Math.ceil(items.length / limit)

  return {
    data,
    totalPages
  }

}


console.log(paginate(users3,2,2))