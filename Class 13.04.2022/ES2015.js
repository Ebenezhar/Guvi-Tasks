// function fullName(firstname,secondname) {
//    return `welcome ${secondname}, ${firstname}`;
// }
// console.log(fullName("Ebenezhar","Selvakumar"));
// function movieUrl (domain,genere,year){
//     return `http:// ${domain}?genere=${genere}&year=${year}`;
// }
// console.log(movieUrl("imdb.com","thriller","2020"));
// const [...t3] = [10,20,30];
// console.log(t3);

function sum(...all){
    let res = 0;
    for(i=0; i<all.length; i++){
        res = res + all[i];
    }
console.log(res);
}
sum(10,20,30);