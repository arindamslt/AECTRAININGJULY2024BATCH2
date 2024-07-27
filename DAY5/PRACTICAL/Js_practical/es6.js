//SPREAD OPERATOR 
//COPYING DATA FROM ONE OBJECT TO ANOTHER
var obj1={
    id:101,
    name:'AJOY',
    phno:'45454'
}
var obj2={
    ...obj1,
    phno:'3333'
}
console.log(obj1);
console.log(obj2);
//REST PARAMETER
function fn1(x,y,...data)
{
    console.log(x,y,data);
}
fn1(10,20);
fn1(10,20,30,40);
//LET VS VAR VS CONST
/*function fn2()
{
    if(true)
    {
        var x=25;
        console.log(x);
    }
    console.log(x);
}*/
/*function fn2()
{
    if(true)
    {
        let x=25;
        console.log(x);
    }
    console.log(x);
}*/
/*function fn2()
{
    if(true)
    {
        const x=25;
        console.log(x);
        x=40;
    }
   
}
fn2();*/
//ARROW FUNCTION
/*function fn3()
{
    console.log("NORMAL FUNCTION");
}
fn3();*/
const fn3=()=>{
    console.log("ARROW FUNCTION");
}
fn3();
//FOREACH METHOD WITH ARROW FUNCTION
var arr=[100,200,300,400,500,600];
/*arr.forEach(function(element,index){
    console.log(index,element); 
 })*/
    arr.forEach((element,index)=>{
        console.log(index,element); 
    })
    //MAP FUNCTION RETURN A ARRAY
/*var newArray1=arr.map(function(element,index){
    return element*10;
})*/
var newArray1=arr.map((element,index)=>{
    return element*10;
})
console.log(newArray1);
//FILTER FUNCTION IN ARRAY
/*var newArray2=arr.filter(function(element,index){
    return element>200;
})*/
var newArray2=arr.filter((element,index)=>{
    return element>200;
})
console.log(newArray2);
//DESTRUCTURING THE OBJECT
var obj3={
    id:101,
    nm:'ALOKE',
    phno:'56565',
    email:'al@gmail.com'
}
var{nm,phno}=obj3;
console.log(nm,phno);