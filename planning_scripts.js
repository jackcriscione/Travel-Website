// Trip Budget Calculator
function calculateBudget(){
	let days = Number(document.getElementById("days").value);
	let dailyBudget = Number(document.getElementById("dailyBudget").value);
	let total = days * dailyBudget;

	document.getElementById("budgetResult").innerHTML =
		"Your estimated trip cost is $" + total.toFixed(2);
}

// Destination Quiz
function findDestination(){
	let tripType = document.getElementById("tripType").value;
	chooseDestination(tripType);
}

function chooseDestination(tripType){
	let destination;
	if(tripType == "beach"){
		destination = "Bermuda";
	}
	else if(tripType == "history"){
		destination = "Greece";
	}
	else if(tripType == "city"){
		destination = "Spain";
	}
	else{
		destination = "New York State";
	}

	document.getElementById("quizResult").innerHTML =
		"You should visit " + destination + "!";
}

// Temperature Converter
function convertTemperature(){
	let temperature =
		Number(document.getElementById("temperature").value);
	let conversion =
		document.getElementById("conversion").value;
	let result;
	if(conversion == "CtoF"){
		result = (temperature * 9 / 5) + 32;
		
		document.getElementById("temperatureResult").innerHTML =
			temperature + "°C = " + result.toFixed(1) + "°F";
	}
	else{
		result = (temperature - 32) * 5 / 9;

		document.getElementById("temperatureResult").innerHTML =
			temperature + "°F = " + result.toFixed(1) + "°C";
    }
}

// Connect buttons to functions
document.getElementById("budgetButton")
    .addEventListener("click", calculateBudget);

document.getElementById("quizButton")
    .addEventListener("click", findDestination);

document.getElementById("temperatureButton")
    .addEventListener("click", convertTemperature);