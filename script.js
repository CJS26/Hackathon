var key = "AIzaSyCTjZD6eYxpkpVNu62N6LnvxJ2KW0uFwTI"
var modeot = input("Please input your mode of transportation: Car, Train, Bus, or Plane.: ")
data = api.get()
let distance = 5; 

let modeot = prompt("Please input your mode of transportation: Car, Train, Bus, or Plane:");

let CO2;

if (modeot.toLowerCase() === "car") {
    CO2 = distance * (8.89 / 25); // CO2 is in KG
} else if (modeot.toLowerCase() === "train") {
    CO2 = distance * 0.14;
} else if (modeot.toLowerCase() === "bus") {
    CO2 = distance * 0.28;
} else if (modeot.toLowerCase() === "plane") {
    CO2 = distance * 0.2;
}

alert("Your trip will produce " + CO2.toFixed(2) + " KG of CO2.");
