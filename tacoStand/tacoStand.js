function createIngredient(name, price) {
  var ingredientObj = {
    name: name,
    price: price,
  };
  if (price === undefined) {
    ingredientObj.price = 0.0;
  }
  if (name === undefined) {
    ingredientObj.name = "unknown";
  }
  return ingredientObj;
}

function createTaco(name, ingredientObj) {
  var tacoObj = {
    name: name,
    ingredients: ingredientObj,
  };
  if (name === undefined) {
    tacoObj.name = "custom";
  }
  if (ingredientObj === undefined) {
    tacoObj.ingredients = [];
  }
  return tacoObj;
}

function addIngredientToTaco(tacoObj, ingredient) {
  if (ingredient === undefined) {
    return tacoObj;
  } else {
    tacoObj.ingredients.push(ingredient);
    return tacoObj;
  }
}

function calculatePrice(tacoObj) {
  var sum = 0;
  for (var i = 0; i < tacoObj.ingredients.length; i++) {
    sum += tacoObj.ingredients[i].price;
  }
  return sum;
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice,
};
