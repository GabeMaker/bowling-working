var Frame = function() {
  this.score = 0;
  // this.rollOne = 0;
  // this.rollTwo = 0;
};

Frame.prototype.roll = function(roll1, roll2) {
  this.rollOne = roll1;
  this.rollTwo = roll2;
  this.updateScore();
};

Frame.prototype.updateScore = function() {
  this.score = this.rollOne + this.rollTwo;
};