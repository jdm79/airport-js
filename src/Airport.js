function Airport() {
  this._hangar = []
}

Airport.prototype.planes = function(){ return this._hangar }
Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane)
}
Airport.prototype.clearForTakeoff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot take off during storm')
  }
  this._hangar = []
}

Airport.prototype.isStormy = function() {
  var weather = [false, true]
  var random = Math.floor(Math.random() * weather.length)
  return weather[random] 
}
