class SonAccount{
    balanceInit:number;
    fixedDeposit:number=1000;
    fixedWithdraw:number=1500;
    
    constructor(_balanceInit:number=0){
        this.balanceInit=_balanceInit;
    }
    
    deposit(amount:number)
    {
       this.balanceInit+=amount; 
    }
    withdraw(amount:number)
    {
        this.balanceInit-=amount;

    }
    depositFixed()
    {
        this.deposit(1000);
    }
    withDrawFixed()
    {
        this.withdraw(1000);
    }
} 

class MotherAccount extends SonAccount
{
    constructor (_balanceInit:number)
    {
       super(_balanceInit); 
    }
    deposit(amount:number){
        
        this.balanceInit+=amount-this.calcInterest(amount);
    }
    withdraw(amount:number)
    {
        
        this.balanceInit-=amount+this.calcInterest(amount);

    }
    calcInterest(amount):number
    {
        let interest=0;
        interest=amount/10;
        return interest;

    }
}


let angeloAccount = new SonAccount(50000);

angeloAccount.deposit(10000);
console.log(angeloAccount.balanceInit);
angeloAccount.withdraw(5000);
console.log(angeloAccount.balanceInit);
console.log('...............');

let valeriaAccount=new MotherAccount(50000);
valeriaAccount.deposit(10000);
console.log('You deposited:',valeriaAccount.balanceInit);
valeriaAccount.withdraw(5000);
console.log('You withdraw:',valeriaAccount.balanceInit);


