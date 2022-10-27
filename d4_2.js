// countries code
const request = new XMLHttpRequest();
request.open("GET", " https://restcountries.com/v3.1/region/europe");
request.onload = function () 
{
    let a =JSON.parse(request.response);
    let arr=[];
    let arr1=[];
    for(i=0;i<a.length;i++){
       console.log(a[i].region)
    
    }
    console.log(arr,arr1);
 
};
request.send(JSON.region);
