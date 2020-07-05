// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/bookmark');

test('bookmarks', t => {
  t.deepEqual(filters.bookmarks(), new Map());
});

test('bookmark', t => {
  const bookmarks = filters.bookmarks();

  t.is(filters.bookmark('baz', bookmarks, 'foo', 'bar'), 'baz');
  t.is(filters.bookmarked('bar', bookmarks, 'foo'), 'baz');
  t.is(filters.bookmark('doe', bookmarks, 'foo', 'john'), 'doe');
  t.is(filters.bookmarked('john', bookmarks, 'foo'), 'doe');
});

test('bookmarked', t => {
  const bookmarks = filters.bookmarks();

  t.is(filters.bookmark('baz', bookmarks, 'foo', 'bar'), 'baz');
  t.is(filters.bookmarked('bar', bookmarks, 'foo'), 'baz');
});
