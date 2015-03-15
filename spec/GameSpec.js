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
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(5,2);
    frame2.roll(6,3);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(game.totalScore()).toEqual(16);
  });

  it("can add bonuses when a spare has been rolled previously", function() {
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(5,5);
    frame2.roll(5,3);
    game.addFrame(frame1);
    game.addFrame(frame1);
    expect(frame1.score).toBe(15);
  });
});