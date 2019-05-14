import { compose, join, map, toPairs } from 'ramda';
import { DICT } from './types';

const stringify = (dict: DICT): string =>
  compose(
    join(';'),
    map(join('=')),
    toPairs
  )(dict);

export default (dicts: DICT[]): string =>
  compose(
    join('\n'),
    map(stringify)
  )(dicts);
