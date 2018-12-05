


// savings=new Saving()



savings={accountNumber:333222555111,
    accountHolderName:"Shubham Batt",
    accountBalance:30000,issalary:true,
    withdraw:function(amount)
    {
    if(savings.accountBalance>amount )
     {   savings.accountBalance=savings.accountBalance-amount;
       console.log("Remaining Balance of savings "+savings.accountBalance);
    }
    else
    {
        console.log("You entered Invalid Amount ");

    }
},


getCurrentBalance:function()
{
    console.log("Account Balance "+savings.accountBalance);


}




};





current={accountNumber:333222555111,
    accountHolderName:"Shubham Batt",
    accountBalance:savings.accountBalance,
    odLimit:3*this.accountBalance,
    withdraw:function(amount)
{
if(current.odLimit>amount )
{
    current.accountBalance=current.accountBalance-amount;
    console.log("Remaining Balance of current " +current.accountBalance);
}
else
console.log("Your transaction has exceeded the odlimit");
},
getCurrentBalance:function()
{
    console.log("Account Balance "+current.accountBalance);


}
};




savings.withdraw(10000);
current.withdraw(100000000);

// console.log(savings.withdraw(100000));

savings.getCurrentBalance();
current.getCurrentBalance();