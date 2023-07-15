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
  }
}

function drink(dragonObj) {
  dragonObj.ouncesDrank += 10;
  return dragonObj;
}

module.exports = {
  createVampire,
  drink,
  // findBatLovers,
  encounterDeliciousVictim,
  // inquirePlace
};
