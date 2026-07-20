//Setup
//all the consts
const homebtn = document.querySelector("#homebtn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const gamebtn=document.querySelector("#page4btn");

var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
  for(let onepage of allpages){ //go through all subtopic pages
    onepage.style.display="none"; //hide it
  }
}
function show(pgno){ //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage=document.querySelector("#page"+pgno);
  onepage.style.display="block";   //show the page
}
//unhide and hide the subtopics pages
homebtn.addEventListener("click", function () { 
  show(1); 
});
page1btn.addEventListener("click", function () { 
  show(2); 
});
page2btn.addEventListener("click", function () {
  show(3); 
});
page3btn.addEventListener("click", function(){
	show(4);
});
gamebtn.addEventListener("click", function(){
	show(5);
});
hideall();


//Start code:


//game code starts here: