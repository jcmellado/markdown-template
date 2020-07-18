// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/toc');

test('headings', t => {
  const slateDisabled = { 'slate.enabled': 'false' };

  t.is(filters.headings(slateDisabled), slateDisabled);
  t.is(filters.headings('bar', 1), '1. bar');
  t.is(filters.headings('bar', 1), '2. bar');
  t.is(filters.headings('bar', 2), '2.1. bar');
  t.is(filters.headings('bar', 2), '2.2. bar');
  t.is(filters.headings('bar', 3), '2.2.1. bar');
  t.is(filters.headings('bar', 3), '2.2.2. bar');
  t.is(filters.headings('bar', 2), '2.3. bar');
  t.is(filters.headings('bar', 1), '3. bar');
  t.is(filters.headings('bar', 2), '3.1. bar');

  const slateEnabled = { 'slate.enabled': 'true' };

  t.is(filters.headings(slateEnabled), slateEnabled);
  t.is(filters.headings('baz', 1), 'baz');
});

test('bookmarks', t => {
  t.is(filters.bookmarks('baz', 'foo', 'bar'), 'baz');
  t.is(filters.bookmarks('jane', 'john', 'doe'), 'jane');

  t.is(filters.bookmarks(null, 'foo', 'bar'), 'baz');
  t.is(filters.bookmarks(null, 'john', 'doe'), 'jane');
});
