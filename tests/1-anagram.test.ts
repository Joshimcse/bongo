import { assert } from "chai";
import isAnagram from "../anagram/anagram";

/**
 * @test :: Unit testing for Q.1 - Is Anagram or Not
 * @passingData ::
 *
 * expected case - 1: should return true when two string is anagram - ['table', 'bleat']
 * expected case - 2: should return false when two string are not anagram - ['tar', 'eat']
 * expected case - 3: Should return true when passing value with whitespace but strings are still anagram - ['William Shakespeare', 'I am a weakish speller']
 */
describe("Unit testing for Q.1: Anagram ", () => {
  it("should return true when two string is anagram - ['table', 'bleat']", (done) => {
    assert.equal(isAnagram("table", "bleat"), true);
    done();
  });

  it("should return false when two string are not anagram - ['tar', 'eat']", (done) => {
    assert.equal(isAnagram("tar", "eat"), false);
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
