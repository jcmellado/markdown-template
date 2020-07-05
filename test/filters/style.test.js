// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/style');

test('bold', t => {
  t.is(filters.bold('foo'), '**foo**');
});

test('italic', t => {
  t.is(filters.italic('foo'), '*foo*');
});

test('link', t => {
  t.is(filters.link('foo'), '[foo](foo)');
  t.is(filters.link('foo', 'bar'), '[bar](foo)');
});

test('reference', t => {
  t.is(filters.reference('foo'), '[foo](#foo)');
  t.is(filters.reference('foo', 'bar'), '[bar](#foo)');
  t.is(filters.reference('a b c'), '[a b c](#a-b-c)');
  t.is(filters.reference('a.b c.d'), '[a.b c.d](#ab-cd)');
  t.is(filters.reference('a X c Y'), '[a X c Y](#a-x-c-y)');
});

test('email', t => {
  t.is(filters.email('foo'), '[foo](mailto:foo)');
  t.is(filters.email('foo', 'bar'), '[bar](mailto:foo)');
});

test('code', t => {
  t.is(filters.code('foo'), '`foo`');
});

test('listItem', t => {
  t.is(filters.listItem('foo', 1), '* foo');
  t.is(filters.listItem('foo', 2), '    * foo');
});

test('br', t => {
  t.is(filters.br('foo'), 'foo<br />');
});

test('lf', t => {
  t.is(filters.lf('foo'), 'foo  ');
});
