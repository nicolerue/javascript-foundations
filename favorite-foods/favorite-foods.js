function createFavoriteFood(obj) {
  var foodObj = {
    name: obj.dish,
    ingredients: obj.ingredients,
    isSpicy: obj.isSpicy,
    timesOrdered: 0,
  };
  return foodObj;
}

function commentOnSpiciness(foodObj) {
  if (foodObj.isSpicy === true) {
    return `Wow, this ${foodObj.name} is so spicy!`;
  } else {
    return `Phew, this ${foodObj.name} is not very spicy.`;
  }
}

function orderFood(dishObj) {
  dishObj.timesOrdered++;
  return dishObj;
}

function createShoppingList(arr) {
  var shoppingListArr = [];

  for (var i = 0; i < arr.length; i++) {
    shoppingListArr = shoppingListArr.concat(arr[i].ingredients);
  }
  return shoppingListArr;
}

module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList,
};
