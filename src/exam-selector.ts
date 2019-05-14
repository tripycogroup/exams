import { find, invoker, prop, propEq } from 'ramda';
import { drawTitle } from './utils';

// configs
const EXAMS = [
  {
    id: 1,
    title: 'EXAM   1',
    handler: require('./exams/01').default,
  },
  {
    id: 2,
    title: 'EXAM   2',
    handler: require('./exams/02').default,
  },
  {
    id: 3,
    title: 'EXAM   3',
    handler: require('./exams/03').default,
  },
];

// handler selector
export default (exam_id: number): Function => (): void => {
  const exam = find(propEq('id', exam_id))(EXAMS);
  const title = prop('title', exam);

  if (!exam) {
    console.error('Invalid exam id. Acceptable ids: 1, 2, 3');
    process.exit(1);
  }

  const handler = invoker(0, 'handler');

  if (!handler) {
    console.error('Invalid handler. Exit!');
    process.exit(1);
  }

  drawTitle(title);
  handler(exam);
};
