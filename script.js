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
                const distance = data.rows[0].elements[0].distance.text;
                // const duration = data.rows[0].elements[0].duration.text;
                let CO2;
                if (mode === "car") {
                    CO2 = distance * (8.89 / 25); // CO2 is in KG
                } else if (mode === "train") {
                    CO2 = distance * 0.14;
                } else if (mode === "bus") {
                    CO2 = distance * 0.28;
                } else if (mode === "walking" || mode === "biking") {
                    CO2 = 0;
                }
                CO2Text = CO2.toString()
                document.getElementById("distanceResult").innerHTML = `<p>Distance: ${distance}</p>`;
                document.getElementById("co2Result").innerHTML = `<p>Your trip will produce " + ${CO2Text} + " KG of CO2.</p>`;
            } else {
                document.getElementById("distanceResult").innerHTML = `<p>Error: ${data.error_message}</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            document.getElementById("distanceResult").innerHTML = "<p>Error fetching data. Please try again later.</p>";
        });
}
