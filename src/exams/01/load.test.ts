import load from './load';

test('check loading object[] from text', (): void => {
  const input = 'key1=value1;key2=value2;key3=value3\nkey4=value4\nkey5=value5';

  expect(load(input)).toEqual([
    {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    },
    {
      key4: 'value4',
    },
    {
      key5: 'value5',
    },
  ]);
});
