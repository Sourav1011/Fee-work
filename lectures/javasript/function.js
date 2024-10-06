// // 2. default parameter:

// function multiply(a, b = 5) {
//   let ans = a * b;
//   console.log(ans);
// }
// multiply(5);  //25
// multiply(5, 3);  //15
// multiply(5); // NaN
// multiply(5, 3); //15

// // 1. function declaration
// function sum(a, b) {
//   // a,b are argument of function sum
//   let ans = a + b;
//   console.log(ans);
// }
// // function call
// sum(5, 3); // 5, 3 is working as a parameters for function sum

// var a = 7;
// var b = 9;

// console.log(a + b);

// // .....
// // ......
// // ......1000

// var a = 7;
// var b = 9;

// console.log(a + b);

// //  ......200

// var a = 7;
// var b = 9;

// console.log(a + b);


// function termination: 1. function defination 2.return keyword

function multiply(a, b) {
    let c = a * b;
    console.log(c);
    return c;
    console.log(c);
  }
  multiply(2, 5);
  
  // function info(name, age) {
  //     let c = 25;
  // //   console.log(`My name is  ${name}. I am ${age} Years old `);
  // }
  // info("yash", "25");