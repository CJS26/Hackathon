var key = "AIzaSyCTjZD6eYxpkpVNu62N6LnvxJ2KW0uFwTI"

let start = prompt("Enter your origin (City, State):")
let end = prompt("Enter your destination (City, State):")
let modeot = prompt("Please input your mode of transportation: driving, walking, bicycling, or transit:");

const origin = "New+York,NY"; // URL-encoded string of the origin address
const destination = "Los+Angeles,CA"; // URL-encoded string of the destination address
const mode = 'driving'; // Mode of transportation: driving, walking, bicycling, transit

// Construct the API request URL
const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&key=${apiKey}`;

// Use Fetch API to make the request
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.routes.length > 0) {
            const route = data.routes[0]; // Assuming the first route is the one you want
            const leg = route.legs[0]; // A route can have multiple legs if there are waypoints
            const distance = leg.distance.text; // Distance in human-readable format (e.g., "2,879 mi")
            document.getElementById("distance").innerText = distance;
        } else {
            document.getElementById("distance").innerText = "No routes found.";
        }
    })
    .catch(error => console.error("Error fetching data: ", error));

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
