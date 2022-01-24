const fs = require('fs');

const multiply=(a,b)=>{
  let result=0
  const absolute=Math.abs(b)
  const positive= absolute==b
  for (i=0; i<absolute;i++){
    result=positive? result+a:resultado-a
  }
  return result
}

const a= multiply(2,4)
console.log(a)
