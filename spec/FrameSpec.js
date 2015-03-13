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

  });

});