document.addEventListener("DOMContentLoaded", function() {
    const createEventButton = document.getElementById("create-event");
    const modal = document.getElementById("create-event-modal");
    const closeButton = document.getElementsByClassName("close")[0];
    const eventForm = document.getElementById("event-form");
    const eventsContainer = document.getElementById("events-container");

    createEventButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    eventForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("event-title").value;
        const description = document.getElementById("event-description").value;
        const location = document.getElementById("event-location").value;
        const time = document.getElementById("event-time").value;

        const eventData = {
            title: title,
            description: description,
            location: location,
            time: time,
            participants: 0 // Initially set participants to 0
        };

        // Store event data (you can use localStorage, server-side database, etc.)
        // For simplicity, we'll just log the event data to console
        console.log(eventData);

        // Close modal after submitting event
        modal.style.display = "none";

        // Add event card to the main page
        addEventCard(eventData);
    });

    function addEventCard(eventData) {
        const card = document.createElement("div");
        card.classList.add("event-card");
        card.innerHTML = `
            <h3>${eventData.title}</h3>
            <p>${eventData.description}</p>
            <p><strong>Location:</strong> ${eventData.location}</p>
            <p><strong>Time:</strong> ${eventData.time}</p>
            <p><strong>Participants:</strong> <span id="participants">${eventData.participants}</span></p>
            <button class="signup-button">Sign Up</button>
        `;
        eventsContainer.appendChild(card);
    }

    // You can add functionality to increment participants when signup button is clicked
    eventsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("signup-button")) {
            const participantsElement = event.target.previousElementSibling.querySelector("#participants");
            let participants = parseInt(participantsElement.textContent);
            participants++;
            participantsElement.textContent = participants;
        }
    });
});
