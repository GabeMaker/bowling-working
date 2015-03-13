var Frame = function() {
  this.score = 0;
};

Frame.prototype.rollOne = function(roll) {
  this.rollOne = roll;
};

// Frame.prototype.score = function() {
//   this.score = this.rollOne + this.rollTwo;
//   return this.score
// };