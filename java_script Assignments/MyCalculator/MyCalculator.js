Options=function ()
{




opt =window.prompt("Select Options \n 1.Add \n 2. Subtract \n3.Multiply \n 4. Divide \n 5. Exponent \n 6. Mean \n 7. Quit");




for(var i=0;opt<=0 || opt>8;i++)
{
if(opt<=0 || opt>7)
    {
    window.alert("Error Select Again");
   Options();
    }

}


check_error(opt);
// while(isNaN(opt))
//  {   

//    window.alert("Error Select Again");
//    Options();
//  }




 


if(opt==1)
{
    add();
    
}





if(opt==2)
{
    sub();
}


if(opt==3)
{
    mul();
}



if(opt==4)
{
    div();
}

if(opt==5)
{
    expo();
}



if(opt==6)
{
total=0;
var count=0;
enteredNum=window.prompt("Enter Numbers");
while(!enteredNum.includes("***"))
{
    total=total+parseInt(enteredNum,10);
    count=count+1;
    enteredNum=window.prompt("Enter Numbers");

}
me=total/count;
document.getElementById("result").value=me;

}



if(opt==7)
{
    document.getElementById("paragraph").innerHTML="Menu Window is Closed.";

}




}




add=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
    check_error(n1);
    check_error(n2);
 sum=parseInt(n1,10)+parseInt(n2,10);
 document.getElementById("result").value=sum;

}



sub=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
    check_error(n1);
    check_error(n2);
 sb=parseInt(n2,10)-parseInt(n1,10);
 document.getElementById("result").value=sb;

}

mul=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
    check_error(n1);
    check_error(n2);
 m=parseInt(n1,10)*parseInt(n2,10);
 document.getElementById("result").value=m;

}

div=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
    check_error(n1);
    check_error(n2);
 d=parseInt(n1,10)/parseInt(n2,10);
 document.getElementById("result").value=d;

}




expo=function()
{
    n1 =window.prompt("Enter a base");
    n2 =window.prompt("Enter a Exponent");
    check_error(n1);
    check_error(n2);
 e=parseInt(n1,10)/parseInt(n2,10);

ex=Math.pow(parseInt(n1,10),parseInt(n2,10));  //n1=base and n2=exponent
 document.getElementById("result").value=ex;

}


check_error=function(check){


    if(isNaN(check))
    {   
   
      window.alert("Error Select Again");
      Options();
    }
   



}