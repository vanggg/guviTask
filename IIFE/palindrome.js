(function(n){
    for(i=0;i<n.length;i++){
        n[i]=n[i].split(" ").reverse().join('');
       console.log(n[i]);
    }
 
})(["Madam","329"]);