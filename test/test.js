const buildTime = require('../index');

const date = buildTime(new Date(1504277298480));

const all = date.getAll();
const numberDate = date.getNumberDate();
const shortDate = date.getShortDate();
const fullDate = date.getFullDate();
const time = date.getTime();
const timestamp = date.getTimeStamp();

test('Returns all parameters', () => {
  expect.assertions(11);
  expect(all.day).toBe('01');
  expect(all.fullDay).toBe('Friday');
  expect(all.shortDay).toBe('Fri');
  expect(all.month).toBe('09');
  expect(all.fullMonth).toBe('September');
  expect(all.shortMonth).toBe('Sep');
  expect(all.year).toBe('2017');
  expect(all.hour).toBe('15');
  expect(all.min).toBe('48');
  expect(all.sec).toBe('18');
  expect(all.ampm).toBe('pm');
});

test('Returns the date in dd/mm/yyyy format', () => {
  expect(numberDate).toBe('01/09/2017');
});

test('Returns the date in dd shortMonth yyyy format', () => {
  expect(shortDate).toBe('01 Sep 2017');
});

test('Returns the date in Friday 1 September 2017 format', () => {
  expect(fullDate).toBe('Friday 1 September 2017');
});

test('Returns the time in hh:mm:ss format', () => {
  expect(time).toBe('15:48:18');
});

test('Returns the date in dd/mm/yyyy, hh:mm:ss am/pm format', () => {
  expect(timestamp).toBe('01/09/2017, 15:48:18 pm');
});
