// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/toc');

test('toc', t => {
  const params = { 'slate.enabled': 'false', 'tocHeadingLevel': '2' };
  const toc = { slateEnabled: false, headingLevel: 2, levels: [] };

  t.deepEqual(filters.toc(params), toc);
});

test('heading', t => {
  const tocSlateEnabled = { slateEnabled: true, headingLevel: 2, levels: [] };
  t.is(filters.heading('foo', tocSlateEnabled, 1), 'foo');

  const toc = { slateEnabled: false, headingLevel: 2, levels: [] };
  t.is(filters.heading('bar', toc, 1), '1. bar');
  t.is(filters.heading('bar', toc, 1), '2. bar');
  t.is(filters.heading('bar', toc, 2), '2.1. bar');
  t.is(filters.heading('bar', toc, 2), '2.2. bar');
  t.is(filters.heading('bar', toc, 3), '2.2.1. bar');
  t.is(filters.heading('bar', toc, 3), '2.2.2. bar');
  t.is(filters.heading('bar', toc, 2), '2.3. bar');
  t.is(filters.heading('bar', toc, 1), '3. bar');
  t.is(filters.heading('bar', toc, 2), '3.1. bar');
});
