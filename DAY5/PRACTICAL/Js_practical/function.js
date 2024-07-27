//NORMAL FUNCTION
function fn1()
{
    console.log("NORMAL FUNCTION");
}
fn1();
//PARAMETERISED FUNCTION
function fn2(x,y)
{
    console.log(x,y);
}
fn2(10,20);
//FUNCTION WITH RETURN STATEMENT
function fn3(x,y)
{
    return x+y;
}
var res=fn3(10,20);
console.log(res);
//ANNONYMOUS AND CALLBACK FUNCTION
function fn4(f)
{
    console.log(f);
    f();
}
fn4(function(){
    var city='KOLKATA';
    console.log(city);
})
//HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
function print()
{
    var state='WB';
    console.log(state);
}
function fn5(f)
{
    console.log(f);
    f();
}
fn5(print);
//FUNCTION EXPRESSION
var result=function(){
    var dist='24PGSNORTH';
    console.log(dist);
}
result();
