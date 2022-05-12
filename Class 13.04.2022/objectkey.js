var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let count = 0;
let key1 = Object.keys(obj1);
let key2 = Object.keys(obj2);
console.log(key1);
console.log(key2);

for (let i=0; i<key1.length; i++){
    for( let j=0; j<key2.length;j++){
        if(key1[i] == key2[j]){
         count = count + 1;
        }
    }
}
if(count == 0){
    console.log("Not Match");
}
else{
    console.log("Match");
}
