
     
     

print=function()
{
    console.log(amitabh.name,amitabh.lastname,amitabh.address,amitabh.dateOfBirth,amitabh.married,amitabh.profession);
    console.log(abhishek.name,abhishek.lastname,abhishek.address,abhishek.dateOfBirth,abhishek.married,abhishek.profession);

}



     amitabh={
    name:"Amitabh",
    lastname:"Bachchan",
    age:50,

    skills:["acting","singing"],
    address:{
    city:"Nanded",
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
 print();