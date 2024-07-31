//CREATION OF OBJECT
var product={
    pid:"P1",
    pname:"TV",
    pqty:5,
    price:25000.00
}
console.log(product);
console.log(product.pname,product.price);
//ADDING ATTRIBUTES IN THE EXISTING OBJECT
product.compnay='SAMSUNG';
console.log(product);
//UPDATE THE EXISTING VALUE IN OBJECT
product.price=32000.00;
console.log(product);
//DELETE THE ELEMENT IN PRODUCT
delete product.compnay;
console.log(product);
//NETSED OBJECT
var employee={
    eid:101,
    ename:'SUMAN',
    edesig:'MANAGER',
    address:{
        plotno:'AD10',
        streetnm:'SALTLAKE CITY',
        pincode:'700091',
        area:{
            ps:'BIDHANAGAR',
            dist:'24PGS(N)'
        }
    }
}
console.log(employee);
console.log(employee.eid,employee.ename,employee.address.plotno,employee.address.pincode,employee.address.area.ps);
