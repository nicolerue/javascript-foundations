function createBirthday(name, month, day) {
  var birthdayObj = {
    name: name,
    month: month,
    day: day,
  };
  return birthdayObj;
}

function celebrateBirthday(birthdayObj) {
  var birthdayPerson = birthdayObj.name;
  var birthdayMonth = birthdayObj.month;
  var birthdayDay = birthdayObj.day;

  return `Today is ${birthdayMonth}/${birthdayDay}! Happy birthday, ${birthdayPerson}!`;
}

// look at the array
// loop through the array
// each iteration is an object
// in the object, look at the month
// if the month is (2)Feb, count how many and return
// if the month is (5)May, count how many and return
// if the month is (12)Dec, count how many and return

function countBirthdays(arrayBirthdays, month) {
  let counter = 0;
  console.log(arrayBirthdays);
  console.log(month);
  for (var i = 0; i < arrayBirthdays.length; i++) {
    if (arrayBirthdays[i].month === month) {
      counter += 1;
    }
  }
  return counter;
}

// function countBirthdays(arrayBirthdays) {
//   let counterFeb = 0;
//   let counterMay = 0;
//   let counterDec = 0;
//   for (var i = 0; i < arrayBirthdays.length; i++) {
//     if (arrayBirthdays[i].month === 2) {
//       var febBdays = (counterFeb += 1);
//       return febBdays;
//     } else if (arrayBirthdays[i].month === 5) {
//       var mayBdays = (counterMay += 1);
//       return mayBdays;
//     } else {
//       var decBdays = counterDec;
//       return decBdays;
//     }
//   }
// }
module.exports = { createBirthday, celebrateBirthday, countBirthdays };
