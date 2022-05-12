// var student1 = {
//     firstname: 'selva',
//     secondname: 'kumar',
//     fullname: function(){
//         return `${this.secondname} , ${this.firstname}`;
//     }
// }
// console.log(student1.fullname());
// var student2 = {
//     firstname: 'kavi',
//     secondname: 'cholan',
//     fullname: student1.fullname
//     }
// console.log(student2.fullname());
// var printfullname = function() {
//     return `${this.secondname}, ${this.firstname}`;
// }
// console.log(printfullname());
// var student3 = {
//     secondname: 'wick',
//     firstname: 'john',
//     fullname: printfullname,
// }
// console.log(student3.fullname());
// a = "ebi";
// console.log(a);
// let alert = function (message){
//     console.log ('your local message',message);
 // }
// alert("awesome");
var printfullname = function(){
    return this.lastname +","+ this.firstname;
}
lastname = "R";
firstname = "vijay";
console.log(printfullname());   