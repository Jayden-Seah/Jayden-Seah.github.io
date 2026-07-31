/*Variables,Values...*/
//Phone layout for Buttons etc
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");

//Pages
const homebtn = document.querySelector("#homebtn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const gamebtn=document.querySelector("#page4btn");
const page6btn=document.querySelector("#page5btn");
let allpages=document.querySelectorAll(".page");


/*Start: */

/*Pages*/
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
	updateGameSize();
});
page6btn.addEventListener("click", function(){
	show(6);
});
hideall();
show(1);


/*For Phone*/
hamBtn.addEventListener("click",toggleMenus);

function toggleMenus(){ /*open and close menu*/
 //if menuItemsList dont have the class "menuShow", add it, else remove it
 menuItemsList.classList.toggle("menuShow"); 
 //if menu is showing (has the class “menuShow”)
 if(menuItemsList.classList.contains("menuShow")){ 
  hamBtn.innerHTML="Close Menu"; //change button text to chose menu
 }else{ //if menu NOT showing
  hamBtn.innerHTML="Open Menu"; //change button text open menu
 }
}


/*Game Code*/
//var
const dustId = document.getElementById("dustId");
const dust2Id = document.getElementById("dust2Id");
const dust3Id = document.getElementById("dust3Id");
const scoreBox=document.getElementById("scoreBox");
const cleanAudio = new Audio("audio/cleanDust.mp3");
const timeDisplay = document.getElementById("timer");

const gameborder = document.querySelector(".GameborderBox");//For the phone layout

let score=0;
let timeLeft = 30;
let moveDustItvId = setInterval(MoveDust, GetRandom(850,1000));
let moveDustItvId2 = setInterval(MoveDust2, GetRandom(850,1000));
let moveDustItvId3 = setInterval(MoveDust3, GetRandom(850,1000));
let gameover = false;
let timer = setInterval(countdown,1000);
const resetbtn = document.querySelector("#resetbtn");
/*box border to keep dust in the bg image*/
let maxX;
let maxY;


//offsetWidth , offsetHeight => return the total layout width and height of an HTML element in pixels.
function updateGameSize(){
    maxX = gameborder.offsetWidth - 150;
    maxY = gameborder.offsetHeight - 150;
}

window.addEventListener("resize", updateGameSize);//window -> browser screen size

scoreBox.innerHTML = "Score: 0";
resetbtn.addEventListener("click" , returnDustOrigin);

//Func.
function GetRandom(min,max){
	//this will select a number between min and max
	return Math.round(Math.random() * (max - min)) + min;
}

 function returnDustOrigin() {
	 
	clearInterval(timer);
	clearInterval(moveDustItvId);
	clearInterval(moveDustItvId2);
	clearInterval(moveDustItvId3);
	 
    dustId.style.left="0px";
	dustId.style.top="0px";
	
	dust2Id.style.left="0px";
	dust2Id.style.top="0px";
	
	dust3Id.style.left="0px";
	dust3Id.style.top="0px";
	
	timeLeft= 30;
	timeDisplay.innerHTML = timeLeft;
	timer = setInterval(countdown,1000);
	
	score = 0;
	scoreBox.innerHTML = "Score: " + score;
	
	moveDustItvId = setInterval(MoveDust, GetRandom(850,1000));
	moveDustItvId2 = setInterval(MoveDust2, GetRandom(850,1000));
	moveDustItvId3 = setInterval(MoveDust3, GetRandom(850,1000));
	
	
	gameover = false;
 }
 
function MoveDust() {
	dustId.style.left = GetRandom(0, maxX-100) + "px";
	dustId.style.top = GetRandom(0, maxY-100) + "px";
	
}

function MoveDust2() {
	
	dust2Id.style.left = GetRandom(0, maxX-100) + "px";
	dust2Id.style.top = GetRandom(0, maxY-100) + "px";
}

function MoveDust3() {
	
	dust3Id.style.left = GetRandom(0, maxX-100) + "px";
	dust3Id.style.top = GetRandom(0, maxY -100 ) + "px";
}

function countdown(){
	timeLeft--;
	timeDisplay.innerHTML = timeLeft;
	
	if (timeLeft <=0){
			clearInterval(timer);
			clearInterval(moveDustItvId);
			clearInterval(moveDustItvId2);
			clearInterval(moveDustItvId3);
			timeDisplay.innerHTML = "Game Over!";
			scoreBox.innerHTML = "Your Score is " + score;
			
			
			gameover = true;
	}
}

function cleanDust() {
	
	if(gameover) return;
	
	//increases score after clicking
	score++;
	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
	
	win();
	
	cleanAudio.play(); //play the audio!
	dustId.src = "images/clean-stars.png";
	dustId.classList.add("animate");	
	

	setTimeout(function(){dustId.src = "images/dust-clear.png";dustId.classList.remove("animate");MoveDust(); },500);

}

function cleanDust2() {
	
	if(gameover) return;
	
	//increases score after clicking
	score++;
	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
	
	win();
	
	cleanAudio.play(); //play the audio!
	dust2Id.src = "images/clean-stars.png";//Has a white bg to make it easier to see
	dust2Id.classList.add("animate");	

	setTimeout(function(){dust2Id.src = "images/dust-clear.png";dust2Id.classList.remove("animate");MoveDust2(); },500);

}

function cleanDust3() {
	
	if(gameover) return;
	
	//increases score after clicking
	score++;
	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
	
	win();
	
	cleanAudio.play(); //play the audio!
	
	//dust -> cleaned -> dust
	dust3Id.src = "images/clean-stars.png";
	dust3Id.classList.add("animate");	

	setTimeout(function(){dust3Id.src = "images/dust-clear.png";dust3Id.classList.remove("animate"); MoveDust3(); },500);

}

function win(){

    if(score >= 20){

        clearInterval(timer);
        clearInterval(moveDustItvId);
        clearInterval(moveDustItvId2);
        clearInterval(moveDustItvId3);

        scoreBox.innerHTML = "You Win!!";
        timeDisplay.innerHTML = "Game Over!";
        gameover = true;
    }
}

//link durian to mouseclick to durianCatch function
dustId.addEventListener("click",cleanDust);
dust2Id.addEventListener("click",cleanDust2);
dust3Id.addEventListener("click",cleanDust3);



/*Quiz Code*/
const btnSubmit=document.querySelector("#btnSubmit");
const scorebox=document.querySelector("#scorebox");
let q1,q2,q3,q4,q5,quizscore=0;

btnSubmit.addEventListener("click",CheckAns);

function CheckAns(){
	quizscore=0;

	//read the value of the selected radio button for q1
	q1=document.querySelector("input[name='q1']:checked");
	if(!q1){
		alert("Please answer all questions");
		return;
	}
	console.log(q1.value);
	if(q1.value=="Central Processing Unit")quizscore++;

	//read the value of the selected radio button for q2
	q2=document.querySelector("input[name='q2']:checked");
	if(!q2){
		alert("Please answer all questions");
		return;
	}
	console.log(q2.value);
	if(q2.value=="To cool the CPU")quizscore++;

	//read the value of the selected radio button for q3
	q3=document.querySelector("input[name='q3']:checked");
	if(!q3){
		alert("Please answer all questions");
		return;
	}
	console.log(q3.value);
	if(q3.value=="Attach the SSD/other storage device")quizscore++;

	//read the value of the selected radio button for q4
	q4=document.querySelector("input[name='q4']:checked");
	if(!q4){
		alert("Please answer all questions");
		return;
	}
	console.log(q4.value);
	if(q4.value=="PC part picker")quizscore++;

	//read the value of the selected radio button for q5
	q5=document.querySelector("input[name='q5']:checked");
	if(!q5){
		alert("Please answer all questions");
		return;
	}
	console.log(q5.value);
	if(q5.value=="mid 1950s")quizscore++;
	
	
	scorebox.innerHTML="You scored "+quizscore;

}

/*FullScreen mode -> fullscreen to the game*/
const btnFS=document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");

btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);

function enterFullscreen() {
	document.querySelector(".GameborderBox").requestFullscreen();
}
function exitFullscreen() {
	document.exitFullscreen();
}