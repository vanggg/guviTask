// countries code
const request = new XMLHttpRequest();
request.open("GET", " https://restcountries.com/v2/all");
request.onload = function () 
{
    let a =JSON.parse(request.response);
    
    for(i=0;i<a.length;i++){
       console.log(a[i].region)
       console.log(a[i].subregion)
       console.log(a[i].population)
       console.log(a[i].name)
       console.log(a[i].flags)
    }
   
 
};
request.send(JSON.region);
request.send(JSON.subregion);
request.send(JSON.population);
request.send(JSON.name);
request.send(flags);