const prompt = require ('prompt-sync')();
let a = prompt('Enter the Numbers: ');


let Arr=[];
Arr=a.split(' ');
console.log(Arr);
let max, rs;

if(Arr[0]>Arr[1])
    max = Arr[0];
    
else
    max = Arr[1];
for (let i=1; i<=max; i++){
    let rs1 = Arr[0]%i;
    let rs2 = Arr[1]%i;
    if(rs1 == 0 && rs2 == 0)
    {
        rs = i;
    
    }
}
console.log(rs);

