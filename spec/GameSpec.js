describe ("Game", function() {

  beforeEach(function() {
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['score']);
  });

  it("has no frames to start", function() {
    expect(game.allFrames).toEqual([]);
  });

  it("can add frames", function() {
    game.addFrame(frame);
    expect(game.allFrames).toEqual([frame]);
  });

  it("can calculate total score of frames added", function() {
    frame1 = jasmine.createSpyObj('frame', ['score']);
    frame1.score.andCallFake(function() {
      return 18;
    });
    game.addFrame(frame1);
    expect(game.totalScore()).toEqual(18);

    // look up spies

  });
});