function Game(index, round){
	var sameColor = false;

		//play game

		this.index = index;
		this.index = 0;
		this.round = document.createElement("p");
		this.roundNum = document.createTextNode("You are on round: " + this.index);
		this.round.appendChild(this.roundNum);
		document.body.appendChild(this.round);
		var answer = new AnswerBox;
		var player = new PlayerBox;


		document.getElementById("player1").addEventListener("click", function(){
			player.boxes[0].style.backgroundColor = player.playerBoxes[Math.floor(Math.random() * 3) + 0];
			console.log("Color Change!");
		});
		document.getElementById("player2").addEventListener("click", function(){
			player.boxes[1].style.backgroundColor = player.playerBoxes[Math.floor(Math.random() * 3) + 0];
			console.log("Color Change!");
		});
		document.getElementById("player3").addEventListener("click", function(){
			player.boxes[2].style.backgroundColor = player.playerBoxes[Math.floor(Math.random() * 3) + 0];
			console.log("Color Change!");
		});


	this.index = index;
	this.index = 0;
}
function PlayerBox(){
	this.playerBoxes = ["red", "green", "blue"];
	this.boxes = [];

	for (var i = 1; i < 4; i++){
		this.box = document.createElement("div");
		this.box.style.height = "100px";
		this.box.style.width = "100px";
		this.box.style.margin = "50px"
		this.box.style.float = "left";
		this.box.style.padding = "25px";
		var playerText = document.createTextNode("This is an player box!");
		this.box.appendChild(playerText);
		this.box.id = "player" + i;
		this.box.style.backgroundColor = this.playerBoxes[Math.floor(Math.random() * 3) + 0];
		var that = this;
		//this.box.addEventListener("click", function(){
			//that.box.style.backgroundColor = that.playerBoxes[Math.floor(Math.random() * 3) + 0];

		this.boxes.push(this.box);
		document.body.appendChild(this.box);
		console.log(this.boxes);
		console.log("hi");
};

}
function AnswerBox(answerBoxes, box2){

	this.answerBoxes = answerBoxes;
	this.answerBoxes = ["red", "green", "blue"];
	this.box2 = box2


	for (var i = 1; i < 4; i++){
		this.box2 = document.createElement("div");
		this.box2.style.height = "100px";
		this.box2.style.width = "100px";
		this.box2.style.padding = "25px";
		this.box2.style.margin = "50px"
		this.box2.style.float = "left";
		this.box2.id = "answer" + i;
		var answerText = document.createTextNode("This is an answer box!");
		this.box2.appendChild(answerText);
		this.box2.style.backgroundColor = this.answerBoxes[Math.floor(Math.random() * 3) + 0];
		var that = this;

		document.body.appendChild(this.box2);

}
}

Game.prototype.check = function(){

	//var array = [1,2,3,4,5];
	//this.index = this.index + 1;
	//if(this.index >= 5){
		//this.index = 0;
	//}

	//console.log(array[this.index]);
	if(document.getElementById("answer1").style.backgroundColor == document.getElementById("player1").style.backgroundColor && document.getElementById("answer2").style.backgroundColor == document.getElementById("player2").style.backgroundColor && document.getElementById("answer3").style.backgroundColor == document.getElementById("player3").style.backgroundColor){
		console.log("The round would increase here if things worked");
		this.index = this.index + 1;
		this.round.innerHTML = "You are on round: " + this.index;

		console.log(this.index);
		if(this.index == 3){
			if (confirm("Press OK to play again, cancel to quit the game (hitting cancel will close the tab)")){
				alert("The game will continue!");
				location.reload();
			}	else {
				alert("Game over!");
				window.close();
			}
		}
}
}
//var answer = new AnswerBox;
//var player = new PlayerBox;
var game = new Game;
