



savings={accountNumber:333222555111,
    accountHolderName:"Shubham Batt",
    accountBalance:30000,issalary:true,
    withdraw:function(amount)
          {
              if(savings.accountBalance>amount )
             {   savings.accountBalance=savings.accountBalance-amount;
                 console.log("Withdraw is successful  Remaining Balance of savings "+savings.accountBalance);
                }
            else
                 {
                  console.log("You entered Invalid Amount ");

                 }
        },


      getCurrentBalance:function()
    {
     console.log("Account Balance Of saving Account "+savings.accountBalance);

    }

    };





        current={accountNumber:333222555111,
    accountHolderName:"Shubham Batt",
    accountBalance:200000,

    withdraw:function(amount)
{


        checkRemaining = current.accountBalance - amount;

        if(checkRemaining<0)
    {
        withdrawLimit=current.accountBalance+current.odLimit;
        if(withdrawLimit>=amount)
        {
            current.accountBalance = checkRemaining;

        remainingBalance = withdrawLimit - amount;
         RemainingwithdrawLimite = current.accountBalance + current.odLimit - amount;

        console.log("Withdraw From Current Account is successful your Remaining withdraw Limit is " +RemainingwithdrawLimite);

         }
        else
         {
            withdrawLimit=current.accountBalance+current.odLimit;

            current.accountBalance = checkRemaining;

            console.log("Your transaction has exceeded the odlimit limit your  withdraw Limit is " +withdrawLimit);
         }
   }

    else
        {
        withdrawLimit=current.accountBalance+current.odLimit;
        console.log("Withdraw From Current Account is successful your Remaining withdraw Limit is " +withdrawLimit );


         }


},


getCurrentBalance:function()
{
    console.log("Account Balance Of Current Account "+current.accountBalance);


}
};

odLimit=100000;


savings.getCurrentBalance();
savings.withdraw(19900);
savings.getCurrentBalance();

current.withdraw(120);


savings.getCurrentBalance();
 current.getCurrentBalance();

// console.log(current.odLimit);
