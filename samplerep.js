const prompt = require ('prompt-sync')();
let a = prompt('Enter the No. of elements:');
let b = prompt('Enter the Elements: ');
let arr=[];
let result=[];
let fin=[];
arr=b.split(" ").map(Number);
a=parseInt(a);
for(let i=0;i<a;i++)
{
    for(let j=0;j<a;j++)
    {
        if(arr[i]==arr[j] && i!=j)
        {
            result.push(arr[i]); 
            arr.splice(i,1);
        }
    }
}
for(let k=0;k<result.length;k++)
{
    if(result[k]!=undefined)
        fin.push(result[k]);

}
console.log(fin);