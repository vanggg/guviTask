var obj= {name:"Person1",age:5};
var obj1= {age:5,name:"Person1"};
var a= JSON.stringify(obj) ;
var b= JSON.stringify(obj1);
if(a===b){
    console.log(True);
}
else{
    console.log(false);
}
