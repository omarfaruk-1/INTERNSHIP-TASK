

// task-16 

const data3 = {
 id:1,
 replies:[
  { id:2, replies:[] },
  {
   id:3,
   replies:[
    { id:4, replies:[] }
   ]
  }
 ]
}



function countComments(comment: { id:number; replies:any[] }): number {

 let count = 1

 for (const reply of comment.replies) {
  count += countComments(reply)
 }

 return count
}

console.log(countComments(data3))
