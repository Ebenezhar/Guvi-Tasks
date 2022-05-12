const prompt = require('prompt-sync')();
let a = prompt ('Enter the number of Element: ');
let b = prompt ('Enter the Elements: ');
a = +a;
let count = 0;
let n=-1;
let x = [];
let flag;
let Arr = b.split(' ').map(Number);
for (let i = 0; i<Arr.length; i++){
    console.log("i=",i);
    for(let j = i+1; j<Arr.length; j++){
        console.log("j=",j);
        if (Arr[i]>Arr[j]){
            console.log("arr=",Arr[j]);
            x.push(Arr[j]);
            count = count+1;
        }
        console.log("count=",count);
        if(count > 0)
            break; 
        else
            continue;
        }
        if (count==0 || i==Arr.length-1)
            x.push(n); 
        count=0;      
}
console.log(x);