const prompt = require("prompt-sync")();
const a = prompt("Enter the No. of Inputs: ");
const b = prompt("Enter the List: ");
let array = b.split(" ");
let count = 0;let dup = [];
//console.log(array);
for (let i = 0; i<array.length; i++){
    for(let j = i;j<array.length;j++){
        if(i != j && array[i] == array[j]){
            count = count+1;
        }
        if(count == 1){
            array.splice(j,1);
        }
        count = 0;
    }
   
   
}
console.log("dup:",array.join(" "));