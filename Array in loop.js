const prompt = require ('prompt-sync')();
let a = prompt('Enter the elements:');

let arr=[];
for(let j=0;j<a;j++)
{
   let data=prompt();
   arr.push(parseInt(data));
}

console.log(arr);
