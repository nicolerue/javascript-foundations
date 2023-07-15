function createCollection(name, desc, tracks = []) {
  var collectionObj = {
    name: name,
    description: desc,
    tracks: tracks,
  };
  return collectionObj;
}

function createTrack(title, artist, duration) {
  var trackObj = {
    title: title,
    artist: artist,
    duration: duration,
  };
  if (title === undefined) {
    trackObj.title = "unknown";
  }
  if (artist === undefined) {
    trackObj.artist = "unknown";
  }
  if (duration === undefined) {
    trackObj.duration = 0;
  }
  return trackObj;
}

function reviewTrack(trackObj) {
  if (trackObj.artist === "Red Hot Chili Peppers") {
    return `The song ${trackObj.title} rules!`;
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`;
  }
}

function addTrack(collectionObj, trackObj) {
  collectionObj.tracks.push(trackObj);
  return collectionObj;
}

function getTotalDuration(collectionObj) {
  var sum = 0;
  for (var i = 0; i < collectionObj.tracks.length; i++) {
    sum += collectionObj.tracks[i].duration;
  }
  return sum;
}

function findTracksByArtist(collectionObj, songArtist) {
  var tracksByArtist = [];
  for (var i = 0; i < collectionObj.tracks.length; i++) {
    if (collectionObj.tracks[i].artist === songArtist) {
      tracksByArtist.push(collectionObj.tracks[i]);
    }
  }
  return tracksByArtist;
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist,
};
