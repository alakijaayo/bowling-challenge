function Frame() {
  this.firstBowl = 0;
  this.secondBowl = 0;
}

Frame.prototype.getFirstBowl = function(pins_knocked) {
  return this.firstBowl = pins_knocked;
}

Frame.prototype.getSecondBowl = function(pins_knocked) {
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
