(function(arr){
    let b=arr.filter((item,index)=>{
        return arr.indexOf(item) !==index});
        console.log(b);
 
})([1,5,3,4,3,4,2]);