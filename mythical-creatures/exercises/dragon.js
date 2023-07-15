// create a function
// return an object
// parameter - name

function createDragon(dragonName, dragonRider, temperment) {
  var dragonObj = {
    name: `${dragonName}`,
    rider: `${dragonRider}`,
    temperment: `${temperment}`,
    timesEaten: 0,
    hungry: true,
  };
  return dragonObj;
}

function greetRider(dragonObj) {
  var greeting = `Hi, ${dragonObj.rider}!`;
  return greeting;
}

// doesn't work yet :( Error is in line 85 in the test file, can't read undefined
function eat(dragonObj) {
  // console.log(dragonObj);
  dragonObj.timesEaten += 1;
  // console.log(dragonObj);
  if (dragonObj.timesEaten >= 3) {
    dragonObj.hungry = false;
  } else {
    dragonObj.hungry = true;
  }
  return dragonObj;
}

function findFireBreathers(dragonArr) {
  var fireArr = [];
  for (var i = 0; i < dragonArr.length; i++) {
    if (dragonArr[i].temperment === "aggressive") {
      fireArr.push(dragonArr[i]);
    }
  }
  return fireArr;
}
//anytime we are assigning a variable to a function call, something needs to be returned, or the variable will always be undefined.

//classmate's solution
//questions, why it doensn't work with an if else statement

module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers,
};
