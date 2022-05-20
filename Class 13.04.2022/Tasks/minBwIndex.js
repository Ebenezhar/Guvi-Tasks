const prompt = require("prompt-sync")();
let a = prompt("Enter the No.of Element and indexes: ");
let b = prompt("Enter the Elements:");
let elem = b.split(" ").map(Number);
let c = a.split(" ").map(Number);
console.log("Enter the indexes: ");
let d = [];
let e = [];
let result = [];
for(let i = 0 ; i<c[1]; i++){
    d.push(prompt());
    
}
for(let i = 0; i < c[1]; i++){
    e = d[i].split(" ").map(Number);
   // console.log("e: ",e);
    let min = elem[e[0]];
   // console.log(min);
    for(let j = (e[0]-1);j <=(e[1]-1); j++){
        console.log(elem[j])
        if(elem[j]<min)
            min = elem[j];
    }
    result.push(min);
}
console.log("result", result);
// console.log(d);
// console.log(a);
// console.log(b);

