function createAirport(name, airlinesArr, availGates) {
  var airportObj = {
    name: name,
    airlines: airlinesArr,
    availableGates: availGates,
  };
  return airportObj;
}

function welcomeGuests(airportObj) {
  return `Welcome to ${airportObj.name}!`;
}

//san diego's availablegates. I need this value

function getSDValue(airportObj) {
  console.log(airportObj);
  return airportObj.availableGates;
}

getSDValue(
  createAirport("San Diego International Airport", ["Frontier", "American"], 48)
);
//If I didn't return anything in the createAirpot function,, the variable of airport would return undefined. and then the asser.equal would be trying to access something that is undefined.
// function createAirport(name, airlines, availGates) {
//   var airportObj = {
//     name: `${name}`,
//     airlines: airlines,
//     availableGates: availGates,
//   };
//   return airportObj;
// }

// function welcomeGuests(airportObj) {
//   return `Welcome to ${airportObj.name}!`;
// }

// function landPlanes(landedPlanesObj, landedPlanes) {
//   var availGates = landedPlanesObj.availableGates - landedPlanes;
//   landedPlanesObj.availableGates = availGates;
//   if (availGates < 0) {
//     landedPlanesObj.availableGates = 0;
//   }
//   if (availGates > 0) {
//     landedPlanesObj.message = `Success! Current availability is ${availGates}.`;
//   } else {
//     landedPlanesObj.message = `Oh no! Not enough gates available. Current overflow is ${Math.abs(
//       availGates
//     )}.`;
//   }
//   return landedPlanesObj;
// }

// function checkAirlineLocations(array, nameAirline) {
//   var destinationArr = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].airlines.includes(nameAirline)) {
//       destinationArr.push(array[i].name);
//     }
//   }
//   return destinationArr;
// }
module.exports = {
  createAirport,
  welcomeGuests,
  // landPlanes,
  // checkAirlineLocations,
};
