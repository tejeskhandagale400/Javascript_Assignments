
     
     

print=function()
{
    console.log(amitabh.name,amitabh.lastname,amitabh.address,amitabh.dateOfBirth,amitabh.married,amitabh.profession);
    console.log(abhishek.name,abhishek.lastname,abhishek.address,abhishek.dateOfBirth,abhishek.married,abhishek.profession);
    console.log(aradhya.name,aradhya.lastname,aradhya.address,aradhya.dateOfBirth,aradhya.married,aradhya.profession);

}



     amitabh={
    name:"Amitabh",
    lastname:"Bachchan",
    age:50,

    skills:["acting","singing"],
    address:{
    city:"Mumbai",
    pincode:410205},
    dateOfBirth:new Date('1966-10-18'),
    married:true,
    profession:"Actor"
     }


abhishek=Object.create(amitabh);
abhishek.name="Abhishek";
abhishek.age="33";
abhishek.dateOfBirth=new Date('1980-12-12');
abhishek.skills="Acting";

aradhya=Object.create(abhishek);
aradhya.name="Aradhya";
aradhya.age="10";
aradhya.married=false;
aradhya.dateOfBirth=new Date('2008-12-12');
aradhya.skills="singing";
aradhya.profession="Student";
 print();