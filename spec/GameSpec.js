describe ("Game", function() {

  it("has no frames to start", function() {
    game = new Game;
    expect(game.allFrames).toEqual([]);
  });

});