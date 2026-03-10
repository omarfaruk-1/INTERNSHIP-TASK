
// task -06 most frequent word
let str:string="javascript is powerful and javascript is popular";

function mostFrequentWord(text:string){

  const words=text.split(" ")
  const count:any={}

  words.forEach(w=>count[w]=(count[w]||0)+1)

  return Object.keys(count).sort((a,b)=>count[b]-count[a])[0]
}


console.log(mostFrequentWord(str))
