
// to guess a random number bweween 19 and 120
var targetNumber = Math.floor((Math.random() * 120) + 19);
$("#number-to-guess").text(targetNumber);

var counter = 0;

var increment = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];

for (var i=0; i < 4; i++) {
	var crystalPicture = $("<img>");
	crystalPicture.addClass("picture");
	crystalPicture.attr("src", "https://i.pinimg.com/originals/4c/ba/b3/4cbab33f7c850a4a28d7055e1eb23e21.jpg");
	crystalPicture.attr("data-value", increment[i]);
	$("#crystal").append(crystalPicture);
}

$(".picture").on("click",function() {
	var value = ($(this).attr("data-value"));
	value = parseInt(value);
	counter += value;
	$("#score").text(counter);

	if (counter === targetNumber) {
	$("#res").text("  Yea!  You win!!");
	} 
	else if (counter >= targetNumber) {
	$("#res").text(" You exceded the number. You lose!");
	}
});

// Things not complete

// need to total wins and total losses
// new game? create buttons - yes no
// on yes, reset counter to 0, select new random number
// on no exit game
