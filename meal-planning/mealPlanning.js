function createMeal(mealType, calories) {
  var mealObj = {
    type: mealType,
    calorieGoal: calories,
    dishes: [],
  };
  return mealObj;
}

function addDish(mealObj, dishObj) {
  if (dishObj.calories <= mealObj.calorieGoal) {
    mealObj.dishes.push(dishObj);
    mealObj.calorieGoal = mealObj.calorieGoal - dishObj.calories;
  }

  return mealObj;
}

function calculateCalories(mealObj) {
  var sumCal = 0;
  for (var i = 0; i < mealObj.dishes.length; i++) {
    sumCal += mealObj.dishes[i].calories;
  }
  return `${mealObj.type} has a total of ${sumCal} calories.`;
}
module.exports = { createMeal, addDish, calculateCalories };
