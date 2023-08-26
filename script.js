//exemples
// console.log(document.querySelector('.message').textContent);
// getting hold of a class/ variable's value
// document.querySelector('.message').textContent = 'Current number!🎉🎉'; 		//setting a class/ variable's a new value
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);
// getting hold of a class/ variable's value and printing it to console

let computerNum = (document.querySelector(".number").value =
	Math.floor(Math.random() * 20) + 1); //random number
let currentScore = 30;
// let currentScore = Number(document.querySelector(".score").textContent); //current score value
let highestScore = 0; //highest score value

console.log(computerNum, currentScore, highestScore);

let message = function (msg) {
	document.querySelector(".message").textContent = msg;
}; // setting a message to every event

document.querySelector(".check").addEventListener("click", function () {
	// setting an event to the check button
	let userGuess = Number(document.querySelector(".guess").value);
	// setting the string input of the user to a number value in a variable

	console.log(userGuess, typeof userGuess);
	console.log(computerNum, userGuess);

	if (!userGuess) {
		// eny thing but a number or 0
		document.querySelector(".message").textContent = "⛔No number⛔";
	} else if (userGuess !== computerNum) {
		// check if user guess isn't computerNum then display a message depending on the guess
		if (currentScore > 1) {
			message(userGuess > computerNum ? "📈 Too high!" : "📉 Too low!"); //if user guess is higher than computer num then display a message too high else display a message too low
			currentScore--;
			document.querySelector(".score").textContent = currentScore;
		} else {
			message("💥 You lost the game!");
			document.querySelector(".score").textContent = 0;
			document.querySelector("body").style.backgroundColor = "#9f2f2f";
		}

		// } else if (userGuess > computerNum) {
		// document.querySelector(".message").textContent = "📈 Too high!";
		// currentScore--;
		// console.log(currentScore);
		// document.querySelector(".score").textContent = currentScore;
		// } else if (userGuess < computerNum) {
		// document.querySelector(".message").textContent = "📉 Too low!";
		// currentScore--;
		// console.log(currentScore);
		// document.querySelector(".score").textContent = currentScore;

		//winning the game
	} else if (userGuess === computerNum) {
		message("Current number!🎉🎉");
		document.querySelector(".number").textContent = computerNum;
		document.querySelector("body").style.backgroundColor = "#5fb87e";
		document.querySelector(".number").style.width = "30rem";

		if (currentScore > highestScore) {
			highestScore = currentScore;
			document.querySelector(".highscore").textContent = highestScore;
		}
	}
});

//TODO: AGAIN BUTTON

document.querySelector(".again").addEventListener("click", function () {
	// setting an event to the again batton
	currentScore = 30;
	computerNum = Math.floor(Math.random() * 20) + 1; //random number
	message("Start guessing...");
	// document.querySelector(".message").textContent = "start guessing...";
	document.querySelector(".score").textContent = currentScore;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});
