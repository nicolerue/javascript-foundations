function createItemStock(name, quantity, price) {
  var itemObj = {
    name: name,
    quantity: quantity,
    price: price,
  };
  if (name === undefined) {
    itemObj.name = `unknown`;
  }
  if (quantity === undefined) {
    itemObj.quantity = 0;
  }
  if (price === undefined) {
    itemObj.price = 1;
  }
  return itemObj;
}

function makePurchase(itemObj, money) {
  if (money < itemObj.price) {
    return `Sorry, you need at least $${itemObj.price} to make that purchase`;
  } else if (itemObj.quantity === 0) {
    return `Sorry, there are none left`;
  } else {
    return `Here are your ${itemObj.name}`;
  }
}

function collectChange(looseChange) {
  var sum = 0;
  for (var i = 0; i < looseChange.length; i++) {
    sum += looseChange[i];
  }
  return sum;
}
module.exports = { createItemStock, makePurchase, collectChange };
