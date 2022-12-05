window.addEventListener("load", function() {

   let listedPlanets;
   // *CHECK Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selectedPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
  });
   
   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
    event.preventDefault();
    //pilot
    let pilotIn = document.querySelector("input[name=pilotName");
    // console.log(pilotIn.value);
    let pilot = pilotIn.value;
    //copilot
    let copilotIn = document.querySelector("input[name=copilotName");
    // console.log(copilotIn.value);
    let copilot = copilotIn.value;
    //fuel
    let fuelQ = document.querySelector("input[name=fuelLevel");
    // console.log(fuelQ.value);
    let fuelLevel = fuelQ.value;
    //cargo
    let cargoQ = document.querySelector("input[name=cargoMass");
    // console.log(cargoQ.value);
    let cargoLevel = cargoQ.value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   })
});