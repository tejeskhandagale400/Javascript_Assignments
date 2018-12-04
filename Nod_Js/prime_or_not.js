

 primenumber=function()
 {
   var num=10;

   if(num==1)
   {
    console.log("It is not a prime number");


   }
   else{
   for(var i=2;i<num;i++)
   {
       if(num%2==0)
       {
console.log("It is not a prime number");
ProcessingInstruction.exit(-1);


       }
   }
  console.log("It is a prime number");
 }
}
 primenumber();
  
  
 