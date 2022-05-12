const prompt = require('prompt-sync')();
let a = prompt ('Enter the number of Element: ');
let b = prompt ('Enter the Elements: ');
a = +a;
let Arr = b.split(' ').map(Number);
let output = '';
let count = 0;
let result = [];
for(let i = 0; i <Arr.length; i++ ){
    for(let j=0; j<Arr.length; j++){
        if(Arr[i]==Arr[j] && i!=j){
            count = count+1;
            Arr.splice(j,1);
            j=j-1;
        }
    }
    if(count==1){
        result.push(Arr[i]);        
    }
    count = 0;
}
output = result.join(' ');
console.log(output);