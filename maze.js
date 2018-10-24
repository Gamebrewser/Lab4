let borders;
let condition =false;
let goal;
let getstart;
let win = false;
let leave;
window.onload = function(){
	stat = document.getElementById('status');
	goal= document.getElementById('end');
	goal.onmouseover = message;
	getstart = document.getElementById('start');
	leave = document.getElementById("maze");
	leave.onmouseleave = outside;
	getstart.onclick = restart;
	borders = document.querySelectorAll('.boundary');
	for (var i = 0; i < borders.length - 1; i++){
		borders[i].onmouseover = bordercrossed;
	}
	
 }

function bordercrossed(){
	if(!win){
	if(!condition){
		condition = true;
	borders = document.querySelectorAll('.boundary');
	stat.innerHTML = "You lose";
	for (var i = 0; i < borders.length - 1; i++){
			borders[i].className += " youlose";
        }
    }
	}
}


function message(){
	if(!condition){
		win =true;
		alert("You win");
		document.getElementById('.boundary').style.color = "green";
	}
}

function restart(){
	condition= false;
	testwin = false;
	borders = document.querySelectorAll('.boundary');
	stat.innerHTML = "Move your mouse over S to begin";
	for (var i = 0; i < borders.length - 1; i++){
			borders[i].className = "boundary";
	}
}

function outside(){	
	if(!win){
		bordercrossed();
	}
}