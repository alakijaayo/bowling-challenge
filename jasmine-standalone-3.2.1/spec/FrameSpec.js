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

    it('throws an error if string is put in place of score', function() {
      expect(function() { frame.getFirstBowl("Hello"); }).toThrow('Cannot be a string!')
    })

    it('throws an error if the number is higher than 10', function() {
      expect(function() { frame.getFirstBowl(11); }).toThrow('Number cannot be higher than 10!')
    })

    it('throws an error if person threw a strike with first ball', function() {
      frame.getFirstBowl(10);
      expect(function() { frame.getSecondBowl(1); }).toThrow('Cannot be played as player made Strike')
    })

})
