function calculateDistance() {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const mode = document.getElementById("mode").value;
    const apiKey = "AIzaSyCTjZD6eYxpkpVNu62N6LnvxJ2KW0uFwTI"; // Replace with your Google Maps API key
    const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=${mode}&key=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                const kilometers = data.rows[0].elements[0].distance.text.slice(0,data.rows[0].elements[0].distance.text.indexOf('km'));
                let distance = kilometers * 0.6213711922
                // const duration = data.rows[0].elements[0].duration.text;
                let CO2;
                if (mode === "driving") {
                    CO2 = distance * (8.89 / 25); // CO2 is in KG
                } else if (mode === "transit") {
                    CO2 = distance * 0.14;
                } else if (mode === "walking" || mode === "bicycling") {
                    CO2 = 0;
                }
                daysNeededForOneTree = (CO2*16.77); 
                document.getElementById("distanceResult").innerHTML = `<p>Distance: ${distance.toFixed(2)} miles.</p>`;
                document.getElementById("").innerHTML = `<p>Your trip will take 1 tree ${daysNeededForOneTree.toFixed(2)} to clear the CO2.</p>`;
        document.getElementById("co2Result").innerHTML = `<p>Your trip will produce an estimated ${CO2.toFixed(2)} KG of CO2.</p>`;
            } else {
                document.getElementById("distanceResult").innerHTML = `<p>Error: ${data.error_message}</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            document.getElementById("distanceResult").innerHTML = "<p>Error fetching data. Please try again later.</p>";
        });
}
