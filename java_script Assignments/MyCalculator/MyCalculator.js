function Options()
{
opt =window.prompt("Select Options \n 1.Add \n 2. Subtract \n3.Multiply \n 4. Divide \n 5. Exponent \n 6. Mean \n 7. Quit");
if(opt<=0 || opt>7)
    {
    window.alert("Error Select Again");
    }


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






}


add=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
 sum=parseInt(n1,10)+parseInt(n2,10);
 var x=document.getElementById("result").innerHTML=sum;

// alert(sum);

}



sub=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
 sb=parseInt(n2,10)-parseInt(n1,10);

alert(sb);

}

mul=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
 m=parseInt(n1,10)*parseInt(n2,10);

alert(m);

}

div=function()
{
    n1 =window.prompt("Enter a first Number");
    n2 =window.prompt("Enter a second Number");
 d=parseInt(n1,10)/parseInt(n2,10);

alert(d);

}