// console.log(a);// this will became undefined as the value as memory allocation  is done then code excution code
// myfunc();
// var a=10;

// named function
// function myfunc(){
//     var b=20;
//     console.log(b);
// }



//function expression: ananynoms functions
//  const val=function(a,b){
//     return a*b;
// };
// console.log(val);
// console.log(val(5,3));
//console.log(val.sum(5,3)); this will give an array as ot consider the val.sum as an function which is not a function declared in the code.

// const num= function (a){
//     return a*a*a;
// }
// console.log(num(3));

function printname( func,num){
    for( let i=1; i<=num; i++){
        func();
    }
}

// 2 function declared myname which is passed to the printname function
let myname= function(){
    console.log("sourav")
};
printname(myname,5);  // myname is the function parameter in the function 

 const arr=[2,3,4,7,8,9]
function evenno(func,arr){
    for(let i=0; i<=5; i++){  // array traversal
        func(arr[i]);    // pass each elemnet of  an array as a parameter to the annonynoms function (even)
    }
     
}
let even=function(num){
    if(num%2==0){
        console.log(num)
    }
    else{
        console.log("not even");
    }
}
evenno(even,arr);