const prompt = require('prompt-sync')();
let input = prompt("Enter the n and q values:")
let a=input.split(" ").map(Number);
let arrval=prompt("Enter the array values");
let b=arrval.split(' ').map(Number);
let res=[]
console.log("enter the indices value:");
for(let i=1;i<=a[1];i++)
{
   let t=prompt();
   let ix=t.split(" ");
   let min=b[ix[0]-1];
   for(let i=(ix[0]-1);i<=(ix[1]-1);i++)
   {
       if(min>b[i])
            min=b[i]
   }
   res.push(min);
}
console.log(res);