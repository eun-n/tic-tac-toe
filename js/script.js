function startGame() {
	for (var i =1; i<=9; i++) {
		clearBoard(i);
	}
	document.turn= "X";
	if(Math.random() < 0.5) {
		document.turn = "O";
	} document.winner=null;
	setMessage(document.turn+ " gets to start.");
}

function setMessage(msg) {
	document.getElementById("message").innerText=msg;
}

function nextMove(box) {
	if(document.winner != null) {
		setMessage(document.winner+ " already won the game.");
	} else if(box.innerText == "") {
		box.innerText=document.turn;
		switchTurn();
	} else {
		setMessage("That box is already taken!");
	}

}

function switchTurn() {
	if(checkWinner(document.turn)) {
		setMessage("Congratulations, "+document.turn+"! You are the winner!");
		document.winner = document.turn
	} else if(document.turn == "X") {
		document.turn = "O";
		setMessage("It's "+document.turn+"'s turn!");
	} else {
		document.turn = "X";
		setMessage("It's "+document.turn+"'s turn!");
	}
}

function checkWinner(move) {
	var result = false;
	if(checkRow(1, 2, 3, move) || 
		checkRow(4, 5, 6, move) || 
		checkRow(7, 8, 9, move) || 
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {
			result = true;
	} return result;
}

function checkRow(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) ==move) {
		result = true;
	} return result;

}

function getBox(number) {
	return document.getElementById("b" + number).innerText;
}

function clearBoard(number) {
	document.getElementById("b" + number).innerText = "";
}