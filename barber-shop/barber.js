function createBarber(name, earnings, haircuts) {
  var barberObj = {
    name: name,
    earnings: earnings,
    haircuts: haircuts,
  };

  if (haircuts === undefined) {
    barberObj.haircuts = [];
  }
  if (earnings === undefined) {
    barberObj.earnings = 0;
  }
  return barberObj;
}
function giveCompliment(haircutObj) {
  return `This ${haircutObj.style} looks great!`;
}
function cutHair(nameObj, cutObj) {
  nameObj.haircuts.push(cutObj);
  nameObj.earnings += cutObj.price;
  return nameObj;
}
function listStyles(nameObj, style) {
  var stylesArr = [];
  for (var i = 0; i < nameObj.haircuts.length; i++) {
    if (nameObj.haircuts[i].hairLength === style) {
      stylesArr.push(nameObj.haircuts[i].style);
    }
  }
  return stylesArr;
}

module.exports = { createBarber, giveCompliment, cutHair, listStyles };
