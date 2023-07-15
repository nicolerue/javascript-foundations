function createPlayer(name, age, moveset) {
  var gameObj = {
    name: name,
    age: age,
    moveset: moveset,
  };
  return gameObj;
}

function createLevel(levelName, playerObj) {
  var gameLevelObj = {
    name: levelName,
    players: playerObj,
    coins: 0,
    lives: 3,
  };
  return gameLevelObj;
}

function findCoins(levelObj, collectedCoins) {
  levelObj.coins += collectedCoins;
  if (levelObj.coins === 100) {
    levelObj.lives += 1;
  }
  return levelObj;
}

// I need to return the object, but I also need to print if a player is defeated. But can't do two things with the one return keyword?
function defeatPlayer(levelObj) {
  console.log(levelObj);
  levelObj.lives -= 1;
  if (levelObj.lives === 0) {
    return "GAME OVER";
  }

  return levelObj;
}

module.exports = {
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer,
};
