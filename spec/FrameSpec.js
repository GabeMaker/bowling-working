describe ("Frame", function() {

  var frame;

  describe ("scoring", function() {
    it("has no score to start", function() {
      frame = new Frame;
      expect(frame.score).toBe(0);
    });

    it("can record first roll", function() {
      frame = new Frame;
      frame.roll(5);
      expect(frame.rollOne).toBe(5);
    });

    it("can record second roll", function() {
      frame = new Frame;
      frame.roll(5, 4);
      expect(frame.rollOne).toBe(5);
      expect(frame.rollTwo).toBe(4);
    });

    it("can calculate score after 2 rolls", function() {
      frame = new Frame;
      frame.roll(5, 4);
      expect(frame.score).toBe(9);
    });

    it("can recognise when a spare has been scored", function() {
      frame = new Frame;
      frame.roll(5,5);
      expect(frame.isSpare()).toBe(true);
      expect(frame.isStrike()).toBe(false);
    });

    it("can recognise when a strike has been scored", function() {
      frame = new Frame;
      frame.roll(10);
      expect(frame.isSpare()).toBe(false);
      expect(frame.isStrike()).toBe(true);
    });

    // it("can add the score from future rounds as a bonus". function() {
    //   frame = new Frame;
    //   frame.roll(10);
    // });
  });

});