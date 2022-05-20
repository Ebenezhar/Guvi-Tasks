// const prompt = require("prompt-sync")();
// let a = prompt("Enter the No. of Test cases: ");
// let b = prompt("Enter the Test cases: ");
// let c = prompt("Enter the No. of inputs: ");
// let d = prompt("Enter the inputs: ");
// let inputArr1 = b.split(" ").map(Number);
// console.log(inputArr1);
// let inputArr2 = d.split(" ").map(Number);
// console.log(inputArr2);
// let result = [];
// let count = 0;
// for(let values2 of inputArr2){
//     for(let values1 of inputArr1){
//         if(values2==values1){
//             count = count+1;
//         }
//     }
//         if(count>0){
//             result.push(count);
//         }else if(count==0){
//             result.push("Not Present");
//         }         
            
    
//     count = 0;
// }
// console.log(result);    
// var numArray = [12,56,9];
// numArray.sort((a, b) => a - b);

// console.log(numArray);
// let array =['A23','B56','B56','C79','D16'];
// if(array[0]=="A23"){
//     console.log(true)
// } else
// console.log(false);
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
console.log(array.join(" "));