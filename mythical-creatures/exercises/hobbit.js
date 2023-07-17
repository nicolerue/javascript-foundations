function createHobbit(name = "unknown", age = 0) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  };
  return hobbit;
}
function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  if (hobbit.age > 32 && hobbit.age <= 100) {
    hobbit.isAdult = true;
    hobbit.isOld = false;
  } else if (hobbit.age > 100) {
    hobbit.isOld = true;
    hobbit.isAdult = false;
  } else {
    hobbit.isAdult = false;
    hobbit.isOld = false;
  }
  return hobbit;
}

function getRing(hobbitObj) {
  if (hobbitObj.name === "Frodo") {
    return `Here is the ring!`;
  } else {
    return `You can't have it!`;
  }
}

function meetPeople(hobbitObj, friendArrObj) {
  for (var i = 0; i < friendArrObj.length; i++) {
    hobbitObj.acquaintances.push(friendArrObj[i]);
  }
  return hobbitObj;
}

function findFriends(hobbitObj) {
  var friendsArr = [];
  for (var i = 0; i < hobbitObj.acquaintances.length; i++) {
    if (hobbitObj.acquaintances[i].relationship === "friend") {
      friendsArr.push(hobbitObj.acquaintances[i].name);
    }
  }
  return friendsArr;
}
module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople,
  findFriends,
};

// function createHobbit(hobbitName) {
//   var hobbitObj = {
//     name: `${hobbitName}`,
//     age: `${age}`,
//   };
//   if (age === undefined) {
//     hobbitObj.age = 0;
//   }
//   if (hobbitName === undefined) {
//     hobbitObj.name = `unknown`;
//   }
//   return hobbitObj;
// }

// function celebrateBirthday(hobbitObj) {
//   hobbitObj.age++;
//   if (hobbitObj.age < 32) {
//     hobbitObj.isAdult = false;
//   } else {
//     hobbitObj.isAdult = true;
//   }
//   return hobbitObj;
// }
