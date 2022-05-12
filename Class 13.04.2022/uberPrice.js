class Uber {
    constructor (ride,small,medium,large,charge,tipping){
        this.Ride = ride;
        this.small  = small;
        this.medium = medium;
        this.large = large;
        this.charge = charge;
        this.tipping = tipping; 
    }
    getDetails(){
        return `${this.ride},${this.small},${this.medium},${this.large},${this.charge},
        ${this.tipping}`;
    }
    getPrice(km){
        let out;
        if(km<10){
            out = (this.small*this.charge)+(this.small*this.tipping);
            return `Your Uber Charge is: ${out}`;
        }else if (km>10 && km<30){
            out = (this.medium*this.charge)+(this.medium*this.tipping);
            return `Your Uber Charge is: ${out}`;
        } else if (km>30 && km<50){
            out = (this.large*this.charge)+(this.large*this.tipping);
            return `Your Uber Charge is: ${out}`;
        }else {
            return `Invalid Input`;
        }

    }
}
const uberX = new Uber ("UberX",50,100,150,10,1);
//console.log(uberX.getDetails());
const uberXL = new Uber ("UberXL",60,110,160,13,2);
const uberSelect = new Uber ("UberSELECT",70,120,170,15,3);
console.log(uberX.getPrice(8));