const prompt = require('prompt-sync')();
let a = prompt('Enter No of Elements and Difference: ');
let b = prompt('Enter the Elements:');
let c = a.split(' ');
let d = b.split(' ');
let result = [];
for (let i=1; i<=c[0]; i++){
    let f = Math.abs(d[i] - d[i-1]);
    if(f<=c[1]) {
        result[i-1] = 0;
    }
    else{
        result[i-1] = 1;
    }
}
console.log(result);
