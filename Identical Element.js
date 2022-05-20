const prompt = require('prompt-sync')();
let a = prompt ('Enter the number of Element: ');
let b = prompt ('Enter the Elements: ');
a = +a;
let x = [];
let Arr = b.split(' ').map(Number);
for (let i = 0; i < Arr.length; i++){
    for (let j = i; j < Arr.length; j++){
          if(Arr[i] == Arr[j] && i != j){
            x.push(Arr[i]);
          }
    }
}
console.log(x);