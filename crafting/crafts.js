function createMaterial(name, unit, costPerUnit) {
  var materialObj = {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit,
  };
  return materialObj;
}

function calculateMaterialCost(materialObj, quantity) {
  return `${quantity} ${materialObj.unit}s of ${materialObj.name} costs $${
    quantity * materialObj.costPerUnit
  }.`;
}

function createSupplyCloset(arrayMaterialObj) {
  if (arrayMaterialObj === undefined) {
    var emptyClosetObj = {
      supplies: [],
    };
    return emptyClosetObj;
  } else {
    var supplyClosetObj = {
      supplies: [],
    };
    for (var i = 0; i < arrayMaterialObj.length; i++) {
      supplyClosetObj.supplies.push(arrayMaterialObj[i].name);
    }
    return supplyClosetObj;
  }
}

function addSupply(supplyClosetObj, supplies) {
  var updatedSupplyObj = {
    supplies: [],
  };
  for (var i = 0; i < supplyClosetObj.supplies.length; i++) {
    if (supplyClosetObj.supplies[i] === supplies.name) {
      return `You already have ${supplies.name} in your closet!`;
    } else {
      updatedSupplyObj.supplies.push(supplyClosetObj.supplies[i]);
    }
  }
  updatedSupplyObj.supplies.push(supplies.name);

  return updatedSupplyObj.supplies;
}

function createNewProject(materialsNeededArr, status) {
  var newProjectObj = {
    materialsNeeded: materialsNeededArr,
    status: status,
  };
  if (status === undefined) {
    newProjectObj.status = "not started";
  }
  return newProjectObj;
}

// function compareMaterials(materialsNeededObj, suppliesHaveObj) {
//   // console.log(materialsNeededObj.materialsNeeded.length);

//   for (var i = 0; i < suppliesHaveObj.supplies.length; i++) {
//     // console.log(materialsNeededObj.materialsNeeded[i].name);
//     // console.log(suppliesHaveObj.supplies[i]);
//     var matchedMaterialsArr = [];
//     if (
//       materialsNeededObj.materialsNeeded[i].name.includes(
//         suppliesHaveObj.supplies[i]
//       )
//     ) {
//       matchedMaterialsArr.push(materialsNeededObj.materialsNeeded[i].name);
//     }
//   }
//   if ((matchedMaterialsArr.length = suppliesHaveObj.supplies.length)) {
//     return "Yay! You can start this project!";
//   }
// }

function compareMaterials(materialsNeededObj, suppliesHaveObj) {
  // console.log(materialsNeededObj.materialsNeeded.length);

  for (var i = 0; i < suppliesHaveObj.supplies.length; i++) {
    // console.log(materialsNeededObj.materialsNeeded[i].name);
    // console.log(suppliesHaveObj.supplies[i]);
    var matchedMaterialsArr = [];
    if (
      materialsNeededObj.materialsNeeded[i].name.includes(
        suppliesHaveObj.supplies[i]
      )
    ) {
      return "Yay! You can start this project!";
    } else {
      return "Oh no! You need to go shopping before you can start this project!";
    }
  }
}
module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials,
};
