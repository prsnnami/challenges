import { assert, expect } from 'chai';
import spiral from '../lib/circular-matrix';

describe('Spiral matrix challenge', function() {
  it('should return correct answer', function() {
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let expected_output = [1,2,3,6,9,8,7,4,5];
    expect(spiral(matrix)).to.deep.equal(expected_output);
  });
});