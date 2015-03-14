describe ("Game", function() {

  beforeEach(function() {
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['roll'])
  });

  it("has no frames to start", function() {
    expect(game.allFrames).toEqual([]);
  });

  it("can add frames", function() {
    game.addFrame(frame);
    expect(game.allFrames).toEqual([frame]);
  });
});