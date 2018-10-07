function Game() {
  this.frames = []
}

Game.prototype.addFrame = function() {
  if(this.frames.length >= 10) throw ("You can only have 10 frames");
  this.frames.push(new Frame());
}
