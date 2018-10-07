'use strict'

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

    it('returns the score of the players first bowl', function() {
      expect(frame.getFirstBowl(8)).toEqual(8);
    });

    it('returns the score of the players second bowl', function() {
      expect(frame.getSecondBowl(1)).toEqual(1);
    });

    it('returns the total score of the players frame', function () {
      frame.getFirstBowl(4);
      frame.getSecondBowl(5);
      expect(frame.addFrameScore()).toEqual(9)
    })

    it('returns the frame in array form', function() {
      frame.getFirstBowl(4);
      frame.getSecondBowl(5);
      expect(frame.getFrame()).toEqual([4,5])
    })

    it('should return true if the first roll is a strike', function() {
      frame.getFirstBowl(10);
      expect(frame.isStrike()).toBe(true);
    })

    it('should return true if the first and second roll is a spare', function() {
      frame.getFirstBowl(7);
      frame.getSecondBowl(3);
      expect(frame.isSpare()).toBe(true);
    })


    // it('throws an error if first bowl is a strike', function () {
    //   frame.getFirstBowl(10);
    //   expect(function() {frame.getSecondBowl(1)}).toThrow(new Error ('cannot bowl again if first bowl was a strike'));
    // })
})
