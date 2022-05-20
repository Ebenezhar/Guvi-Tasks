// *
// **
// ***
// ****
// *****
// ******
// *******


//      *
//     **
//    ***
//   ****
//  *****
// ******
   
// Methods 
// 1. includes
// 2. repeat

// ------------------------- repeat ------------------------

// String.repeat(no of times)

var a = 5
for (i = 1;i<=5;i++){
    console.log('*'.repeat(i));
}



var a = 5
var m = a
for (i = 1;i<=a;i++){
    console.log(' '.repeat(m-1) +'*'.repeat(i));
    m = m-1
}
// 1. ' ' = 4 , * = 1
// 2. ' ' = 3 , * = 2
// 3. ' ' = 2 , * = 3
// 4. ' ' = 1 , * = 4
// 5. ' ' = 0 , * = 5

// ------------------------- diff b/w var let const ------------------

// ------------------------- includes ------------------------

var a = [1,2,3,4,5]
a.includes('a')

// ------------------------- trim ------------------------

var a = '   magesh'
a.trim()

// ------------------------- split ------------------------

// 1. always the output will be array
// 2. the outuput will be b/w the elements
// 3. the output wont include split element

var a = '[1,2,3,4,5]'
a.split('3')

var a = 'I love India'
a.split('I')
// ['',' love ','ndia']
var a = 'This a a beautiful world'
a.split('a')

// ['This ',' ',' be','utiful world']

// ------------------------- for of -------------------------------

a = [1,2,3,4,5]
for (i =0;i<a.length;i++){
    console.log(a[i]);
}


a = [1,2,3,4,5]
for (let i of a){
    console.log(i);
}

// ------------------------- MAP -------------------------------

// 1. Takes two parameters one is iterables and function
// 2. it applies funciton to each and every element in iterables
// 3. It takes only one element at a Time
// 4. It does the manipulatation but it does not increase or decrease the len of input

function func (item,index,arr){
    return item*2
}

const func = function(item,index,arr){
    return item*2
}

const func = function(item){
    return item*2
}

var a = [1,2,3,4,5]
a.map(func)

const func = function(item){
    return item.name
}

const obj = [{
    name:'Magesh',
    age:20
}]
obj.map(func)

var a = 50
var b = 25
console.log(`this is ${';sdf'} the value of b  is: ${b}`);


// ------------------------- FILTER -------------------------------

// 1. Takes two parameters one is iterables and function
// 2. it applies funciton to each and every element in iterables
// 3. It takes only one element at a Time
// 4. It does the condition checking. If the condition is true we will ge the output


var ar = [1100,1320,1200,1600,2000,2020,2012,3000]

// 1. if year  div by 4 it should not div by 100
// 2. if year diy by 100 it should div by 400

ar.filter((a => (a%4==0 && a%100!=0)  ||  (a%100==0 && a%400==0 )))

var ar = [1100,1320,1200,1600,2000,2020,2012,3000]
for (let i of ar){
    if ((a%4==0 && a%100!=0)  ||  (a%100==0 && a%400==0)) {
        console.log(i);
    }
}

ar = [10,20,30,5,15,17]
console.log(ar.filter(a=>a%2==0));
console.log(ar.filter(a=>a%2));

console.log(ar.map(a=>a*2));
console.log(ar.filter(a=>a*2));

ar.filter(a=>a*2)

// ------------------------- REDUCE -------------------------------

// 1. Takes two parameters one is iterables and function
// 2. It takes two element at a Time. the ouput of this is going to be a for next iteration


// 1. it gives only single output
// 2. takes two element

ar = [10,20,30, 4,3,2,1]
console.log(ar.reduce((a,b)=>a+b));

// 1. a = 10 ,b = 20 , o = 30
// 2. a = 30 ,b = 30 , o = 60
// 3. a = 60 ,b = 4  , o = 60
// 4. a = 64 ,b = 3