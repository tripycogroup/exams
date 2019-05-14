import { compose, fromPairs, map, split } from 'ramda';
import { DICT } from './types';

const parse = (text: string): DICT =>
  compose(
    (pairs): DICT => fromPairs(pairs as []),
    map(split('=')),
    split(';')
  )(text);

export default (text: string): DICT =>
  compose(
    map(parse),
    split('\n')
  )(text);
