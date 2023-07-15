function createMeal(name, specialRequests, tableNum) {
  var mealObj = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNum,
    complete: false,
  };
  return mealObj;
}

function getMade(mealObj) {
  if ((mealObj.complete = true)) {
  }
  return mealObj;
}

function announceMeal(mealObj) {
  if (mealObj.complete === true) {
    return `Order up - ${mealObj.name} for table ${mealObj.tableNumber}!`;
  } else {
    return `This ${mealObj.name} is not completed yet`;
  }
}

function createOrder(objTableOrder) {
  var orderObj = {
    tableNumber: objTableOrder.name,
    meals: objTableOrder.meals,
    completedMeals: [],
  };
  return orderObj;
}

function cookMeal(orderObj, meal) {
  if (orderObj.tableNumber === meal.tableNumber)
    orderObj.completedMeals.push(meal.name);
  return orderObj;
}

function listOrders(order) {
  var orderArr = [];
  for (i = 0; i < order.meals.length; i++) {
    orderArr.push(order.meals[i].name);
  }
  return orderArr;
}

function listSpecialRequests(order) {
  console.log(order);
  var specialRequestsArr = [];
  for (i = 0; i < order.meals.length; i++) {
    specialRequestsArr.push(order.meals[i].specialRequests);
  }
  console.log(specialRequestsArr);
}

function listSpecialRequests(order) {
  var specialRequestsArr = [];
  for (i = 0; i < order.meals.length; i++) {
    specialRequestsArr = specialRequestsArr.concat(
      order.meals[i].specialRequests
    );
  }
  return specialRequestsArr;
}

module.exports = {
  createMeal,
  getMade,
  announceMeal,
  createOrder,
  cookMeal,
  listOrders,
  listSpecialRequests,
};
