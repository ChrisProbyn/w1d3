var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },

  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    var playLists = this.playlists;
    for(let playlist in playLists){
      console.log(playLists[playlist].id + ": " + playLists[playlist].name + " - " + playLists[playlist].tracks.length + " tracks");
    }
  },

  printTracks: function () {
    var tracks = this.tracks;
    for(let track in tracks){
      console.log(tracks[track].id + ": " + tracks[track].name + " by " + tracks[track].artist + " (" +  tracks[track].album + ")");
    }
  },

  printPlaylist: function (playlistId) {
    var playLists = this.playlists;
    console.log(playLists[playlistId].id + ": " + playLists[playlistId].name + " - " + playLists[playlistId].tracks.length + " tracks");
    var tracks = this.playlists[playlistId].tracks;
    for(let track of tracks){
      console.log(this.tracks[track].id + ": " + this.tracks[track].name + " by " + this.tracks[track].artist + " (" +  this.tracks[track].album + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    if(library.playlists[playlistId] && library.tracks[trackId]){
      this.playlists[playlistId].tracks.push(trackId);
    }
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    this.tracks['t04'] = {  id: uid() ,
                            name: name,
                            artist: artist,
                            album: album }
  },

  addPlaylist: function (name) {
  this.playlists['p03'] = {  id: uid(),
                                name: name,
                                tracks: ["t04"]
                              }
  },



};


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//var printPlaylists = function (libarary) {
 // var playLists = libarary.playlists;
 // for(let playlist in playLists){
  //  console.log(playLists[playlist].id + ": " + playLists[playlist].name + " - " + playLists[playlist].tracks.length + " tracks");
 // }
//}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//var printTracks = function (library) {
  //var tracks = library.tracks;
  //for(let track in tracks){
    // console.log(playlist)
    //console.log(tracks[track].id + ": " + tracks[track].name + " by " + tracks[track].artist + " (" +  tracks[track].album + ")");
  //}
//}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

//var printPlaylist = function (playlistId) {
//  var playLists = library.playlists;
  //console.log(playLists[playlistId].id + ": " + playLists[playlistId].name + " - " + playLists[playlistId].tracks.length + " tracks");
  //var tracks = library.playlists[playlistId].tracks;
  //for(let track of tracks){
   // console.log(library.tracks[track].id + ": " + library.tracks[track].name + " by " + library.tracks[track].artist + " (" +  library.tracks[track].album + ")");
 // }
//}

// adds an existing track to an existing playlist

//var addTrackToPlaylist = function (trackId, playlistId) {
  //library.playlists[playlistId].tracks.push(trackId);
//}

// generates a unique id
// (use this for addTrack and addPlaylist)

//var uid = function() {
  //return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//}


// adds a track to the library

//var addTrack = function (name, artist, album) {
  //library.tracks['t04'] = { id: uid() ,
    //                      name: name,
      //                    artist: artist,
         //                 album: album }
//}

// adds a playlist to the library

//  library.playlists['p03'] = {  id: uid(),
  //                              name: name,
    //                            tracks: ["t04"]
      //                        }
//}
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}