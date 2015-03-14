var Game = function() {

  this.allFrames = [];

};

Game.prototype.addFrame = function(frame) {
  this.allFrames.push(frame);
};