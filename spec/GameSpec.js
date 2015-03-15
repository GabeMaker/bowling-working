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
    frame2.roll(8,1);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(frame1.score).toBe(18);
    expect(game.totalScore()).toBe(27);
  });

  it("can add bonuses when a strike has been rolled", function() {
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(10);
    frame2.roll(8,1);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(frame1.score).toBe(19);
    expect(game.totalScore()).toBe(28);
  });

  it("can calculate the impact of consecutive strikes correctly", function() {
    strikeFrame = new Frame;
    strikeFrame.roll(10);
    strikeFrame2 = new Frame;
    strikeFrame2.roll(10);
    eightFrame = new Frame;
    eightFrame.roll(5,3);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame2);
    game.addFrame(eightFrame);
    expect(game.totalScore()).toBe(51);



  });

});