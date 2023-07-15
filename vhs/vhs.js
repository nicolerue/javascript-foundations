function createTape(title, readyToPlay = false) {
  var tapeObject = {
    title: title,
    readyToPlay: readyToPlay,
  };
  return tapeObject;
}

function reset(tapeObj) {
  if ((tapeObj.readyToPlay = true)) {
    return tapeObj;
  }
}

function createCollection(tapeObj, tapeObj2, tapeObj3) {
  if (
    tapeObj === undefined &&
    tapeObj2 === undefined &&
    tapeObj3 === undefined
  ) {
    return `Your collection is empty.`;
  }
  var collectionArr = [];
  collectionArr.push(tapeObj, tapeObj2, tapeObj3);
  return collectionArr;
}

function previewCollection(collectionArr) {
  var previewArr = [];
  for (var i = 0; i < collectionArr.length; i++) {
    previewArr.push(collectionArr[i].title);
  }
  return previewArr;
}
module.exports = { createTape, reset, createCollection, previewCollection };
