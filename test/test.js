const buildTime = require('../index');

const date = buildTime(new Date(1504277298480));

test('Returns the date', () => {
  expect(date.day).toBe('01');
});

test('Returns the day in text format', () => {
  expect(date.fullDay).toBe('Friday');
});

test('Returns the short version of the day', () => {
  expect(date.shortDay).toBe('Fri');
});

test('Returns the month in number format', () => {
  expect(date.month).toBe('09');
});

test('Returns the month in text format', () => {
  expect(date.fullMonth).toBe('September');
});

test('Returns the short version of the month', () => {
  expect(date.shortMonth).toBe('Sep');
});

test('Returns the year', () => {
  expect(date.year).toBe('2017');
});

test('Returns the hour', () => {
  expect(date.hour).toBe('15');
});

test('Returns the min', () => {
  expect(date.min).toBe('48');
});

test('Returns the sec', () => {
  expect(date.sec).toBe('48');
});

test('Returns wether AM or PM', () => {
  expect(date.ampm).toBe('pm');
});
