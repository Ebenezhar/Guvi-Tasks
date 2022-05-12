// let array = ["ebenezhar","selva","kumar"];
// let result = [];
// let res = function(array){
// for(let value of array){
//     result.push(value.toUpperCase());
// }
// return result;
// }

// console.log(res(array));


// let array = ["ebenezhar","selva","kumar"];
// let result = [];
// let res = function(array){
// for(let value of array){
//     result.push(value.toUpperCase());
// }
// return result;
// }

// console.log(res(array));
// let output = 0;
// let array = [5,6,7];
// var result = (function(array){
//     for(let values of array){
//     output = output + values;   
//     } 
//     return output;
// }(array));
// console.log(result);

let count = 0;
let output = [];
let array = [5,8,7,9,13].map(Number);
var result = (function(array){
    for(let values of array){
        for(let i = 1; i<=values; i++){
            if(values%i == 0){
                count = count + 1;
            }
        }   
        if(count == 2){
            output.push(values);
        }
        count=0;
    } 
    return output;
}(array));
console.log(result);