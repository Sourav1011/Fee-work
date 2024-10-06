// var btns=document.querySelectorAll("button");
// console.dir(btns);


// for(btn of btns){
//     btn.onclick=myfunc;
// }
// function myfunc(){
//     console.log("button was pressed")
// }

// for event listener : to impliment multiplte events in the button

var btns=document.querySelectorAll("button");
console.dir(btns);


for(btn of btns){
    btn.addEventListener('click',myfunc);// it is an object not an event which stores//
    btn.addEventListener('click',hello);// click is the event and call the func//
}
function myfunc(){
    console.log("button was pressed")
}
function hello(){
    console.log("hello")
}

// element //
var a=document.querySelector("p");
console.dir(a);

a.addEventListener("mouseenter",myfunc);


function myfunc(){
    console.log("paragraph")
}


