var Game = function() {

  this.allFrames = [];

};

Game.prototype.addFrame = function(frame) {
  this.allFrames.push(frame);
};

Game.prototype.totalScore = function() {
  var result = 0;
  var frames = this.allFrames;
  for (var i = 0; i < frames.length; ++i) {
    result += frames[i].score;
  }
  return result;
};
