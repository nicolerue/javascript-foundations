function createSong(name, artist, boolean) {
  var djObj = {
    name: name,
    artist: artist,
    favorite: boolean,
    hasBeenPlayed: false,
  };
  if (djObj.favorite === undefined) {
    djObj.favorite = false;
  }

  return djObj;
}

function playSong(songObj) {
  songObj.hasBeenPlayed = true;
  return songObj;
}

function makePlaylist(playlistName, arrayOfObjs) {
  var playlist = {
    name: playlistName,
    songs: arrayOfObjs,
  };
  return playlist;
}

//add songObj into the playlist's array. playlist is an object.

function addSongToPlaylist(playlistObj, songObj) {
  playlistObj.songs.push(songObj);
  return playlistObj;
}

// get into the playlist object, - playlistObj
// then get into the songs key - playlistObj.songs
// then access the array playlistObj.songs[i]
// then change each of the hasbeenplayed keys to true

// function playSongs(playlistObj) {
//   console.log(playlistObj);
//   console.log(playlistObj.songs);
//   for (var i = 0; i < playlistObj.songs.length; i++) {
//     playlistObj.songs[i].hasBeenPlayed = true;
//   }
//   return playlistObj;
// }

function playSongs(playlistObj) {
  console.log(playlistObj);
  console.log(playlistObj.songs);
  for (var i = 0; i < playlistObj.songs.length; i++) {
    if (playlistObj.songs[i].favorite === true) {
      playlistObj.songs[i].hasBeenPlayed = true;
    }
    if (playlistObj.songs[i].favorite === false) {
      playlistObj.songs[i].hasBeenPlayed = true;
    }
  }
  return playlistObj;
}

module.exports = {
  createSong,
  playSong,
  makePlaylist,
  addSongToPlaylist,
  playSongs,
};
