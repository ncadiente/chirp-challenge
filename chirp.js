
module.exports = chirp;

function chirp(num, string) {
  var decremented = num - 1;
if (num === 0) {
  return "";
}
return string + " " + chirp (decremented, string);
}

//console.log(chirp(10, "obi-dee-obi-da"));