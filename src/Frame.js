var Frame = function() {
  this.score = 0;
};

Frame.prototype.roll = function(roll1, roll2) {
  this.rollOne = roll1;
  this.rollTwo = roll2;
};

// Frame.prototype.score = function() {
//   this.score = this.rollOne + this.rollTwo;
//   return this.score
// };