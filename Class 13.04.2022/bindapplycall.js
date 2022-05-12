// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby); //it copies the pokemonName function.
//     //able to call logpokemon()
//     //It will now recognizes its properties (Pika and Chu) and its methods
// };

// var logPokemon = pokemonName.bind(pokemon); //bind()method creates new function that, when called has its "this" keyword set to the provided value.

// logPokemon('sushi', 'algorithms');
// // after we bind() a value we can use the function just like it was any other normal function. We could even update the function to accept parameters,
// //and pass them like so.

// //bind() & call() are more similar
// //similarities:
// //*accepts additional parameters
// //*Executes the function it was called upon right away.
// //Dissimilarity:
// //call() function doesn't creates the copy of the function being called on.

// //The difference btw the call() and apply() is 
// pokemonName.call(pokemon,'sushi', 'algorithms');
// // call() expects all parameters to be passed individually.
// pokemonName.apply(pokemon,['sushi', 'algorithms']);
// // apply() expects all parameters to be passed as an array.

var student = {
    firstName: "Tony",
    secondName: "Stark",
}
var introMsg = function(character){
    return `${this.firstName} ${this.secondName} and he is an ${character}`;
}

console.log(introMsg.call(student, "Avenger")); 