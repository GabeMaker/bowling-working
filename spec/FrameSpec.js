describe ("Frame", function() {

  var frame;

  describe ("rolling", function() {
    it("has no score to start", function() {
      frame = new Frame;
      expect(frame.score).toBe(0);
    });

  });

});