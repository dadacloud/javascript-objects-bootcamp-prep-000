var playlist = {
  Slowdive:"Alison",
  MyBloodyValentine: "Sometimes",
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName){
  playlist.artistName = [];
  return playlist;
}

