'use strict';

const arrayOfPeople = require('./arrayOfPeople');

test('No people', () => {
  expect(arrayOfPeople([]))
    .toEqual([]);
});

test('Single person', () => {
  expect(arrayOfPeople([23]))
    .toEqual([23]);
});

test('Single person reentering', () => {
  expect(arrayOfPeople([23, 23, 23]))
    .toEqual([23]);
});

test('Single person leaving', () => {
  expect(arrayOfPeople([23, 23, 23, 23]))
    .toEqual([]);
});

test('Sample test', () => {
  expect(arrayOfPeople([1, 3, 2, 1, 2, 1]))
    .toEqual([3, 1]);
});

test('5 people, no one leaving', () => {
  expect(arrayOfPeople([3, 2, 5, 4, 1]))
    .toEqual([3, 2, 5, 4, 1]);
});

test('10 people, 20 events', () => {
  expect(arrayOfPeople(
    [4, 9, 8, 7, 1, 0, 8, 3, 8, 5, 6, 8, 1, 5, 9, 2, 0, 4, 6, 2]))
    .toEqual([7, 3]);
});

test('20 people, 100 events', () => {
  expect(arrayOfPeople(
    [19, 7, 16, 3, 16, 15, 8, 19, 17, 3, 16, 9, 19, 8, 4, 7, 18, 4, 8,
      19, 19, 16, 14, 8, 17, 19, 8, 11, 19, 16, 3, 7, 14, 11, 10, 3, 5, 6, 19,
      10, 13, 5, 15, 10, 7, 9, 1, 0, 11, 15, 2, 11, 1, 18, 19, 13, 12, 11, 7, 2,
      18, 1, 19, 10, 15, 16, 4, 13, 2, 18, 13, 16, 2, 8, 13, 0, 1, 0, 11, 13,
      16, 14, 8, 7, 16, 17, 6, 16, 6, 14, 19, 14, 3, 16, 3, 19, 0, 13, 17, 13]))
    .toEqual([12, 4, 8, 6, 14, 16]);
});
