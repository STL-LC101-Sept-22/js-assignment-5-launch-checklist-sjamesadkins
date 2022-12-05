// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let target = document.getElementById("missionTarget").innerHTML = (`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `);
}


function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else if (isNaN(numberInput) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelUpdate = document.getElementById("fuelStatus");
    let cargoUpdate = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required for submission!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Valid info is required in fields for submission!");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = (`Pilot ${pilot} is ready for launch.`);
        copilotStatus.innerHTML = (`Pilot ${copilot} is ready for launch.`);
        let launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelUpdate.innerHTML = ("Fuel level too low for launch. ARE YOU CRAZY!?");
            cargoUpdate.innerHTML = ("Cargo mass too heavy for launch. Like a lead zeppelin.");
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = "#FF0000";
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelUpdate.innerHTML = ("Fuel level too low for launch. You have death wish?");
            cargoUpdate.innerHTML = ("Cargo mass low enough for launch.");
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = "#FF0000";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelUpdate.innerHTML = ("Fuel level high enough for launch.");
            cargoUpdate.innerHTML = ("Cargo mass too heavy for launch. We ain't goin' nowhere.");
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = "#FF0000";
        } else {
            fuelUpdate.innerHTML = ("Fuel level high enough for launch.");
            cargoUpdate.innerHTML = ("Cargo mass low enough for launch.");
            launchStatus.innerHTML = "Shuttle is ready for launch!";
            launchStatus.style.color = "#008000";
        };
    };
};

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    }
    );
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random()*planets.length);
    return planets[randomPlanet];
}

//why do the exports work separate below and why don't I need import statements in the other js file?

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

