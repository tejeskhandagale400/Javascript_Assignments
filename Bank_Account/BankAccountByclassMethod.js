class Bankaccount
                {
                    
                          
    constructor(accountNumber,accountHolderName,accountBalance)
    {
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
        
    }

    deposite(ammountToDeposite)
    {
        this.accountBalance +=ammountToDeposite;
        
    }

    getCurrentBalance(ammountToDeposite)
    {
        if(this==savings)
        {
        console.log("Your Account Balance of saving Account  is " +this.accountBalance);
        }
        else{
            console.log("Your Account Balance of Current Account  is " +this.accountBalance);

        }
        
    }




}


class Savings extends Bankaccount
{ 
     
     constructor(accountNumber,accountHolderName,accountBalance,isSalary)
    {
        super(accountNumber,accountHolderName,accountBalance,isSalary);

         this.isSalary = isSalary;
        
    }


      withdraw(AmounttoWithdraw)
      {
            if(this.accountBalance>AmounttoWithdraw )        
        {   
            this.accountBalance = this.accountBalance-AmounttoWithdraw;
            console.log("Withdraw is successful  Remaining Balance of savings "+this.accountBalance);   //gives the remaining balance in that account
                    
        }

        
        else    
        {
            console.log("You entered Insufficient Amount ");

        }
    }
}



class Current extends Bankaccount
{ 

        constructor(accountNumber,accountHolderName,accountBalance,odLimit)
         {
        super(accountNumber,accountHolderName,accountBalance,odLimit);

         this.odLimit = odLimit;
        
        }


      withdraw(AmounttoWithdraw)
      {
        var checkRemaining = this.accountBalance-AmounttoWithdraw;

         if(checkRemaining<0)
          {
              var withdrawLimit=this.accountBalance + this.odLimit;
               if(withdrawLimit>=AmounttoWithdraw)
                 {
                    this.accountBalance = checkRemaining;
                         var remainingBalance = withdrawLimit - AmounttoWithdraw;
                         var  RemainingwithdrawLimite = this.accountBalance + this.odLimit - AmounttoWithdraw;
                           console.log("Withdraw From Current Account is successful your Remaining withdraw Limit is " +RemainingwithdrawLimite);

                 }
                else
                {
                    console.log("Your transaction has exceeded the odlimit limit your  withdraw Limit is " +withdrawLimit);
                }
         }

        else
          {
             this.accountBalance = checkRemaining;
             withdrawLimit = this.accountBalance + this.odLimit;
             console.log("Withdraw From Current Account is successful your Remaining withdraw Limit is " +withdrawLimit );

          }
   
        }



    }




var savings=new Savings(333222555,"Shubham Bhatt",300000,true);
var current=new Current(333222555,"Tejas Khandagale",400000,10000);

savings.deposite(5000);   //amount is diposited in saving account
savings.getCurrentBalance();    //display the account balance of savings
savings.withdraw(4000);
savings.getCurrentBalance();
savings.deposite(10000);
savings.getCurrentBalance();

current.deposite(10000); //amount is diposited in current account
current.getCurrentBalance();  //display the account balance of current
current.withdraw(50000);         //it withdraws the amount from current account      
current.getCurrentBalance();
