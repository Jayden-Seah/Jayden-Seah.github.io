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
show(1);


//Start code:

//HOME PAGE 


//game code starts here:Clean the DUST!
//For the durian clicker game
const dustId = document.getElementById("dustId");
function GetRandom(min,max){
	//this will select a number between min and max
	return Math.round(Math.random() * (max - min)) + min;
}
function returnDustOrigin(){
	dustId.style.left = 0 + "px";
	dustId.style.right = 0+"px";
}
function MoveDust() {
	dustId.style.left = GetRandom(0, 500) + "px";
	dustId.style.top = GetRandom(0, 500) + "px";
}
var moveDustItvId = setInterval(MoveDust, 750);

const scoreBox=document.getElementById("scoreBox");

const cleanAudio = new Audio("audio/cleanDust.mp3");
var score=0; //to track how many clicks
let timeLeft = 30;//timer
const timeDisplay = document.getElementById("timer");

function countdown(){
	timeLeft--;
	timeDisplay.innerHTML = timeLeft;
	
	if (timeLeft <=0){
			clearInterval(timer);
			clearInterval(moveDustItvId);
			returnDustOrigin; 
			timeDisplay.innerHTML = "Time is up";
	}
}

let timer = setInterval(countdown,1000);

function cleanDust() {
	//increases score after clicking
	score++;
	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
	
	cleanAudio.play(); //play the audio!
}

//link durian to mouseclick to durianCatch function
dustId.addEventListener("click",cleanDust);