import store from './store';

test('check storing object[] into text', (): void => {
  const input = [
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
  ];

  expect(store(input)).toBe('key1=value1;key2=value2;key3=value3\nkey4=value4\nkey5=value5');
});
