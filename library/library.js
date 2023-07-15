function issueCard(name, age, numBooksCheckedOut) {
  var cardObj = {
    name: name,
    age: age,
    numBooksCheckedOut: numBooksCheckedOut,
    isChild: undefined,
  };
  if (numBooksCheckedOut === undefined) {
    cardObj.numBooksCheckedOut = 0;
  }
  if (age < 12) {
    cardObj.isChild = true;
  } else {
    cardObj.isChild = false;
  }
  return cardObj;
}

function searchByAuthor(collectionArr, authorName) {
  var searchResultsArr = [];
  for (var i = 0; i < collectionArr.length; i++) {
    if (collectionArr[i].author === authorName) {
      searchResultsArr.push(collectionArr[i]);
    }
  }
  if (searchResultsArr.length === 0) {
    return `No book found for search criteria`;
  }
  return searchResultsArr;
}

module.exports = { issueCard, searchByAuthor };
