import { compose, join, map, toPairs } from 'ramda';
import { DICT } from './types';

const stringify = (dict: DICT): string =>
  compose(
    join(';'),
    map(join('=')),
    toPairs
  )(dict);

// Complexity: O(n x m), which is equal to the complexity to traverse a 2d array
// where n is size of array & m is size of dictionary
export default (dicts: DICT[]): string =>
  compose(
    join('\n'),
    map(stringify)
  )(dicts);
