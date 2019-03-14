// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {

  var beatlesPlay = []
  var i = 0
  var len = musicians.length

  for (; i < len; i++) {
    beatlesPlay.push(musicians[i] + ' plays ' + instruments[i])
  }

  return beatlesPlay
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  var len = facts.length

  for (;i < len; i++) {
    newFacts.push(facts[i] + '!!!')
  }

  return newFacts
}
