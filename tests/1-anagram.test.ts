import { assert } from "chai";
import isAnagram from "../anagram/anagram";

/**
 * @test :: Testing
 * @passingData :: two string
 *
 * expected case - 1: should return true when two string is anagram - ['xyz', 'abc']
 * expected case - 2: should return false when two string are not anagram - ['xyz', 'abc']
 * expected case - 3: Should return true when passing value with whitespace but strings are still anagram - ['William Shakespeare', 'I am a weakish speller']
 */
describe("Unit testing for Q.1: Anagram ", () => {
  it("should return true when two string is anagram - ['xyz', 'abc']", (done) => {
    assert.equal(isAnagram("xyz", "abc"), false);
    done();
  });

  it("should return false when two string are not anagram - ['xyz', 'abc']", (done) => {
    assert.equal(isAnagram("xyz", "abc"), false);
    done();
  });

  it("Should return true when passing value with whitespace but strings are still anagram - ['William Shakespeare', 'I am a weakish speller']", (done) => {
    assert.equal(
      isAnagram("William Shakespeare", "I am a weakish speller"),
      true
    );
    done();
  });
});
