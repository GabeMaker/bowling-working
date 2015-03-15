var Game = function() {

  this.allFrames = [];

};

Game.prototype.addFrame = function(frame) {
  this.checkForSpare();
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

Game.prototype.checkForSpare = function() {
  var frames = this.allFrames;
  var lastFrame = frames[frames.length - 1];
  console.log(frames.length);
  if (frames.length > 0) {
    if (lastFrame.isSpare()) {
      lastFrame.addBonus(5);
    }
  }

};