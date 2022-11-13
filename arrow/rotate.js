let h =(arre)=>{
    let temp=0;
    let k=3;
   k=k%arre.length
    for(i=0;i<k;i++){
      temp = arre.pop();
     arre.unshift(temp); 
    } 
    console.log(arre);
}
console.log(h([2,3,4,5,6,7]))