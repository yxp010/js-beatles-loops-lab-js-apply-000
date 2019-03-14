// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {

  var beatlesPlay = []
  var i

  for (i = 0, len = musicians.length; i < len; i++) {
    beatlesPlay.push(musicians[i] + instruments[i])
  }

  return beatlesPlay
}

theBeatlesPlay(musicians, theBeatlesPlay)
