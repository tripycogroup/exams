import { head, path } from 'ramda';
import parseArgs from 'minimist';
import examSelector from './exam-selector';

// get arguments from command-line
const args = parseArgs(process.argv.slice(2));
const exam_id: number = path(['exam'], args) || head(path(['_'], args));

// find exam's handler from exam_id & excute it
const handler = examSelector(exam_id);

handler();
