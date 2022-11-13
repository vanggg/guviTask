let s =(n)=>{
    for(i=0;i<n.length;i++){
        n[i]=n[i][0].toUpperCase()+n[i].slice(1);
        let c;
       console.log(n.join(" "));
    }
}
console.log(s(["big ","boss"]));