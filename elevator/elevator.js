function createElevator(buildingName, floors, currentFloor, peopleArr) {
  var elevatorObj = {
    building: buildingName,
    floors: floors,
    currentFloor: currentFloor,
    passengers: peopleArr,
  };
  return elevatorObj;
}

function changeFloors(elevatorObj, changedFloor) {
  if (changedFloor > elevatorObj.floors) {
    return `Floor ${changedFloor} does not exist!`;
  } else if (elevatorObj.currentFloor === changedFloor) {
    return `You're already on floor ${changedFloor}!`;
  } else {
    return `Taking you to floor ${changedFloor}!`;
  }
}

function dropOffPassenger(elevatorObj, name) {
  for (var i = 0; i < elevatorObj.passengers.length; i++) {
    if (elevatorObj.passengers[i] === name) {
      elevatorObj.passengers.splice(
        elevatorObj.passengers.indexOf(elevatorObj.passengers[i]),
        1
      );
    }
  }
  return elevatorObj.passengers;
}

module.exports = { createElevator, changeFloors, dropOffPassenger };
