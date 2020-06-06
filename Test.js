/*
var x = sum("30");
function sum(x){
    return Number.parseInt(x);
}
console.log(x)
*/

function add(num1,num2){
    var x1 = Number.parseInt(num1);
    var x2 = Number.parseInt(num2);
    return x1 + x2;
}
let x = add("30","40");
console.log(x)

function stringmanipulation(str1,str2){
    console.log(str1.length)
    console.log(str2.length)
    for(let i=0;i<str1.length;i++){
        console.log(str1.charAt(i));
    }
}
stringmanipulation("Neha","Satej")

function calculatePower(base,power){
    return Math.pow(base,power);
}
let s = calculatePower(2,5)
console.log(s)

function array(){
    let arr1 = [];
    arr1.push("Neha");
    arr1.push("Satej");
    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i]);
    }
}
array()