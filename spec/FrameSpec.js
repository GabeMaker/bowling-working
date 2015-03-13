describe ("Frame", function() {

  var frame;

  describe ("scoring", function() {
    it("has no score to start", function() {
      frame = new Frame;
      expect(frame.score).toBe(0);
    });

    it("can record first roll", function() {
      frame = new Frame;
      frame.rollOne(5);
      expect(frame.rollOne).toBe(5);
    });

  });

});