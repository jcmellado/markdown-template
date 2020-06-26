// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const filters = module.exports;

filters.isDefined = (value) =>
  (value !== undefined) && (value !== null);

filters.isBoolean = (value) =>
  typeof value === 'boolean';

filters.isArray = (value) =>
  Array.isArray(value);

filters.keys = (object) =>
  Object.keys(object);

filters.chunks = (text) =>
  text === '' ? [] : text.split(',').map(item => item.trim());
