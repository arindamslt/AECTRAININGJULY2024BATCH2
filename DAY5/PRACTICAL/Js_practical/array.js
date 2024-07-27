//ARRAY DELCARATION
var arr=[100,200,300,400];
console.log(arr);
//ADD THE LAST ELEMENT IN ARRAY
arr.push(500);
console.log(arr);
//ADD THE FISRT ELEMENT IN ARRAY
arr.unshift(50);
console.log(arr);
//REMOVE THE LAST ELEMENT
arr.pop();
console.log(arr);
//REMOVE THE FIRST ELEMENT IN ARRAY
arr.shift();
console.log(arr);
//REMOVE THE ELEMENT FROM SPECIFIC POSITION IN ARRAY
arr.splice(2,1);
console.log(arr);
//ADD THE ELEMENT INTO THE SPECIFIC POSITION
arr.splice(2,0,300);
console.log(arr);
//FIND RANGE OF VALUES
var newArray=arr.slice(2,4);
console.log(newArray);
//FOR EACH LOOP 
arr.forEach(function(element,index){
   console.log(index,element); 
})
//MAP FUNCTION RETURN A ARRAY
var newArray1=arr.map(function(element,index){
    return element*10;
})
console.log(newArray1);
//FILTER FUNCTION IN ARRAY
var newArray2=arr.filter(function(element,index){
    return element>200;
})
console.log(newArray2);