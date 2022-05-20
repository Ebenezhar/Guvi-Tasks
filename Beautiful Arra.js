const prompt = require('prompt-sync')();
let a = prompt('Enter the No.of Element: ');
let b = prompt('Enter the Elements: ');
let Arr = b.split(' ').map(Number);
let sum = 0;
for (let i = 0; i < Arr.length; i++){
    sum = sum+Arr[i];
}
if(sum%2==0 && sum%3 == 0 && sum%5 ==0)
    console.log("1");
    else
    console.log("0");
