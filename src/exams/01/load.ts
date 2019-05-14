import { compose, fromPairs, map, split } from 'ramda';
import { DICT } from './types';

const parse = (text: string): DICT =>
  compose(
    (pairs): DICT => fromPairs(pairs as []),
    map(split('=')),
    split(';')
  )(text);

// Complexity: O(n x m), which is equal to the complexity to traverse a 2d array
// where n is size of array & m is size of dictionary
export default (text: string): DICT =>
  compose(
    map(parse),
    split('\n')
  )(text);
