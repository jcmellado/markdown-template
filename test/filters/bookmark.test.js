// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/bookmark');

test('bookmarks', t => {
  t.is(filters.bookmarks('xxx', 'foo', 'bar'), 'xxx');
  t.is(filters.bookmarks('jane', 'john', 'doe'), 'jane');

  t.is(filters.bookmarks(null, 'foo', 'bar'), 'xxx');
  t.is(filters.bookmarks(null, 'john', 'doe'), 'jane');
});
