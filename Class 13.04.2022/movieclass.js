class Movie {
    constructor (title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        }
        getDetails(){
            return `The movie name is ${this.title}, the production studio is ${this.studio} and the rating is ${this.rating}`;
        }
        getPG(){
            if(this.rating == "PG")
                res.push(this.title);   
            return res; 
        }
}
const johnWick = new Movie("Johnwick","summit Entertainment","R");
const coco = new Movie("Coco", "Pixar",);
const madMax = new Movie("Mad Max", "Warner Bros", "R");
const logan = new Movie("Logan", "Marvel", "PG");
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG");
console.log(casinoRoyale.getDetails());
let input = [johnWick,coco,madMax,logan,casinoRoyale];
let res = [];
for(let i in input)
    input[i].getPG();
console.log(res);