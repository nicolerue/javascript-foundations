// problem: i want to return two things :( Can't do that!

function createVampire(vampName, pet) {
  var vampObject = {
    name: `${vampName}`,
    pet: `${pet}`,
    thirsty: true,
    ouncesDrank: 0,
  };
  if (pet === undefined) {
    vampObject.pet = "bat";
  }
  return vampObject;
}

function encounterDeliciousVictim(vampObj) {
  if (vampObj.thirsty === true) {
    return `I WANT TO SUCK YOUR BLOOD!`;
  } else {
    return `No thanks, I am too full.`;
  }
}

function drink(dragonObj) {
  dragonObj.ouncesDrank += 10;
  if (dragonObj.ouncesDrank >= 50) {
    dragonObj.thirsty = false;
    dragonObj.ouncesDrank = 50;
  }
  return dragonObj;
}

function inquirePlace(locationsArr, location) {
  for (var i = 0; i < locationsArr.length; i++) {
    if (locationsArr[i] === location) {
      return `Yes, I have spent some time in ${location}.`;
    }
  }
  return `No, I have never been to ${location}.`;
}

function findBatLovers(arrayOfObj) {
  var batLoversArr = [];
  for (var i = 0; i < arrayOfObj.length; i++) {
    if (arrayOfObj[i].pet === "bat") {
      batLoversArr.push(arrayOfObj[i].name);
    }
  }
  return batLoversArr;
}

module.exports = {
  createVampire,
  drink,
  findBatLovers,
  encounterDeliciousVictim,
  inquirePlace,
};
