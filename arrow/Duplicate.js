let b =(arr)=>{
    let b=arr.filter((item,index)=>{
        return arr.indexOf(item) !==index});
        console.log(b);      
}
console.log(b([1,2,3,4,5,2,3,1]));