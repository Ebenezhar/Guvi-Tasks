    class Account {
        constructor(name,accno,balance){
            this.name = name;
            this.accno = accno;
            this.balance = balance;   
        }
        deposit(am){
            return this.balance=this.balance+am;
        }
        getbalance(){
            return this.balance ;
        }
        withdraw(n){
            this.balance = this.balance-n;
            if(this.balance<0){
                return `your balance is insufficient`; 
            }
            else
            return `Your Balance is: ${this.getbalance()}`;
        }
    };
    const nisha = new Account ("Nisha", 151, 10_000);
    console.log(nisha.getbalance());    
    console.log(nisha.withdraw(1000));
    console.log(nisha.deposit(100));
