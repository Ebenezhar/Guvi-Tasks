class Person {
    constructor (fname,sname,age,contact,address,martialStatus)
    {
        this.fName = fname;
        this.sName = sname;
        this.Age = age;
        this.Contact = contact;
        this.Address = address;
        this.Martial_Status = martialStatus;
    }
    getDetails(){
        return `First Name:${this.fName}
        Second Name:${this.sName}
        Age: ${this.Age}
        Contact: ${this.Contact}
        Address: ${this.Address}
        Martial Status: ${this.Martial_Status}`
    }

};
const Naveen = new Person ("Naveen","Kumar",28,8521456321,"22,sfsds,fguhssu","Single");
const Muthu = new Person ("Muthu","Raj",31,8741236589,"2,sllfsds,fggjssu","Married");
console.log(Naveen.getDetails());
console.log(Muthu.getDetails());
