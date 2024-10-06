// selecters in dom
// getElementbyId;
//getElementbyclassname;
//getElementbytagname;
// query selecter; 

const a=document.getElementById("heading");

a.style.color="red";

const b=document.getElementsByClassName("list");

b[0].style.color="purple";
b[1].style.color="purple";
b[2].style.color="purple";
 
a.classList.add("green")
console.dir(a.classList(1));