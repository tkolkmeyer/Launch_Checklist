


window.addEventListener("load", function() {

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

         response.json().then(function(json) {

            let div = document.getElementById('missionTarget');

            let x = Math.floor(Math.random() * 5 + 1);

            div.innerHTML =

            `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[x].name}</li>
               <li>Diameter: ${json[x].diameter}</li>
               <li>Star: ${json[x].star}</li>
               <li>Distance from Earth: ${json[x].distance}</li>
               <li>Number of Moons: ${json[x].moons}</li>
            </ol>
            <img src="${json[x].image}">
            
            `;
         });
      });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass");


      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      };

      if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Fuel level and cargo mass must be numbers.");
      };

      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         alert("Pilot and co-pilot names must be text.");
      };

      
      document.getElementById('pilotStatus').innerHTML=`Pilot ${pilotName.value} is ready for launch`;
      document.getElementById('copilotStatus').innerHTML=`Pilot ${copilotName.value} is ready for launch`;

      if (Number(fuelLevel.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById('fuelStatus').innerHTML='Fuel level too low for launch';
         document.getElementById('launchStatus').innerHTML='Shuttle Not Ready for Launch';
         document.getElementById('launchStatus').style.color = "red";
      }; 
      
      if (Number(cargoMass.value) > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById('cargoStatus').innerHTML='Cargo mass too high for launch';
         document.getElementById('launchStatus').innerHTML='Shuttle Not Ready for Launch';
         document.getElementById('launchStatus').style.color = "red";
      };
      
      if (Number(fuelLevel.value) > 10000 && Number(cargoMass.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "hidden";
         document.getElementById('launchStatus').innerHTML='Shuttle Ready for Launch';
         document.getElementById('launchStatus').style.color = "green";
      };

      event.preventDefault();

   });
   
});


