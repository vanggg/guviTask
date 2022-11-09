(function(n,n1){
        var concat=n.concat(n1)
        console.log(concat);
        var arrsort=concat.sort((a,b)=>a-b)
        console.log(arrsort)
     var length=arrsort.length
        console.log(length)
        if(length%2!=0){
            var result=arrsort[Math.floor(length/2)]
            console.log(result)
        }
        else{
            var result=Math.floor((arrsort[length/2]+arrsort[length/2-1])/2)
            console.log(result)
        }
})( [1,2,3,5],[4,5,6,7]);