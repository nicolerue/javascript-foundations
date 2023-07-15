module.exports = {
  createHobbit,
  celebrateBirthday,
  // getRing,
  // meetPeople,
  // findFriends
};

function createHobbit(hobbitName, age) {
  var hobbitObj = {
    name: `${hobbitName}`,
    age: `${age}`,
  };
  if (age === undefined) {
    hobbitObj.age = 0;
  }
  if (hobbitName === undefined) {
    hobbitObj.name = `unknown`;
  }
  return hobbitObj;
}

function celebrateBirthday(hobbitObj) {
  hobbitObj.age++;
  if (hobbitObj.age < 32) {
    hobbitObj.isAdult = false;
  } else {
    hobbitObj.isAdult = true;
  }
  return hobbitObj;
}
