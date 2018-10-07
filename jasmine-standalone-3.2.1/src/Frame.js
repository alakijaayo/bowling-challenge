function Frame() {
  this.firstBowl = 0;
  this.secondBowl = 0;
}

Frame.prototype.getFirstBowl = function(pins_knocked) {
  if (pins_knocked > 10) throw('Number cannot be higher than 10!');
  if (!Number.isInteger(pins_knocked)) throw('Cannot be a string!');
  return this.firstBowl = pins_knocked;
}

Frame.prototype.getSecondBowl = function(pins_knocked) {
  if (this.firstBowl === 10) throw('Cannot be played as player made Strike')
  if (!Number.isInteger(pins_knocked)) throw('Cannot be a string!');
  return this.secondBowl = pins_knocked;
}

Frame.prototype.addFrameScore = function () {
  return this.firstBowl + this.secondBowl;
}

Frame.prototype.getFrame = function() {
  return [this.firstBowl, this.secondBowl];
}

Frame.prototype.isStrike = function() {
  if (this.firstBowl === 10);
  return true;
}

Frame.prototype.isSpare = function() {
  if(this.addFrameScore() === 10);
  return true;
}
