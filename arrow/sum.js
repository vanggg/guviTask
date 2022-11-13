let g=(c)=>{
    let sum=0;
    if(c.length>0){
       for(i=0;i<c.length;i++){
        sum +=c[i];
       }
       console.log(sum);
    }
}
console.log(g([1,2,3,4]));