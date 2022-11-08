//7.Duplicate Number 
let g=function(){
    let arr=[1,2,3,4,3,4,2]
    let b=arr.filter((item,index)=>{
        return arr.indexOf(item) !==index});
        console.log(b);
    }
    g();
    