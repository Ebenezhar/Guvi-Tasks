const prompt = require ('prompt-sync')();
let a = prompt('Enter the Number of Months: ');
a= parseInt(a);
let b  = [1000];
for (i=1; i<=a; i++){
    if(i==1){
        b[i] = 1000 + b[i-1];
    }
    else{
        b[i] = 1000 + b[i-1] + b[i-2];
    }
}
console.log(b[b.length-1]);