// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/utils');

test('isDefined', t => {
  t.false(filters.isDefined(undefined));
  t.false(filters.isDefined(null));

  t.true(filters.isDefined(false));
  t.true(filters.isDefined(0));
  t.true(filters.isDefined(''));
  t.true(filters.isDefined([]));
  t.true(filters.isDefined({}));
  t.true(filters.isDefined(true));
  t.true(filters.isDefined(1));
  t.true(filters.isDefined('foo'));
  t.true(filters.isDefined([1, 2, 3]));
  t.true(filters.isDefined({ 'foo': 'bar' }));
});

test('isBoolean', t => {
  t.false(filters.isBoolean(undefined));
  t.false(filters.isBoolean(null));
  t.false(filters.isBoolean(0));
  t.false(filters.isBoolean(''));
  t.false(filters.isBoolean([]));
  t.false(filters.isBoolean({}));
  t.false(filters.isBoolean(1));
  t.false(filters.isBoolean('foo'));
  t.false(filters.isBoolean([1, 2, 3]));
  t.false(filters.isBoolean({ 'foo': 'bar' }));

  t.true(filters.isBoolean(false));
  t.true(filters.isBoolean(true));
});

test('isArray', t => {
  t.false(filters.isArray(undefined));
  t.false(filters.isArray(null));
  t.false(filters.isArray(false));
  t.false(filters.isArray(0));
  t.false(filters.isArray(''));
  t.false(filters.isArray(true));
  t.false(filters.isArray({}));
  t.false(filters.isArray(1));
  t.false(filters.isArray('foo'));
  t.false(filters.isArray({ 'foo': 'bar' }));

  t.true(filters.isArray([]));
  t.true(filters.isArray([1, 2, 3]));
});

test('keys', t => {
  t.deepEqual(filters.keys({}), []);
  t.deepEqual(filters.keys({ 'foo': 'bar' }), ['foo']);
  t.deepEqual(filters.keys({ 'john': 'doe', 'jane': 'doe' }), ['john', 'jane']);
});

test('chunks', t => {
  t.deepEqual(filters.chunks(''), []);
  t.deepEqual(filters.chunks('foo'), ['foo']);
  t.deepEqual(filters.chunks('foo,bar'), ['foo', 'bar']);
  t.deepEqual(filters.chunks('foo, bar, baz'), ['foo', 'bar', 'baz']);
});
